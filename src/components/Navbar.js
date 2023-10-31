import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../assist/logo.png"
import { AuthContext, AuthProvider } from '../context/authContext'

const data = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'About us', link: '/about'},
  {id: 3, name: 'Login', link: '/login'},
  {id: 4, name: 'Register', link: '/register'},
]
const afterLogin = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'About us', link: '/about'},
  {id: 3, name: 'Dashboard', link: '/dashboard'},
]

const Navbar = () => {
  const [auth, setAuth] = useContext(AuthProvider)
  const navigation = useNavigate()
  return (
   <div className='flex place-content-around list-none bg-black text-center text-white h-[50px] '>
    <div>
      <img className='h-[40px]' src={img} alt="" />
    </div>
    {auth?.user ? (
      <>
      {afterLogin.map((e) => (
         <div key={e.id} >
         <li onClick={(() => navigation(e?.link))} className='relative top-3 text-center cursor-pointer'>{e?.name}</li>
       </div>
      ))}
      </>
    ) : (
      <>   
      {data.map((menu) => (
       <div key={menu.id} >
         <li onClick={(() => navigation(menu.link))} className='relative top-3 text-center cursor-pointer'>{menu.name}</li>
       </div>
      ))}
      </>
    )}
   </div>
 
  )
}

export default Navbar