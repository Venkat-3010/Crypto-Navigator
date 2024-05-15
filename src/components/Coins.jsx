import React from 'react'
import CoinItem from './CoinItem';

const Coins = ({coins}) => {

  const [searchText, setSearchText] = useState("");

  return (
    <div className='rounded-div my-10 py-4'>
      <div className='flex justify-end my-3'>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none' placeholder='Search'/>
      </div>
      <table className='w-full border-collapse text-center'>
        <thead className='dark:text-white'>
          <tr className='border-b'>
            <th></th>
            <th>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24</th>
            <th className='hidden md:table-cell'>24 Volume</th>
            <th className='hidden md:table-cell'>Market Cap</th>
          </tr>
        </thead>
      </table>
      <tbody className='dark:text-white'>
        {coins.filter((value)=>{
          if(searchText === ""){
            return value;
          }else if(value.name.toLowerCase()){
            return value;
          }
        }).map((coin) => (
          <CoinItem key={coins.id} coin={coin} />
        ))}
      </tbody>
    </div>
  )
}

export default Coins