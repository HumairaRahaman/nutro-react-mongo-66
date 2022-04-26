import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from './components/About/About'
import AddService from './components/AddService/AddService'
import Blogs from './components/Blogs/Blogs'
import CheckOut from './components/CheckOut/CheckOut'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import ManageServices from './components/ManageServices/ManageServices'
import NotFound from './components/NotFound/NotFound'
import REquireAuth from './components/RequireAuth/REquireAuth'
import Signin from './components/Singin/Signin/Signin'
import Signup from './components/Singin/Signup/Signup'


const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout/:serviceId' element={
          <REquireAuth>
            <CheckOut></CheckOut>
          </REquireAuth>
        }>

        </Route>
        <Route path='/checkout/:serviceId' element={
          <REquireAuth>
            <CheckOut></CheckOut>
          </REquireAuth>
        }></Route>
        <Route path='/addservice' element={
          <REquireAuth>
           <AddService></AddService>
          </REquireAuth>
        }></Route>
        <Route path='/manage' element={
          <REquireAuth>
           <ManageServices></ManageServices>
          </REquireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
