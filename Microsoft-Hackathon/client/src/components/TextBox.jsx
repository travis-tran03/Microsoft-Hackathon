import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder="Enter information about yourself :)"
        style={inputStyle} 
      />
    </div>
  );
};

export default TextBox;
