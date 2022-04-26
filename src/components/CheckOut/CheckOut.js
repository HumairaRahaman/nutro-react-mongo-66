import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useServiceDetail from "../../hooks/useServiceDetail"

const CheckOut = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const { serviceId } = useParams()
  const [service] = useServiceDetail(serviceId)
 

  const handelEmailBlur = (event) => {
    setEmail(event.target.value)
  }
  const handelNameBlur = (event) => {
    setName(event.target.value)
  }
  const handelAddressBlur = (event) => {
    setAddress(event.target.value)
  }
  const handelPhoneBlur = (event) => {
    setPhone(event.target.value)
  }

  const handelEvent = () => {
     
        
  }
  const handelSubmitData = (event) => {
    toast.info("Thanks for Booking!", { position: toast.POSITION.TOP_CENTER })
    event.preventDefault()
    
  }
  return (
    <div className=" bg-gradient-to-r from-green-200 to-blue-200 ">
      <h2>please order:{service.name}</h2>
      <form onSubmit={handelSubmitData} className=" min-h-screen flex justify-center items-center">
        <div className="py-12 px-12 bg-white  rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600 cursor-pointer">
              Please give me your Booking information!
            </h1>
          </div>
          <div className="space-y-4">
            <input
              onBlur={handelNameBlur}
              type="text"
              placeholder="Your Name"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              required
            />
            <input
              onBlur={handelEmailBlur}
              type="email"
              placeholder="Email"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none "
              required
            />
            <input
              onBlur={handelAddressBlur}
              type="text"
              placeholder="Address"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
            />
            <input
              onBlur={handelPhoneBlur}
              type="text"
              placeholder="Phone Number"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
            />
          </div>
          <div className="text-center mt-6">
            <button
             
              className="py-3 w-64 text-xl text-white  bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-2xl"
            >
              Check Out
            </button>
            <ToastContainer />
            <p className="mt-4 text-sm text-blue-800">
              If you change your choice?
              <Link to="/">
                <span className="underline cursor-pointer text-blue-800">
                  {" "}
                  Go Home
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckOut
