import React from 'react'

const Footer = () => {
  return (
    <div className='rounded-div mt-8 w-full'>
        <div className='my-5 flex justify-around mb-2 text-xs'>
            <div>
                <h1 className='text-2xl font-semibold'>CryptoNavigator</h1>
                <p className='max-w-[160px] mt-2 text-sm'>CryptoNavigator is a crypto site project made by <a href="https://github.com/Venkat-3010" className='text-[#211ed7]'>Venkat-3010</a>. <br/> website is made with the help of <a href='https://www.coingecko.com' className='text-[#211ed7]'>Coingecko</a> API.</p>
            </div>
            <div>
                <h2>Subscribe to newsletter!</h2>
                <div>
                  <input type="email" className='py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-slate-200' placeholder='Enter your email'/>
                </div>
            </div>
        </div>
        <div className='mt-5 flex justify-center mb-5 text-xs'>
          <small>Made by <a href="https://github.com/Venkat-3010">Venkat-3010</a>. Powered by CoinGecko.</small>
        </div>
    </div>
  )
}

export default Footer