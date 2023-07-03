import {FaRegComment} from 'react-icons/fa';
import React, { useState } from "react";
import style from './Reply.module.css';

const Reply = () => {
  const [replyCount, setReplyCount] = useState(104);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = () => {
    setActiveBtn(!activeBtn);
    if (activeBtn) {
      setReplyCount(replyCount - 1);
    } else {
      setReplyCount(replyCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          id={style.replybtn}
          onClick={handleClick}
          className={activeBtn ? style.active : ''}
        >
          {activeBtn ? (
            <FaRegComment style = {{color:"#008ac1"}} />
          ) : (
            <FaRegComment/>
          )}
          <span style={{fontSize:"0.8rem"}}>
          {replyCount}
          </span>
        </button>
      </div>
    </>
  );
};

export default Reply;
