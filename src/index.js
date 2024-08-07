import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


function Random(){

    var [count,setCount]=useState(0)



  
    function randomnum(){
      var newcount=Math.floor(Math.random()*100)+1;
      setCount(newcount)
    }
  
  
    return(
      <section className="container">
      <div className="random-number" style={{width:'200px', height:'200px', backgroundColor:'skyblue', alignItems:'center',
        textAlign:'center', justifyContent:'center', border:'2px solid black', placeItems:'center'}}>
          <h1> Random Number </h1>
        <h1>{count}</h1>
      <button className="generate-button" onClick={randomnum}>Random Number</button>
      </div>
      </section>
    
    )
}


  

root.render(
  <React.StrictMode>
    <Random/>
  </React.StrictMode>
);


