import React from 'react'
import './Reset.css'
import avatar from '../../Images/Profile-Avatar-PNG (1).png'
import {Toast, Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { ValidateResetPwd } from '../../Helper/validate';
import { Link } from 'react-router-dom';

function Reset() {
  const formik = useFormik({
    initialValues:{
      password:"",
      repassword:""
    },
    validate:ValidateResetPwd,
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
          
           
            <div className="password">
            <input {...formik.getFieldProps('password')} type="password" placeholder='New Password' />
              <input {...formik.getFieldProps('repassword')} type="password" placeholder='Confirm Password' />
              <button class='btn'>Sign in</button>
            </div>
            <span className='member'>Forgot Password? Recover <Link style={{ textDecoration:"none", color:"rgb(3, 230, 3)" }} to='/password'>Now</Link></span>
            </div>
  
          </form>
      </div>
  
    )
}

export default Reset
