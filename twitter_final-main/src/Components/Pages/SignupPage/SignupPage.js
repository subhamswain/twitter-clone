import React, { useState,useEffect } from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from 'react-router-dom';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import styles from '../LoginPage/LoginPage.module.css';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import InputField from '../../Atoms/InputField/InputField';
import CustomSelect from '../../Atoms/CustomSelect/CustomSelect';
import {useDispatch, useSelector } from 'react-redux';
import { addData,isloggedIn,addUserChange } from '../../Redux/dataslice';
// import { datesArray } from '../../Atoms/CustomSelect/CustomSelect';

import style from './Signup.module.css';

function SignUp() {
  const dispatch = useDispatch()
  dispatch(isloggedIn(false))
  const values = useSelector(state=>state.localData)
   const {day,year,month}= values
  //  const [day,month,year]=objectData
  useEffect(()=>{
    dispatch(addData(localStorage.Data))
  })
 
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showPhone, setShowPhone] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  
  // const [day,month,year]= datesArray

  const handleCreateAccount = () => {
    setCreateAccount(true);
  }
  
  const navigate = useNavigate();

  const handleNxt = (e) => {
    e.preventDefault();

    // Username validation
    if (!(/^[A-Za-z]+$/).test(username)) {
      alert("Please enter a valid name");
      return;
    }

    // Password validation
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      alert("Please enter a valid password that must be at least 8 characters long and contain at least one uppercase, one lowercase, one digit and one special character.");
      return;
    }

  // userName validation
  

  if (showPhone) {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    // Checking that number is already registered or not
    if (localStorage.getItem(phone)) {
      alert("Phone number already registered");
      return;
    }
    
  } else {
    const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!reg.test(email)) {
      alert('Please enter a valid email');
      return;
    }
    // Check that email is already registered or not
    
    if (localStorage.getItem(email)) {
      alert("Email already registered");
      return;
    }
    
  }
  // console.log(month, year, day, "check")
  if(month === "" && year === "" && day === "") {
    alert("Please enter Date of Birth");
      return;
  }
  if(localStorage.data){
    const fake = JSON.parse(localStorage.data)
    const dummynotes = [...fake,{ name1: username, email1: email, number1: phone,password1:password }]
    localStorage.setItem("data",(JSON.stringify(dummynotes)));
  }
  else{
    const dummynotes = [{ name1: username, email1: email, number1: phone,password1:password }]
    localStorage.setItem("data",(JSON.stringify(dummynotes)));
  }
  
  
  // dispatch(addObjectData({ name1: username, email1: email, number1: phone,password1:password }))
  localStorage.setItem(phone, 'registered');
  localStorage.setItem(email, 'registered');
  dispatch(addUserChange([{name1:username}]))
  localStorage.setItem("isAuth", JSON.stringify(true));
  alert("you are successfully registered")
  navigate('/home');
  
};

  
  const handleShowPhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <TwitterIcon
            className={styles.icon}
            fontSize="large"
            sx={{ color: "#00acee" }}
          />
          {createAccount ? (
            <div className={style.signupPage}>
              <h1>Create your account</h1>
              <InputField
                label="Name"
                variant="filled"
                style={{ marginTop: '11', width: '80%', marginBottom: "1rem" }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                variant="filled"
                style={{ marginTop: '11', width: '80%', marginBottom: "1rem" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPhone ? (
                <div>
                  <InputField
                    label="Phone"
                    type="tel"
                    variant="filled"
                    style={{ marginTop: '11', width: '80%', marginBottom: "1rem" }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className={style.instead} onClick={handleShowPhone} >Use email instead</span>
                </div>
              ) : (
                <>
                  <InputField
                    label="Email"
                    variant="filled"
                    style={{ marginTop: '11', width: '80%', marginBottom: "1rem" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className={style.instead} onClick={handleShowPhone}>Use phone instead</span>
                </>
              )}
              <div className={style.dobContainer}>
                <span className={style.maindobText}><strong>Date of birth</strong></span>
                <div className={style.dobText}>
                  This will not be shown publicly. Confirm your own age,
                  even if this account is for a business, a pet, or
                  something else.
                </div>
                <CustomSelect
                // onChange={handleCustomSelectChange}
                />
                <CustomButton
                  className={style.btnNext}
                  onClick={handleNxt}
                  buttonText="Sign up"
                />
              </div>
            </div>
          ) : (
            <>
              <h1 className={styles.heading}>Join Twitter today</h1>
              <CustomButton
                className={styles.btn}
                buttonText="Sign in with Google"
                icon={<FcGoogle style={{ marginRight: "0.5rem" }} />}
              />
              <CustomButton
                className={styles.btn}
                buttonText="Sign in with Apple"
                icon={<BsApple style={{ marginRight: "0.5rem" }} />}
              />
              <span>
                ______<span className={styles.orLine}>______________</span>____<sub className={styles.or}> or </sub>
                ______<span className={styles.orLine}>____________</span>_____
              </span>
              <CustomButton
                className={styles.btnNext}
                onClick={handleCreateAccount}
                buttonText="Create Account"
              />
              <span className={styles.termsCondition}>
                By signing up, you agree to the{" "}
                <a href="https://twitter.com/en/tos" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                , including{" "}
                <a
                  href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Use
                </a>
                .
              </span>
              <p>
                Have an account already?{" "}
                <Link className={styles.link} to="/">
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
