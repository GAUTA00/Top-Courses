import './App.css';
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import { apiUrl, filterData } from "./data"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      // console.log(output);
    }
    catch (error) {
      toast.error("Something went Wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className=" min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className='bg-bgDark2'>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
