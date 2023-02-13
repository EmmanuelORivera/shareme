import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logoWhite.png'
import { createOrGetUser } from '../utils'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleCreateOrGetUser = async (response) => {
    const newUser = await createOrGetUser(response)
    if (newUser) {
      navigate('/', { replace: true })
    }
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={handleCreateOrGetUser}
              onError={() => {
                console.log('Login Failed')
              }}
            >
              <button
                type="button"
                className="p-2 bg-mainColor flex justify-center items-center rounded-lg cursor-pointer outline-none"
              >
                <FcGoogle className="mr-4" /> Sign in with Google
              </button>
            </GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
