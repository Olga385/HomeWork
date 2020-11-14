import React from 'react';

const Input = ({ text, setText }) => {
  return <input type='text' value={text} onChange={setText} />
}

export default Input;