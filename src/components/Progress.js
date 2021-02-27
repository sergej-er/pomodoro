import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div className='w-full pt-1'>
      <div className='flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded'>
        <div
          style={{ width: `${progress}%` }}
          className='flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap'
        ></div>
      </div>
    </div>
  );
};

export default Progress;
