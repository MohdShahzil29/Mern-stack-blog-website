import React, { useContext, useEffect, useState } from 'react'
import { AuthProvider } from '../../context/authContext';
import {Select} from "antd";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const CreatePost = () => {
  const [showCategory, setShowCategory] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [photo, setPhoto] = useState("")

  const navigate = useNavigate()
      // get all category
      const getAllCategory = async () => {
        try {
          const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`)
          setShowCategory(data?.category)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        getAllCategory()
      }, [])

      // handel Create 

      const handelCreate = async () => {
        try {
          const postData = new FormData()
          postData.append("name", name)
          postData.append("description", description)
          postData.append("category", category)
          postData.append("photo", photo)

          const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/post/create-blog`, postData)
          if (data?.success) {
            toast.error(data.message)
          } else {
            toast.success('Blog Post Created')
            navigate('/')
          }
        } catch (error) {
          console.log(error)
          toast.success('Something went wrong')
        }
      }
    const [auth, setAuth] = useContext(AuthProvider)
  return auth.user?.role === 1 ? (
    <div className='ml-10'>
      <h1 className='text-white'>Create Post</h1>
      <div className='m-1 w-75'>
        <Select
               border={false}
               placeholder="Select your category"
               showSearch
               className="form-select mb-3"
               onChange={(value) => setCategory(value)}
        >

        {showCategory.map((c) => (
          <Option key={c._id} value={c._id}>
              {c.name}
          </Option>
        ))}

        </Select>
        <div className='mb-3'>
          <label className='btn btn-outline col-md-12 text-white'>
            {photo ? photo.name : "Upload Photo"}
            <input 
            type="file" 
            name='photo'
            accept='image/*'
            onChange={((e) => setPhoto(e.target.files[0]))}
            hidden
            />
          </label>
        </div>
        <div className='mb-3'>
          {photo && (
            <div className='text-center'>
              <img 
              src={URL.createObjectURL(photo)}
              alt="Post Photo" 
              height={"200px"} 
              className='img img-responsive' />
            </div>
          )}
        </div>
        <div className='mb-3'>
          <input 
          type="text" 
          placeholder='Write Post name'
          className='form-control'
          value={name}
          onChange={((e) => setName(e.target.value))}
          />
        </div>
        <div className='mb-3'>
          <textarea
          type="text" 
          placeholder='Write Post Description'
          className='form-control'
          value={description}
          onChange={((e) => setDescription(e.target.value))}
          />
        </div>
        <button className='btn btn-primary' onClick={handelCreate}>Create Post</button>
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

export default CreatePost