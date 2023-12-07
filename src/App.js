import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchCourses() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const op = await res.json();

      setCourses(op.data);
    } catch (error) {}

    setLoading(false);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="w-screen relative h-screen bg-gray-950 text-white">
      <div className="w-full py-2 text-2xl font-semibold bg-slate-800">
        <Navbar />
      </div>

      <Filter data={filterData} category={category} setCategory={setCategory} />

      <div className=" bg-slate-950">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
}

export default App;
