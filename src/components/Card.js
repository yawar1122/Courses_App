import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

function Card(props) {

  const description = props.course.description.slice(0,200);
  const key = props.key;
  const [read,setRead] = useState(false);
  const [isLiked,setIsLiked] = useState(false);


  return (
    <div className='w-[250px] flex flex-col justify-between p-4 h-[350px] bg-slate-800 rounded-md'>
        <div className='relative'>
        <img src={props.course.image.url} className='w-full '/>
        <div onClick={() => {
          // props.setLikedCard(key)
          setIsLiked(!isLiked);
          if(isLiked) {
            toast.error("Removed Successful..")
          }
          else{
            toast.success("Liked Successful..")
          }
          
        }}
          className={`p-2 cursor-pointer -bottom-3 right-0 absolute text-xl text-red-500 ${isLiked && "text-red-200"} bg-white rounded-full`}>
        <FaHeart />
        </div>
        </div>

        <h2 className=' font-semibold'>{props.course.title}</h2>
        <p className='text-sm text-slate-400'>{
          read
          ? props.course.description
          : description
          }
          <span className='text-blue-400' onClick={() => setRead(!read)}>
            {
              read ? " Show Less" : " Read More"
            }
          </span>
          </p>
    </div>
  )
}

export default Card