import React, { useContext, useEffect, useState } from 'react'
import { AuthProvider } from '../../context/authContext'
import  axios   from 'axios';
import { toast } from 'react-toastify';

const CreateCategory = () => {
    const [auth, setAuth] = useContext(AuthProvider)
    const [showCategory, setShowCategory] = useState([])
    const [name, setName] = useState("")
    const [visible, setVisible] = useState(false)
    const [selceted, setSelected] = useState(null)
    const [updateName, setUpdateName] = useState('')
    console.log(showCategory)


    // create category handel

    const handelCreate = async (e) => {
        e.preventDefault()
      try {
        const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, {name})
        setName(data?.category)
        toast.success(data?.message)
      } catch (error) {
        console.log(error)
      }
    }

    // get all category
    const getAllCategory = async () => {
      try {
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`)
        setShowCategory(data?.category)
      } catch (error) {
        console.log(error)
      }
    }

    // update category

    const handelUpdate = async (e) => {
      // e.preventDefault()
      try {
        const {data} = await axios.put(`${process.env.REACT_APP_API}/api/v1/category/update-category/${selceted._id}`, {name: updateName})
        console.log('Update response:', data);
        if (data?.success) {
          toast.success(`${updateName} is updated`)
          setSelected(null);
          setVisible(false);
          setUpdateName('');
          getAllCategory();
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }

    // delete category

    const handelDelete = async (pid) => {
      try {
        const {data} = await axios.delete(`${process.env.REACT_APP_API}/api/v1/category/delete-category/${pid}`)
        if (data.success) {
          toast.success('Category deleted successfully')
          getAllCategory()
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        toast.error('facing problem to deleting category')
      }
    }

    useEffect(() => {
      getAllCategory()
    }, [])
  return auth.user?.role === 1 ? (
    <div>
      <div className='flex justify-center mt-4 gap-4'>
        <input 
        type="text" 
        className="bg-gray-400 h-[40px] w-[50%] placeholder-white mb-4 rounded-md line-clamp-1 text-white   placeholder:  pl-4"
        placeholder='Category name'
        value={name}
        onChange={((e) => setName(e.target.value))}
        />
        <button className="text-center text-white bg-emerald-900 h-[38px] w-[88px] rounded-md mt-[2px]" onClick={handelCreate}>
          Create
        </button>
        </div>
        <div className="w-[61%] relative left-[20%] top-[46px] text-white bg-emerald-900 rounded-md">
        {showCategory.map((c) => (
                    <div className="p-[15px] font-bold flex items-center justify-between" key={c.id}>
                        {selceted === c ? (
                            <input
                                type="text"
                                className="bg-gray-400 h-[40px] rounded-md line-clamp-1 text-white placeholder: pl-4"
                                value={updateName}
                                onChange={(e) => setUpdateName(e.target.value)}
                                autoFocus
                                onBlur={() => setSelected(null)}
                                onClick={handelUpdate}
                                
                            />
                        ) : (
                            <span>{c.name}</span>
                        )}
                        
                            <button className="text-white bg-blue-700 h-[38px] w-[67px] rounded-md"  onClick={(() => {
                              setVisible(true)
                              setUpdateName(c.name)
                              setSelected(c)
                            })}>
                                Edit
                            </button>
                         
                        <button className="text-white bg-blue-700 h-[38px] w-[67px] rounded-md" onClick={() => handelDelete(c._id)}>Delete</button>
                    </div>
                ))}
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

export default CreateCategory