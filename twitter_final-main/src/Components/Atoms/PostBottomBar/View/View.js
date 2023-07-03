import React, { useState } from "react";
import { CgPoll } from "react-icons/cg";
import style from './View.module.css';

const Views = () => {
  const [viewCount, setViewCount] = useState(276);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = () => {
    setActiveBtn(!activeBtn);
    if (activeBtn) {
        setViewCount(viewCount - 1);
    } else {
        setViewCount(viewCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          id={style.viewbtn}
          onClick={handleClick}
          className={activeBtn ? style.active : ''}
        >
          {activeBtn ? (
            <CgPoll style = {{color:"#008ac1"}} />
          ) : (
            <CgPoll/>
          )}
          <span style={{fontSize:"0.8rem"}}>
          {viewCount}
          </span>
        </button>
      </div>
    </>
  );
};

export default Views;
