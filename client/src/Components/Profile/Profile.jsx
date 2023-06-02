import React, { useState } from 'react'
import './Profile.css'
import avatar from '../../Images/Profile-Avatar-PNG (1).png'
import { Toast, Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordvalidate, registerValidation } from '../../Helper/validate';
import { Link } from 'react-router-dom';
import convertToBase64 from '../../Helper/convert';





function Profile() {
  const [file, setFile] = useState()
  const formik = useFormik({
    initialValues: {
      email: "Kelvin@gmail.com",
      username: "kelvin",
      password: "123"
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || "" })
      console.log(values);

    }
  })

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
  }



  return (
    <div className="container">
      <Toaster></Toaster>
      <h4>Profile</h4>
      <span className="py-4 text-xl w-2 text-center text-gray-500">Update your Profile</span>

      <form onSubmit={formik.handleSubmit}>
        <div className="form">

          <div className="imgBx">
            <label htmlFor="img">
              <img src={file || avatar} style={{ width: "150px", height: "150px" }} alt="" />
            </label>
            <input type="file" onChange={onUpload} name="profile" id="img" />
          </div>

          <div className="password">
            <div className="col2">
              <input {...formik.getFieldProps('firstname')} type="text" placeholder='FirstName' />
              <input {...formik.getFieldProps('lastname')} type="text" placeholder='LastName' />
            </div>
            <input {...formik.getFieldProps('email')} type="email" placeholder='Email' />
            <input {...formik.getFieldProps('username')} type="password" placeholder='username' />
            <input {...formik.getFieldProps('password')} type="password" placeholder='Password' />
            <button class='btn'>Register</button>
          </div>
          <span className='member'>Already registered? Login  <Link style={{ textDecoration: "none", color: "rgb(3, 230, 3)" }} to='/'>Now</Link></span>
        </div>

      </form>
    </div>

  )
}

export default Profile
