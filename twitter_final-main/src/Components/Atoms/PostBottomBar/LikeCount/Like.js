import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from "react";
import style from './Like.module.css';

const Like = () => {
  const [likeCount, setLikeCount] = useState(123);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleLikeClick = () => {
    setActiveBtn(!activeBtn);
    if (activeBtn) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          id={style.likebtn}
          onClick={handleLikeClick}
          className={activeBtn ? style.active : ''}
        >
          {activeBtn ? (
            <FavoriteIcon style = {{color:"red"}} />
          ) : (
            <FavoriteBorderIcon />
          )}
          {likeCount}
        </button>
      </div>
    </>
  );
};

export default Like;
