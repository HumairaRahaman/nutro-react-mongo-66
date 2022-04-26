import React from "react"
import { useNavigate } from "react-router-dom"


const Servicecart = ({service}) => {
    const{_id,name,price,img,description} = service
    const navigate = useNavigate()
    const navigateToServiceDetail = id =>{
        navigate(`/checkout/${id}`)
    }
  return (
    <div className=" mb-8 md:mb-0 lg:mb-0 xl:mb-0 shadow-lg shadow-cyan-200 rounded-2xl  bd-white p-4">
      <div className="flex flex-col gap-4 justify-between mx-4">
        <div className=" flex-shrink-0 mx-auto items-center flex">
          <img
            className="mx-auto object-cover rounded-lg  w-full h-1/2 "
            src={img}
            alt="coin"
          />
        </div>

        <span className=" text-gray-600 font-medium">{name}</span>
        <span className=" text-gray-400 text-lg">{description}</span>
        <div className="flex justify-between">
          <p className="flex items-start  bg-cyan-300 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center cursor-pointer">
            Price: {price} <span>Taka</span>{" "}
          </p>
         
            <button onClick={() =>navigateToServiceDetail(_id)} className="hover:bg-amber-700 py-1 px-4 text-white rounded-3xl bg-amber-300 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 ">
              Book Now
            </button>
          
        </div>
      </div>
    </div>
  )
}

export default Servicecart
