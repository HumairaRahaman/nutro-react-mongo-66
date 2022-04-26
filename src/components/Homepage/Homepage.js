import React from "react"
import useService from "../../hooks/useService"
import img from "../Homepage/veg-removebg-preview.png"
import Servicecart from "../Servicecart/Servicecart"
import Subscribe from "../Subscribe/Subscribe"

const Homepage = () => {
  const [services, setServices] = useService([])

  return (
    <div className=" h-auto w-full">
      <div className="flex flex-col-reverse mt-8 md:flex-row lg:flex-row xl:flex-row mx-8 md:justify-between lg:justify-between xl:justify-between h-[80vh] items-center rounded-lg  bg-gradient-to-r from-indigo-100 to-cyan-200">
        <div className=" w-1/2 ml-0 md:ml-14 lg:ml-14 xl:ml-14 ">
          <h1 className=" font-medium text-xl mt-8 md:mt-0 lg:mt-0 xl:mt-0 md:text-5xl pb-0 md:pb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-cyan-600  mb-4 cursor-pointe">
            Be strong be healthy and be happy
           
          </h1>
          <p className="my-4 mb-8  md:mt-8 lg:mt-8 xl:mt-8 text-sm md:text-2xl lg:text-2xl xl:text-2xl text-gray-800 ">
            Don’t give up on your favorite meal, make it healthier<br></br> Drop
            the fries and move those thighs!
          </p>
          
        </div>
        <div className=" shadow-2xl shadow-cyan-400 rounded-lg  bg-cover w-1/2 ">
          <img
            className=" object-scale-down h-60 md:h-96 md:w-full "
            src={img}
            alt=""
          />
        </div>
      </div>

      <div className=" mt-14 py-4 mx-8">
        <h2 className="pb-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center mb-4 cursor-pointe">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <Servicecart key={service._id} service={service}></Servicecart>
          ))}
        </div>
      </div>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Homepage
