import React from 'react'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import auth from '../../firebase.init'
import Spinner from '../Spinner/Spinner'

const REquireAuth = ({children}) => {

    const [user,loading] = useAuthState(auth)
    const location = useLocation()

    const[sentEmailVerification,sending,error] = useSendEmailVerification(auth);

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to="/signin" state={{from: location}} replace></Navigate>
    }

    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified)
    {
        <button onClick={async()=>{await sentEmailVerification();
            toast('sent mail');
        }}>send mail</button>
    }
    <ToastContainer></ToastContainer>

    return children
}

export default REquireAuth