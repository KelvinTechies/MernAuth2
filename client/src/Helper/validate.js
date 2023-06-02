import toast from 'react-hot-toast'

// Validate login page

export async function userNamevalidate(values){
    const errors = usernameVerify({}, values)
    return errors
}


export async function passwordvalidate (values){
    const errors = passwordVerify({}, values)
    return errors
}

function passwordVerify(errors=[], values){
    const specialCharacters = /[`!@#_+*&^&^%$`]/
    if(!values.password){
        errors.password = toast.error("Password is required")
    }else if(values.password.includes(" ")){
        errors.password = toast.error("Password is not Correct")
        
    }else if(!specialCharacters){
        errors.username=toast.error("Password must have Special characters")
        
    }

    return errors
}


export async function registerValidation(values){
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)
}


// ValidateResetPwd

export async function ValidateResetPwd(values){
    const errors = passwordVerify({}, values)
    if(values.password !== values.repassword){
        errors.exist = toast.error("Password is mixmatch")
        
    }
    return errors
    
}


// Validate username

function usernameVerify(error=[], values) {
    if(!values.username){
        error.username=toast.error("Username Required")
    }else if(values.username.includes(" ")){
        error.username=toast.error("Invalid Required")
        
    }
    return error
}


function emailVerify(error=[], values) {
    if(!values.email){
        error.email=toast.error("email Required")
    }else if(values.username.includes(" ")){
        error.email=toast.error("Invalid email")
        
    }else if(!/^[A-Z0-9._%+-]0[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email=toast.error("Invalid email Address")

    }
    return error
    
}