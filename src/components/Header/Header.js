import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import CustomLink from '../CustomLink/CustomLink'

const Header = ({service}) => {
    // const{id} = service
    // console.log(service);
    const {serviceId} = useParams;
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    

    const handelSignOut = () =>{
        signOut(auth)
    }
    const handelSignIn = () =>{
        navigate('/signin')
    }
    return (
        <div className=' sticky top-0 bg-white md:mb-0 lg:mb-0 xl:mb-0 mb-8 px-8 py-6 md:px-12 lg:px-12 xl:px-12 md:py-8 lg:py-8 xl:py-8 flex justify-center'>
            <div className=' flex gap-2 md:gap-4 lg:gap-4 xl:gap-4 text-sm md:text-xl lg:text-xl xl:text-xl'>
            <CustomLink  to='/'>HOME</CustomLink >
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
            <CustomLink to={`/checkout/${serviceId}`}>CHECKOUT</CustomLink>
            {
                user && <>
                <NavLink as={Link} to="addservice">ADD</NavLink>
                <NavLink as={Link} to="manage">MANAGE</NavLink>
                </>
            }
            { user? <button onClick={handelSignOut} className="py-1/2 w-40 text-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-2xl">
            SIGN OUT
          </button>:
                <button onClick={handelSignIn} className="py-1/2 w-40 text-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-2xl">
                SIGN IN
  
              </button>}
            </div>
        </div>
    )
}

export default Header