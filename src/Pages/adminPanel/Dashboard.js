import React, { useContext } from 'react'
import { AuthProvider } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useContext(AuthProvider)
  return auth.user?.role === 1 ?(
    <div>
      <h1 className='text-center text-red-700 text-4xl mt-60'>
        Admin Dashboard 
      </h1>
      <div className='flex justify-center'>
      <button className='text-white w-96 mt-7 p-4 rounded-md bg-opacity-25 bg-white bg-blur-4 shadow-lg border-1 border-opacity-18 border-white' onClick={(() => navigate('/create-post'))}>
        Create Post
      </button>
      </div>
      <div className='flex justify-center'>
      <button className='text-white w-96 mt-5 p-4 rounded-md bg-opacity-25 bg-white bg-blur-4 shadow-lg border-1 border-opacity-18 border-white' onClick={(() => navigate('/create-category'))}>
        Create Category
      </button>
      </div>
    </div>
  ) : (
    <>
     <div>
      <h1 className='text-red-500 text-center text-6xl mt-[30px]'>Access Denied</h1>
      <p className='text-red-500 text-center text-3xl mt-[10px]'>user can not access this</p>
     </div>
    </>
  )
}

export default Dashboard