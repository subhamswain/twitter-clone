import React from "react";
import { FiHash } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { ImHome2 } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { GrNotification } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { CgMoreO } from "react-icons/cg";
import style from "./LeftSection.module.css";
import TweetButton from "../../../Atoms/TweetButton/TweetButton";
import { useNavigate } from "react-router-dom";
// import LogOutPopOver from "../../Component/Left Section Log-Out Pop/LogOutPopOver";
import { Link } from "react-router-dom";

import { useSelector} from "react-redux";
export default function LeftSection({className}) {
// let matchedUserData =JSON.parse(localStorage.getItem("matchedUser"))
const navigate = useNavigate()
const values = useSelector(state=>state.localData)
const {  tweeterUserName} = values
// console.log(tweeterUserName[0].name1,"this is the user")
  const buttonList = [
    {
      icon: <ImHome2 className={style.icon} />,
      text: <Link style={{  textDecoration: "none" ,color:"black"}} to='/home'>Home </Link>,
    },
    {
      icon: <FiHash className={style.icon} />,
      text: "Explore",
    },
    {
      icon: <GrNotification className={style.icon} />,
      text: "Notifications",
    },
    {
      icon: <GrMailOption className={style.icon} />,
      text: "Messages",
    },
    {
      icon: <HiOutlineBookmark className={style.icon} />,
      text: "Bookmarks",
    },
    {
      icon: <RiFileList2Line className={style.icon} />,
      text: "Lists",
    },
    {
      icon: <HiOutlineUser className={style.icon} />,
      text: <Link style={{  textDecoration: "none" ,color:"black"}} 
    //   to= {`/profile/${matchedUserData.Name}`}
      >Profile</Link> ,
    },
    {
      icon: <CgMoreO className={style.icon} />,
      text: "More",
    },
  ];


  const handlePoplogout = ()=>{
    localStorage.setItem("isAuth", JSON.stringify(false));
    navigate('/')
  }

  return (
    <>
      <div className={style.left}>

       <Link to='/home' ><FaTwitter className={style.twitterIcon} /></Link>

        {buttonList.map((element) => (
          <div key={element.text} className={style.textWrapper}>
            <span> {element.icon}</span>
            <span className={style.text}>{element.text}</span>
          </div>
        ))}
        <TweetButton buttonText="Tweeter" />
        <div className={style.popover}>
       
        </div>
               <div>



               </div>
        <button className={style.logoutBtn} onClick={handlePoplogout} ><Avatar   className={style.avatar} src={<RxAvatar/>}/><div className={style.userName}>{tweeterUserName[0].name1}<br/>@{tweeterUserName[0].name1}{tweeterUserName[0].name1===""?"":Math.floor(Math.random()*100+1)}</div></button>
      </div>

    </>
  );
}

