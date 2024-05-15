import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Accounts from './routes/Accounts';
import CoinPage from './components/CoinPage';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
  },[url])

  return (
    <AuthContextProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={data}/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Accounts/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>} />
          <Route path=":coinId"/>
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  )
}

export default App
