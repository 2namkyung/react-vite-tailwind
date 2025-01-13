import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, ...props }: Readonly<ButtonProps>) {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
