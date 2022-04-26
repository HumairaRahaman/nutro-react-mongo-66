import React, { useState } from "react"
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import auth from "../../../firebase.init"
import Spinner from "../../Spinner/Spinner"
import SocialLogin from "../SocialLogin/SocialLogin"

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  let errorElement

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  if (loading) {
    return <Spinner></Spinner>
  }
  const handelEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handelPasswordBlur = (event) => {
    setPassword(event.target.value)
  }

  if (user) {
    navigate(from, { replace: true })
  }
  if (error) {
    errorElement = (
      <div>
        <p className=" text-red-500">Error: {error?.message}</p>
      </div>
    )
  }
  const handleUserSignIn = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  const resetPassword = async () => {
    await sendPasswordResetEmail(email)
    toast.info("Sent email", { position: toast.POSITION.TOP_CENTER })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-cyan-300 flex justify-center items-center">
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center mb-4 cursor-pointer">
            Please Sign in
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-cyan-800 tracking-wide cursor-pointer">
            Sign In your account to enjoy all the services without any ads for
            free!
          </p>
          <p className="mt-4 text-sm">
            Don't have account?
            <Link to="/signup">
              <span className="underline cursor-pointer text-cyan-400">
                Sign Up here
              </span>
            </Link>
          </p>
        </div>
        <SocialLogin></SocialLogin>
        <form onSubmit={handleUserSignIn}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
              onBlur={handelEmailBlur}
            />
            <input
              type="Password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
              onBlur={handelPasswordBlur}
            />
          </div>
          {errorElement}
          <div className="text-center mt-6">
            <button className="py-3 w-64 text-xl text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-2xl">
              Sign In
            </button>
            <ToastContainer />
            <p className="mt-4 text-sm">
              Forgot password?
              <span
                onClick={resetPassword}
                className="underline cursor-pointer text-cyan-400"
              >
                Reset Password
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
