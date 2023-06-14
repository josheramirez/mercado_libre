
import React, { useState,useEffect } from 'react'
import { useSearchParams, useNavigate, useLocation  } from 'react-router-dom';
import Error404 from './Error404';

export default function HandleError() {

    const location = useLocation();
    console.log('location : ',location);
  return (
    location.pathname == "/"?
    null
    :
    <Error404/>
  )
}
