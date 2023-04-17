import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({children}:any) {
    const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
        return children;
    }else{
        navigate('/login')
    }
  },[])
  
  return null
}

export default ProtectedRoutes
