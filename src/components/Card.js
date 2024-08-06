import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
function Card(props) {
  let course = props.courses;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //Pele se like hua pada he to 
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    } else {
        //pehle se khali nahi he.
        setLikedCourses((prev) => [...prev, course.id]);
        toast.success("Liked Successfully")
      }
    
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className="relative">
        <img src={course.image.url} alt="" loading='lazy' />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center">
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>

        </div>
      </div>

      <div className="p-4">
        <p className='text-white font-bold text-lg leading-6'>{course.title}</p>
        <p className=' mt-2 text-white font-semibold'>
          {
            course.description.length > 100 ? (course.description.substr(0, 100) + "...") : (course.description)
          }
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default Card;