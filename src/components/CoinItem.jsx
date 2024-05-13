import React, { useState } from 'react'

const CoinItem = ({coin}) => {

  const [savedCoin, setSavedCoin] = useState(false);
  const {user} = UserAuth();

  const handleSavedCoin = () => {
    setSavedCoin(prevCoin => !prevCoin)
  }

  const coinPath = doc(db, "user", `${user?.email}`);
  const savedCoin = async () => {
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
    <div>CoinItem</div>
  )
}

export default CoinItem