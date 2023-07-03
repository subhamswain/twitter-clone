import React, { useState } from "react";
import { FaRetweet } from "react-icons/fa";
import style from './Retweet.module.css';

const Retweet = () => {
  const [retweetCount, setRetweetCount] = useState(157);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = () => {
    setActiveBtn(!activeBtn);
    if (activeBtn) {
        setRetweetCount(retweetCount - 1);
    } else {
        setRetweetCount(retweetCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          id={style.retweetbtn}
          onClick={handleClick}
          className={activeBtn ? style.active : ''}
        >
          {activeBtn ? (
            <FaRetweet style = {{color:"#03C03C"}} />
          ) : (
            <FaRetweet/>
          )}
          <span style={{fontSize:"0.8rem"}}>
          {retweetCount}
          </span>
        </button>
      </div>
    </>
  );
};

export default Retweet;
