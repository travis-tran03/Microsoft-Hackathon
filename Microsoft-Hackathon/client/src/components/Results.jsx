import React, { useState } from 'react';
import axios from 'axios';

const Results = () => {
const [showData, setShowData] = useState(false);
  const [inputValue, setInputValue] = useState('');

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
      const fetchData = async () => {
        setLoading(true);
        const response = await axios.post('http://127.0.0.1:5000/find', {user_text: inputValue})
       .then((res) => {setData(res.data);console.log(res.data); setLoading(false);})
       .catch((err) => console.log(err));
        
        console.log(response)
        }

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
    <button onClick={() => [fetchData()]}> FIND OUT NOW!!! </button>
        <>
            <div>
               {!loading ? data.length > 0 && data.map((major) => {
                return(<div>{major} </div>)
               })  : <div> Generating Results ... </div>
               }
            </div>
      </>
    </>
  );
};

export default Results;
