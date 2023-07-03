import React, { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import style from './Share.module.css';

const Share = () => {
  const [shareCount, setShareCount] = useState(157);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = () => {
    setActiveBtn(!activeBtn);
    if (activeBtn) {
        setShareCount(shareCount - 1);
    } else {
        setShareCount(shareCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          id={style.sharebtn}
          onClick={handleClick}
          className={activeBtn ? style.active : ''}
        >
          {activeBtn ? (
            <UploadIcon style = {{color:"#008ac1"}} />
          ) : (
            <UploadIcon/>
          )}
        </button>
      </div>
    </>
  );
};

export default Share;
