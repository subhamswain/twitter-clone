import React from "react";
import style from "./TwitterPost.module.css";
import { Avatar } from "@mui/material";
import tweetPosts from "../../../../Data/Data";

import VerifiedIcon from '@mui/icons-material/Verified';
import { useState,useEffect } from "react";

import Like from '../../../../Atoms/PostBottomBar/LikeCount/Like'
import { RxAvatar } from "react-icons/rx";
import { useDispatch,useSelector } from "react-redux";
import { addArrayData } from "../../../../Redux/dataslice";
import Reply from "../../../../Atoms/PostBottomBar/Reply/Reply";
import Retweet from "../../../../Atoms/PostBottomBar/Retweet/Retweet";
import Views from "../../../../Atoms/PostBottomBar/View/View";
import Share from "../../../../Atoms/PostBottomBar/Share/Share";


 
  

export default function TwitterPost() {
  const[post,setPost]=useState(tweetPosts)
  const[newPost,setNewPost] = useState(0);
  const[newProfile,setNewProfile] = useState({});
  const dispatch = useDispatch();
       
       const values = useSelector(state=>state.localData)
       const {arrayData} = values
  
 useEffect(() => {
  dispatch(addArrayData(tweetPosts))
  fetchData()
  
  },[newPost]);

function  fetchData()
  {
    setPost(tweetPosts)
  } 
 function xyz (dataName)  {
    setNewProfile(dataName)
  };

  return (
    <>
      {arrayData.map((data) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div onClick={ ()=>xyz(({
                first_name : data.first_name  ,
                last_name : data.last_name,
                caption : data.caption,
                
                images : data.images,
                likesCount: data.likesCount,
                replyCount : data.replyCount, 
                retweetsCount : data.retweetsCount,
                views : data.views,                
              } )) } >
              
                <Avatar   className={style.avatar} src={<RxAvatar/>} />
               
              </div>

              <div className={style.innercontainer}>
                {/* <span className={style.text}>
                  <h3>{data.first_name} {data.last_name}<VerifiedIcon style={{color:"#00acee"}}/></h3>
                  
                </span>
                <h4>{data.first_name}</h4>
                <h4>{data.caption}</h4> */}

<h3 className={style.text}>{data.first_name} {data.last_name} <VerifiedIcon style={{color:"#00acee"}}/></h3>
                  
                  {data.caption}
              </div>
            </div>

            <div className={style.img}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="pic"
                src={data.images}
              />
            </div>
            <div className={style.icons}>
                  {/* <span>
                    {data.likesCount}
                    <ChatBubbleOutlineIcon />
                    <FaRegComment/>
                  </span>
                  <span>
                    {data.retweetsCount}
                    <SyncIcon />
                  </span>
                  <span>
                   <Like/>
                  </span>
                  <span>
                    {data.views}
                    <PollIcon />
                  </span>

                  <UploadIcon /> */}


                 <span>
                    <Reply/>
                  </span>
                  <span>
                    <Retweet/>
                  </span>
                  <span>
                   <Like/>
                  </span>
                  <span>
                    <Views/>
                  </span>
                  <Share/>
                </div>
          </div>
        );
      })}

    </>
  );
}
