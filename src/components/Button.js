import React from 'react';
import { ButtonType, ButtonSize, ButtonShape } from '../styles/theme';

const Button = ({ size, type, shape, icon, onClick, children }) => {
  const classNames = `${ButtonType[type || 'default']} ${
    ButtonSize[size || 'sm']
  } ${ButtonShape[shape]}`;

  return (
    <button type='button' onClick={onClick} className={classNames}>
      <div className='flex items-center justify-center'>
        {icon && <span>{icon}</span>}
        <span className={icon && 'pl-2'}>{children}</span>
      </div>
    </button>
  );
};

export default Button;
