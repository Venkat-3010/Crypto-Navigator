import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("");
    try{
        await signUp(email, password);
        navigate("/account");
    }catch(error){
        setError(error.message);
        console.log(error.message);
    }
  }

  return (
    <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-color font-semibold text-3xl flex justify-center'>Register Account</h1>
        {error ? <p className='text-red-500 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}> 
            <div className='my-5'>
                <label className='text-color text-xl' htmlFor='email'>Email</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded-2xl' placeholder='Enter Email'/>
                    <AiOutlineMail className='absolute right-4 top-3 text-gray-400' />
                </div>
            </div>
            <div className='my-5'>
                <label htmlFor="password" className='text-color text-xl'>Password</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border rounded-2xl' id='password' required placeholder='Enter Password'/>
                    <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400'/>
                </div>
            </div>
            <button className='sign-btn'>Sign up</button>
        </form>
        <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
            Already have an account?
            <span className='text-blue-500 dark:text-blue-400 cursor-pointer' onClick={() => navigate("/signin")}> Login now!</span>
        </p>
    </div>
  )
}

export default SignUp;