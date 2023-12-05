import React, { useState } from 'react';
import Results from './Results.jsx'

const TextBox = () => {

  const [inputValue, setInputValue] = useState('');


  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputStyle = {
    width: '300px', 
    padding: '10px', 
  };

  return (
    <>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder="Enter things your interests and hobbies here :)"
        style={inputStyle} 
      />
    </div>
    <button onClick={() => {return<Results input = {inputValue}/>}}> CLick Me </button>
    </>

  );
};

export default TextBox;
