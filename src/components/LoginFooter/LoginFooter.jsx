import React from 'react'
import { FaGoogle,FaFacebookSquare,FaTwitter, FaGithub } from "react-icons/fa";
import './LoginFooter.css'
const LoginFooter = () => {
  return (
    <div className='login-footer'>
        <div className="info">or continue with these social profile</div>
        <div className="social">
          <a href='' className="social-wrapper"><FaGoogle/></a>
          <a href='' className="social-wrapper"><FaFacebookSquare/></a>
          <a href='' className="social-wrapper"><FaTwitter/></a>
          <a href='' className="social-wrapper"><FaGithub/></a>
        </div>
        <div className="link-register">
        Don’t have an account yet? <a href="">Register</a>
        </div>
    </div>
  )
}

export default LoginFooter