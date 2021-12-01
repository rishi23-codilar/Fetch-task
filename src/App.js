import React, {useState, useEffect} from 'react';
import './Cards/cards.css';


const Api = () => {
  const [data, setData] = useState([]);
  const getApi = async() => {
    
    const response = await fetch('https://reqres.in/api/users?page=');
    let x= await response.json();
    setData(x.data);
  } 
  useEffect(() => {
    getApi();
  }, []);

 
  return (
    <>
    <div className="cards">
      {
        data.map((curEl) => {
          return (
            <div className="card">
            <div className="img"><img src={curEl.avatar} alt=""></img></div>
                <h3>{curEl.email}</h3>
                <h5>{curEl.first_name} {curEl.last_name}</h5>
                
          </div>
        
          )
        })
      }
    </div>
    
    </>
  );
}

export default Api;



