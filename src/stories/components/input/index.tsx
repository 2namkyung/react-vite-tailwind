import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label = '',
  placeholder = '',
  type = 'text',
  disabled = false,
  size = 'medium',
  value = '',
  onChange = () => {},
}: Readonly<InputProps>) {
  const inputId = `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-${size}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
