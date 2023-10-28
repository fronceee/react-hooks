import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const [imgURLs, setImgURLs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    fetch("https://shibe.online/api/shibes?count=10")
      .then((res) => res.json())
      .then((data) => setImgURLs(data));
  }, []);

  useEffect(() => {
    const duration = transitionDuration > 1000 ? transitionDuration : 1000;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, duration);
    return () => {
      clearInterval(interval)
    }
  }, [transitionDuration]);

  console.log(transitionDuration);

  return (
    <>
      <Navbar />
      <h1>Welcome to my homepage</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {/* <img
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        src={imgURLs[currentIndex % 10]}
        height={250}
      /> */}
      <h1>{currentIndex}</h1>
      <input
        type="number"
        value={transitionDuration}
        onChange={(e) => setTransitionDuration(e.target.value)}
      />
      {/*  TODO: Jokes */}
    </>
  );
};
