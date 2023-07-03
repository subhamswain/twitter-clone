import { Navigate } from "react-router-dom";
const PrivateRouting = ({ children }) => {
  //     <Home />
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  if (!isAuth) {
    // true
    return <Navigate to="/" />;
  }
   

  return children;
};

export default PrivateRouting;