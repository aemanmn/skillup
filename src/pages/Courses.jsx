import React, { useState } from "react";
import { courses } from "../components/assets/data/dummydata";
import { useNavigate, Link } from "react-router-dom";

export const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [coursesToShow, setCoursesToShow] = useState(6); 
  const navigate = useNavigate();

  const handleEnroll = (course) => {
    const newCourses = [...enrolledCourses, course];
    setEnrolledCourses(newCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(newCourses));
    navigate("/dashboard"); 
  };

  const handleShowMore = () => {
    setCoursesToShow(coursesToShow + 6); 
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-3 gap-8">
        {courses.slice(0, coursesToShow).map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-shadow1 p-4">
            <img
              src={course.cover}
              alt=""
              className="rounded-t-lg object-cover w-full"
            />
            <div className="px-4">
              <h3 className="text-black font-medium">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleEnroll(course)}
              >
                Enroll
              </button>
              <Link to={`/courses/${course.id}`}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {coursesToShow < courses.length && (
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Courses;