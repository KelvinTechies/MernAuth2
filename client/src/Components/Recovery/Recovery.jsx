import React from 'react'
import './Recovery.css'
import avatar from '../../Images/Profile-Avatar-PNG (1).png'
import {Toast, Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordvalidate } from '../../Helper/validate';
import { Link } from 'react-router-dom';




function Recovery() {
  const formik = useFormik({
    initialValues:{
      password:""
    },
    validate:passwordvalidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      console.log(values);
      
    }
  })
  
  
  
  
    return (
      <div className="container">
  <Toaster></Toaster>
        <h4>Recover Password</h4>
        <span className="py-4 text-xl w-2 text-center text-gray-500">Enter the OPT that was sent To you</span>
  
          <form onSubmit={formik.handleSubmit}>
        <div className="form">
        <div className="rspan">Enter six digts o.t.p that was sent to you</div>
         <div className="password">
              <input {...formik.getFieldProps('password')} type="password" placeholder='Password' />
              <button class='btn'>Sign in</button>
            </div>
            <span className='member'>Can't get O.T.P? <span style={{ Background:"rgb(3, 230, 3)", color:"rgb(3, 230, 3)" }} to='/password'>Resend</span></span>
            </div>
  
          </form>
      </div>
  
    )
}

export default Recovery
