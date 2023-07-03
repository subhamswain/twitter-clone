// -------------********------------------

import React, {useState} from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import styles from '../LoginPage/LoginPage.module.css'
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import InputField from '../../Atoms/InputField/InputField';
import { useDispatch,useSelector } from 'react-redux';
import { addData,addUserChange,checkLoggedIn } from '../../Redux/dataslice';
import { useEffect } from 'react';


function LoginPage() {
  const navigate = useNavigate()

  const  [isPasswordEnter,setisPasswordEnter] = useState(false)
  const values = useSelector(state=>state.localData)
  
  const {userData,isLoggedIn} = values
  
  console.log(isLoggedIn,"i amm")
  const dispatch = useDispatch()
  let loca = [{ name1: " ", email1: " ", number1: " ",password1:" " }]
    console.log(localStorage.data)
  if(localStorage.data!==undefined){
  
   loca =JSON.parse(localStorage.data)}
  //  else{
    
  //   navigate('/signup')
  //  }
 
    
 
  useEffect(()=>{
    dispatch(addData(localStorage.data))
    
  })
const [nxtBtn, setNxtBtn] = useState(false)
const [nxtBtn1, setNxtBtn1] = useState(false)
  console.log(nxtBtn1)
  
  function handleChange(e){
    dispatch(addUserChange(e.target.value))
    setNxtBtn1(true)
    console.log(nxtBtn1)
       
  }
  
  const handleNext = () =>{
    setNxtBtn(true)
    
    // dispatch(checkLoggedIn({loca1:loca}))
    
    dispatch(checkLoggedIn([loca]))
    setNxtBtn1(false)
  }

 const  handleNextother = ()=>{
  alert("please fill the data")
 }

  
  const handlePasswordChange = ()=>{
   setisPasswordEnter(true)
  }

   const handleLogin = () => {
    localStorage.setItem("isAuth", JSON.stringify(true));
    navigate('/home')
   }
   const handleLogin2 = () => {
     alert("please enter your password")

   
   }


  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
      <div className={styles.container}>
     <TwitterIcon
        className={styles.icon}
        fontSize="large"
        sx={{ color: "#00acee" }}
      />
      {nxtBtn ? (
        <div className={styles.nextPage}>
          <div className={styles.nextPageContainer}>
        <h1>Enter your password</h1>
        {isLoggedIn?(<div><>
        <InputField
        value={userData}
         label="Username"
         variant="filled"
         style={{ marginTop: '11', width:'100%' }}
         disabled
        />
        <InputField
        label="Password"
        variant="filled"
        onChange={handlePasswordChange}
        type="password"
        style={{ marginTop: '11', width:'100%' }}
        />
        </></div>):(<div>
          {navigate('/signup')}
        </div>)}

        {
isPasswordEnter?<CustomButton
className={styles.btnLogin}
onClick={handleLogin}
buttonText="Log in"
/>:<CustomButton
        className={styles.btnLogin}
        onClick={handleLogin2}
        buttonText="Log in"
      />
        }

         
      
      <p>
      Don’t have an account?{" "}
        <Link className={styles.link} to="/signup">
        Sign up
        </Link>
      </p>
      </div>
        </div>
      ) : (
        <>
        <h1 className={styles.heading}>Sign in to Twitter</h1>
      <CustomButton
        className={styles.btn}
        buttonText="Sign in with Google"
        icon={<FcGoogle style={{marginRight:"0.5rem"}} />}
        />
      <CustomButton
        className={styles.btn}
        buttonText="Sign in with Apple"
        icon={<BsApple style={{marginRight:"0.5rem"}} />}
      />
      <span >
        ______<span className={styles.orLine}>______________</span>____<sub className={styles.or}> or </sub>
        ______<span className={styles.orLine}>____________</span>_____
      </span>
      <InputField
      label="Phone, Email or Username"
      variant="filled"
      onChange = {handleChange}
      style={{ marginTop: '11', width:'18rem' }}
      />
      

{nxtBtn1?<CustomButton
        className={styles.btnNext}
        onClick={handleNext}
        buttonText="Next"
        
      />:<CustomButton
      className={styles.btnNext}
      onClick={handleNextother}
      buttonText="Next"
      
    />}




      <CustomButton
        className={styles.btn}
        buttonText="Forgot Password ?"
        />
      <p>
      Don’t have an account?{" "}
        <Link className={styles.link} to="/signup">
        Sign up
        </Link>
      </p>
      </>
      )}
    </div> 
    </div>   
    </div>
  );
}  
export default LoginPage