import React, { useState } from 'react'
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore"


const CoinItem = ({coin}) => {

  const [savedCoin, setSavedCoin] = useState(false);
  const {user} = UserAuth();

  const handleSavedCoin = () => {
    setSavedCoin(prevCoin => !prevCoin)
  }

  const coinPath = doc(db, "user", `${user?.email}`);
  const saveCoin = async () => {
    if(user?.email){
        handleSavedCoin()
        await updateDoc(coinPath, {
            favorites: arrayUnion({
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                image: coin.image,
                current_price: coin.current_price,
                rank: coin.market_cap_rank,
            })
        })
    }else {
        alert("Please Sign in / Sign up")
    }
  }

  return (
    <tr className='h-[75px] border-b overflow-hidden'>
      <td onClick={saveCoin}>
        {savedCoin ? <AiOutlineHeart color='red'/> : <AiOutlineHeart/>}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 ml-2' src={coin.image} alt={coin.id} />
          <div className='w-[90px] hidden sm:table-cell'><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div>
        </div>
      </td>
      <td>
        <div><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='w-[200px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
      <td className='w-[200px] hidden md:table-cell' >${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines svgWidth={140} svgHeight={40} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinItem