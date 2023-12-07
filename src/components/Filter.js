import React from 'react'

function Filter(props) {

    let category = props.category;
    let setCategory = props.setCategory;


    function filterHandler(title){
        setCategory(title)
    }

  return (
    <div className='max-w-[1200px] mx-auto flex justify-center items-center py-6 gap-6'>
    {
        props.data.map((data)=>{
            return <button onClick={() => filterHandler(data.title) }
            className={`px-5 py-2 border bg-slate-900 rounded-md ${category === data.title && "bg-white text-black font-semibold"}`}
            >{
                data.title
            }</button>
        })
    }
    </div>
  )
}

export default Filter