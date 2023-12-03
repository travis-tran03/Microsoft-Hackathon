import { useState, useEffect } from "react";
import axios from "axios";


function Results() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:5000/all')
       .then((res) => {setData(res.data); setLoading(false);})
       .catch((err) => console.log(err));
        
        console.log(response)
    }

  // element.split('\n')[0] => GET RID OF EXTRA TEXT IN DEPARTMENTS
  // element.replace('Majors: ', ''); => GET RID OF MAJORS IN MAJORS

    return (
        <>
        <button onClick={() => {fetchData()}}> CLick Me </button>
            <div>
               {!loading ? Object.values(data).length > 0 && Object.values(data.index).map((index) => {
                    return(
                    <div key={index}> {data.Departments[index].split('\n')[0]} : {data.Majors[index].replace('Major: ', '')} </div>
                    )
               }) : <div> Generating Results ... </div>
               }
            </div>
      </>
    )
}

export default Results;