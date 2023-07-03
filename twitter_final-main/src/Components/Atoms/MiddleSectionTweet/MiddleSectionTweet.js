import { RxAvatar } from "react-icons/rx";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineFileGif } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import CustomButton from "../CustomButton/CustomButton";
import TextArea from "../TextArea/TextArea";
import style from './MiddleSectionTweet.module.css'
import { useRef, useState } from "react";
import tweetPosts from "../../Data/Data";
import { useDispatch,useSelector } from "react-redux";
import { addArrayData,addUserChange } from "../../Redux/dataslice";

export default function MiddleSecTweetBox(prop) {
  let data = JSON.parse(localStorage.getItem("matchedUser"))
  const [tweet, setTweet] = useState("");
  const [show, setShow] = useState(false );
  const [image, setImage] = useState(null);
  const inputRef = useRef(null)
const [userPostData, setUserPostData] = useState([])

const dispatch = useDispatch();
      //  dispatch(addArrayData(tweetPosts))
       const values = useSelector(state=>state.localData)
       const {arrayData,  tweeterUserName} = values
      
      // localStorage.getItem(UserName)
    

       
      //  console.log(tweeterUserName[0].name1,"this is the user")

  function handleTweet(e) {
    setTweet(e.target.value);
  }
  console.log(tweet,"i am tweet")

  function handleImage(){
    inputRef.current.click()
  }
  const onImageChange = (event) => {
    if (event.target.files[0] ) {
      console.log(event.target.files[0])
      setImage(URL.createObjectURL(event.target.files[0])); 
    }
   }
   
  function handleTweetPost() {
    let tweetText = arrayData
    console.log(tweetText,"this is tweetText")
    const text2 = [{id : Math.floor(Math.random()* 1000),first_name:tweeterUserName[0].name1,last_name:"",caption:tweet,likesCount:351,replyCount:485,retweetsCount:563,views:607},...arrayData]
    console.log(text2,"this is anoter")
  
     dispatch(addArrayData(text2))
  
 

    
    setTweet("")
    setImage("")
    
  }

  function handleShow() {
    setShow(true);
  }

 
 
  return (
    <>
   
      <div className={ style.inputContainer  } >
        <div onClick={handleShow} className={style.subContainer}>
          <RxAvatar className={style.avatar} />
          <div className={style.input}>
            {prop.true ||show ? (
              <CustomButton
                className={style.evryOnebtn}
                buttonText="Everyone"
                icon2={<sup>v</sup>}
              />
            ) : (
              ""
            )}
            <TextArea
              placeholder="What's Happening?"
              value={tweet}
              onChange={handleTweet}
              className={style.inputBox}
            />
          </div>
        </div>
        {image ? 
        <img className={style.inputBoxImage} src={image} alt="uploadImage" width="200px" /> : ""
        }

        {prop.true ||show ? (
          <span className={style.evryOnebtnEartch}>
            <IoEarthSharp />
            Everyone can reply
          </span>
        ) : (
          ""
        )}

        <div className={style.iconBtnWrapper}>
          <div className={style.iconBtn}>
            <TfiGallery  onClick={handleImage} className={style.iconss} />
            <input  hidden ref={inputRef}  type="file" onChange={onImageChange} className="filetype" />
            <AiOutlineFileGif className={style.iconss} />
            <MdOutlinePoll className={style.iconss} />
            <TbCalendarStats className={style.iconss} />
            <TfiLocationPin className={style.iconss} />
          </div>
          <CustomButton onClick={handleTweetPost} className={style.tweetPushbtn} buttonText="Tweeter" />
        </div>

        {show ? (
          <div className={style.showMore}>
            <CustomButton
           
              className={style.showMoreBtn}
              buttonText="Show More Tweets"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
