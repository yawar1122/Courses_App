import React from 'react'
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
    <div>
        {
            getCourses().map((course) => {
                return <Card course={course}/>
            })
        }
    </div>
  )
}

export default Cards