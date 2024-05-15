import React from 'react';
import TrendingItem from './TrendingItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Trending = () =>{

    const [data, setData] = useState([]);
    const url = "https://api.coingecko.com/api/v3/search/trending";

    useEffect(() => {
        axios.get(url)
           .then((response) => {
                setData(response.data.coins);
            })
           .catch((error) => {
                console.log(error);
            })
    },[url]);

    return(
        <div className='rounded-div py-5'>
            <h1 className='text-3xl font-semibold my-5'>Trending</h1>
            <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1'>
                {data.map((coin)=> (
                    <TrendingItem key={coin.item.id} coin={coin}/>
                ))}
            </div>
        </div>
    );
}

export default Trending;