import React from "react";
import style from "./MiddleSection.module.css";
import MiddleSecTweetBox from "../../../Atoms/MiddleSectionTweet/MiddleSectionTweet";
import TwitterPost from "./TwitterPost/TwitterPost";
import { addArrayData } from "../../../Redux/dataslice";
import { useDispatch,useSelector } from "react-redux";
import tweetPosts from "../../../Data/Data";
export default function MiddleSection({openLeftSec ,show  , midTweetClass}) {
 
  const dispatch = useDispatch();
      //  dispatch(addArrayData(tweetPosts))
      //  const values = useSelector(state=>state.localData)
      //  const {arrayData} = values
  
  return (
    <>
      <div className={show ? style.blur :style.main}>
        <div className={style.subMain}>
        <div className={style.wrapper}>
          <h3 className={style.head}>Home</h3>
          <img  onClick={openLeftSec} className={style.mobilePic}  src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="profilePic" />
          </div>
          <div className={style.container}>
            <h4 className={style.forYou}>For You</h4>
            <h4 className={style.forYou}>Following</h4>
          </div>
        </div>
        {console.log(midTweetClass,"from  mid sec after click")}
        <MiddleSecTweetBox midTweetClass={midTweetClass}/>
        <TwitterPost />
      </div>
    </>
  );
}


// import React from "react";
// import style from "./MiddleSection.module.css";
// import MiddleSecTweetBox from "../../../Atoms/MiddleSectionTweet/MiddleSectionTweet";
// import TwitterPost from "./TwitterPost/TwitterPost";

// export default function MiddleSection({openLeftSec ,show  , midTweetClass}) {
 
  
//   return (
//     <>
//       <div className={show ? style.blur :style.main}>
//         <div className={style.subMain}>
//         <div className={style.wrapper}>
//           <h3 className={style.head}>Home</h3>
//           <img  onClick={openLeftSec} className={style.mobilePic}  src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="profilePic" />
//           </div>
//           <div className={style.container}>
//             <h4 className={style.forYou}>For You</h4>
//             <h4 className={style.forYou}>Following</h4>
//           </div>
//         </div>
//         {console.log(midTweetClass,"from  mid sec after click")}
//         <MiddleSecTweetBox midTweetClass={midTweetClass}/>
//         <TwitterPost />
//       </div>
//     </>
//   );
// }
