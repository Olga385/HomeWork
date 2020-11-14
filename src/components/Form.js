import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = ({ addListInArr, text, textChange }) => {
   return (
      <>
         <form onSubmit={(e) => {
            e.preventDefault();
            addListInArr()
         }}>
            <Input value={text} setText={textChange} />
            <Button />

         </form>
      </>
   )
}

export default Form;

