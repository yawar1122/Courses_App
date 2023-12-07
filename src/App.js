import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData,apiUrl } from "./data";
import Spinner from "./components/Spinner";



function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchCourses(){

    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const op = await res.json();

      setCourses(op.data);

    }
    catch(error){

    }

    setLoading(false);
  }


  useEffect(()=>{
    fetchCourses();
  },[]);

  return (
    <div>
      <Navbar/>


      <Filter data={filterData}
        category = {category}
        setCategory = {setCategory}
      />

      {
        loading ? <Spinner/> : <Cards courses={courses} category={category}/>
      }

      
    </div>
  );
}

export default App;