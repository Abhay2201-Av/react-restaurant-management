import {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext';
import toast from 'react-hot-toast';

export function ProtectedRoute(props) {
    const { Component } = props;
    console.log("data",props);
    // const nevigate = useNavigate()
    const {isLoggedIn} = useAuth()
    
    useEffect(()=>{
        if (!isLoggedIn) {
        //   nevigate('/login')
        toast("login first")
        return(
            <div>
                <h1 style={{color:"#000"}}>Login fisrt</h1>
            </div>
        )
        }
    })
  return (
    <div><Component /></div>
  )
};
