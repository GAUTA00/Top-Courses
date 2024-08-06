import { useState } from "react";
import Card from "./Card"
function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  function reloadHandler(){
    window.location.reload();
  }
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }else{
      return courses[category]
    }
  }

  if (getCourses().length!==0) {
    return <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {getCourses().map((course) => {
     return <Card courses={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
    })}
  </div>
  }else{
    return <div className="text-2xl font-bold flex flex-col items-center">
      Data Not Found
      <br></br>
      <button className=" bg-slate-700 rounded-md pb-1 px-2" onClick={reloadHandler}>Refresh Now</button>
    </div>
  }
  

}

export default Cards;