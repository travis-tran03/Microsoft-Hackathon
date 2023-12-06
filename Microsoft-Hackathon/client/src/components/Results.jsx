import React, { useState } from 'react';
import axios from 'axios';

const Results = () => {
const [showData, setShowData] = useState(false);
  const [inputValue, setInputValue] = useState('');

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
      const fetchData = async () => {
        setLoading(true);
        const response = await axios.post('http://127.0.0.1:8000/find', {user_text: inputValue})
       .then((res) => {setData(res.data);console.log(res.data); setLoading(false);})
       .catch((err) => console.log(err));
        
        console.log(response)
        }

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputStyle = {
    width: '50vh',
    height: '15vh',
    padding: '10px',
    'background-color': 'rgb(220, 189, 151)',
    color: 'black',
    fontSize: '1.5vh',
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
    <button style={{marginTop: "2vh", color: 'black', backgroundColor: 'rgb(220, 189, 151)', border: '0.3vh solid black', fontWeight: 'bold'}} onClick={() => [fetchData()]}> FIND OUT NOW!!! </button>
        <>
            <div>
               {!loading ? data.length > 0 && data.map((major) => {
                return(
                  <>
                    <div className='majorContainer'>
                      <div style={{marginBottom: "3vh", fontSize: "3vh", fontWeight: "bold"}}>{major.Majors}</div>
                      <div style={{marginBottom: "3vh", fontSize: "1.2vh"}}>{major.Description} </div>
                      <a style={{marginBottom: "3vh", fontSize: "2.2vh"}} href={major.Majors_href} target='_blank'> {major.Majors_href} </a>
                    </div>
                  </>
               )})  : <div> Generating Results ... </div>
               }
            </div>
      </>
    </>
  );
};

export default Results;
