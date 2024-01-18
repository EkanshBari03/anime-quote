import "./App.css";
import React, { useState } from "react";
import data from './Data'


function Anime() {

    const [index,setIndex]  = useState(0);

    const getData = () =>{
        let x = Math.floor(Math.random() * data.length)
        setIndex(x)
    }

    const Show = () => {
        return (
          <h1 className="limit" style={{ margin: "5rem" }}>
            Hold up, The characters behind the scenes cant keep coming up with
            quotes...
          </h1>
        );
      };

      const date = new Date();
    return (
      <div className="parent">
       <div className="bg">
        <h1>AnimeQuote</h1>
      </div>
      <div onClick={getData} className="container">
        {!data ? (
          <Show />
        ) : (
          <div className="main">
            <img
              className="tokenImage"
              src="https://i.pinimg.com/736x/79/07/5d/79075d5a8667cafe0845b3333cc42ebc.jpg"
              alt="anime"
            />
            <h1>{data[index].anime}</h1>
            <h3>{data[index].character}</h3>
            <p classNameName="description">{data[index].quote}</p>
            <div className="tokenInfo">
              <div className="duration">
                <ins>◷</ins>
                <p>{date.toLocaleString()}</p>
              </div>
            </div>
            <hr />
          </div>
        )}
      </div>
        </div>
    )
  }


export default Anime;
