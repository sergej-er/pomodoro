import React from 'react';
import Button from './Button';

const TimerSelect = ({ handleSelect }) => {
  return (
    <div className='flex items-center justify-center mb-8'>
      <Button size='sm' onClick={() => handleSelect('work')}>
        Work
      </Button>
      <Button size='sm' onClick={() => handleSelect('short')}>
        Short Break
      </Button>
      <Button size='sm' onClick={() => handleSelect('long')}>
        Long Break
      </Button>
    </div>
  );
};

export default TimerSelect;
