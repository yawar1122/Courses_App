import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {

    const courses = props.courses;
    let category = props.category;


    function getCourses(){
        if(category === "All"){
            let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((singleCourse) => {
                allCourses.push(singleCourse);
            })
        })

        return allCourses
        }
        else{
            // main sirf specific category ka data pass karunga
            return courses[category];
        }
        
    }

  return (
    <div className='flex flex-wrap max-w-[1200px] pb-10 h-fit mx-auto gap-y-5 gap-x-4 justify-center'>
        {
            getCourses().map((course) => {
                return <Card  key={course.id} course={course}/>
            })
        }
    </div>
  )
}

export default Cards