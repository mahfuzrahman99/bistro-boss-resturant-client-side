/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PrivetRout = ({ children }) => {
  const { user, loading, setLoading} = useContext(AuthContext);
  const location = useLocation();

  useEffect(()=>{
    if(user){
      setLoading(false)
    }
  },[user,])

  console.log(loading, user);
  if (loading) {
    return (
      <div>
         <Skeleton count={15} />
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  }
  return  <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivetRout;
