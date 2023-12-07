import React from 'react'

function Filter(props) {

    let category = props.category;
    let setCategory = props.setCategory;


    function filterHandler(title){
        setCategory(title)
    }

  return (
    <div>
    {
        props.data.map((data)=>{
            return <button onClick={() => filterHandler(data.title)}>{
                data.title
            }</button>
        })
    }
    </div>
  )
}

export default Filter