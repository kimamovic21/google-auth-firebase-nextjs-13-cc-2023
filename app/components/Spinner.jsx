'use client';
import React from 'react';
import Image from 'next/image';
import SpinnerGif from '../../spinner.gif';

const Spinner = () => {
  return (
    <div>
        <Image 
            src={SpinnerGif} 
            alt='loading...'
            width='50'
            height='50'
        />
    </div>
  );
};

export default Spinner;
