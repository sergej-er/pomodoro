import React from 'react';

const Footer = () => {
  return (
    <div className='fixed bottom-0 flex items-center justify-center w-full h-16'>
      <a
        href='https://github.com/sergej-er/pomodoro'
        className='text-blue-400 cursor-pointer hover:text-blue-600'
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
