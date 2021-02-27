import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className='absolute top-0 flex items-center justify-between w-full h-16 px-8 text-gray-800 bg-gray-100 border-b-2 border-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-100'>
      <span className='left-0 text-xl'>Pomodoro</span>

      <ThemeToggle />
    </div>
  );
};

export default Header;
