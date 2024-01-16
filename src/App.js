import "./App.css";
import React, { useState, useEffect } from "react";
// import image from "../img/anime-image.jpg";

function App() {
  const [data, setData] = useState(null);
  const date = new Date();
  const Show = () => {
    return (
      <h1 classNameName="limit" style={{ margin: "5rem" }}>
        Hold up, The characters behind the scenes cant keep coming up with
        quotes...
      </h1>
    );
  };

  const getData = async () => {
    try {
      const data = await fetch("https://animechan.xyz/api/random");
      const json = await data.json();
      setData(json);
    } catch (error) {
      return <Show />;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
            <h1>{data.anime}</h1>
            <h3>{data.character}</h3>
            <p classNameName="description">{data.quote}</p>
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
    </>
  );
}

export default App;
