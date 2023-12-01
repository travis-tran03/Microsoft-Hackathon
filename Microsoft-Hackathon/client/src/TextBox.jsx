import React, { useState } from 'react';

const TextBox = () => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Inline styles to set the width of the input
  const inputStyle = {
    width: '300px', // Adjust the width as needed
    padding: '10px', // Optional: Add padding for better appearance
  };

  return (
    <div>
      {/* Input element with value and onChange event */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter information about yourself :)"
        style={inputStyle} // Apply the inline styles
      />
      {/* Display the current input value */}
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default TextBox;
