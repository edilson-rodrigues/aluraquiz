import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  outline: 0;
  margin-bottom: 25px;
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  onChange, placeholder, value = '', ...props
}) => (
  <div>
    <InputBase
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  </div>
);

export default Input;
