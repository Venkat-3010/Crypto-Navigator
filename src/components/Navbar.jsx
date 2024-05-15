import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import Switcher from './Switcher';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const {user, logout} = UserAuth;
  const navigate = useNavigate();

  const handleSingOut = async () => {
    try {
        await logout();
        navigate("/signin");
    }catch (err) {
        console.log(err.message);
    }
  };

  return (
    <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
        <Link to="/">
            <h1 className='text-2xl'>CryptoNaigator</h1>
        </Link>
        <div className='md:block hidden'>
            <Switcher />
        </div>
        <div className='md:block hidden'>
            {user?.email ?(
                <div className='flex'>
                    <Link to="/account">
                        <CgProfile className='mr-4 mt-1 cursor-pointer' size={26}/>
                    </Link>
                    <button onClick={handleSingOut}>Log Out</button>
                </div>
            ) : (
                <Link to="/signin">
                    <button>Sign In</button>
                </Link>
            )}
        </div>
        <div className='md:hidden block'>
            <MobileMenu signOut={handleSingOut} user={user}/>
        </div>
    </div>
  )
}

export default Navbar