'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, googleSignIn, googleSignOut } = UserAuth();
  console.log(user);
//   console.log(googleSignIn);
//   console.log(googleSignOut);

  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
        await googleSignIn();
    }
    catch(error) {
        console.log(error);
    };
  };

  const handleSignOut = async () => {
    try {
        await googleSignOut();
    }
    catch(error) {
        console.log(error);
    };
  };

  useEffect(() => {
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>

        <ul className='flex '>
            <li className='p-2 cursor-pointer'>
                <Link href='/'>Home</Link>
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href='/about'>About</Link>
            </li>
            {!user ? null : (
                <li className='p-2 cursor-pointer'>
                    <Link href='/profile'>Profile</Link>
                </li>
            )}
        </ul>

        {loading ? null : (!user ? (
          <>
            <ul className='flex'>
                <li className='p-2 cursor-pointer'
                    onClick={handleSignIn}
                >
                    Login
                </li>
                <li className='p-2 cursor-pointer'
                    onClick={handleSignIn}
                >
                    Sign up
                </li>
            </ul>
          </> ) : ( 
          <div>
            <p>Welcome, {user.displayName}</p>
            <p className='cursor-pointer'
                onClick={handleSignOut}
            >
                Sign Out
            </p>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
