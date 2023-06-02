import React from 'react'
import './user.css'
import avatar from '../../Images/Profile-Avatar-PNG (1).png'
import {Toast, Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { userNamevalidate } from '../../Helper/validate';
import { Link } from 'react-router-dom';



function Username() {

const formik = useFormik({
  initialValues:{
    username:""
  },
  validate:userNamevalidate,
  validateOnBlur:false,
  validateOnChange:false,
  onSubmit:async values=>{
    console.log(values);
    
  }
})




  return (
    <div className="container">
<Toaster></Toaster>
      <h4>Hello Again</h4>
      <span className="py-4 text-xl w-2 text-center text-gray-500">Explore more by connecting With Us</span>

        <form onSubmit={formik.handleSubmit}>
      <div className="form">
        
          <div className="imgBx">
            <img src={avatar} style={{ width: "150px", height: "150px" }} alt="" />
          </div>

          <div className="username">
            <input {...formik.getFieldProps('username')} type="text" placeholder='Username' />
            <button class='btn'>Let's Go</button>
          </div>
          <span className='member'>Not a Member? Sign Up <Link style={{ textDecoration:"none", color:"rgb(3, 230, 3)" }} to='/register'>Now</Link> </span>
          </div>

        </form>
    </div>

  )
}

export default Username
