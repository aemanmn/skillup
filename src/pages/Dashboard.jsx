import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName ? user.displayName : user.email);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [navigate, auth]);

  useEffect(() => {
    if (isAuthenticated) {
      const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses"));
      if (storedCourses) {
        setEnrolledCourses(storedCourses);
      } else {
        setEnrolledCourses([]); // Initialize with an empty array if no stored courses
      }
    } else {
      setEnrolledCourses([]); // Initialize with an empty array for new users
    }
  }, [isAuthenticated]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {isAuthenticated ? (
        <div>
          <p className="text-lg font-bold">Welcome, {username}!</p>
          <section className='dashboard bg-[#F3F4F8] py-16'>
            <div className='w-4/5 m-auto'>
              <h1 className='text-3xl font-semibold text-black'>Your Enrolled Courses</h1>
              {isAuthenticated && (
                <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
                  {enrolledCourses.map((course) => (
                    <div className='box rounded-lg shadow-shadow1 bg-white'>
                      <img src={course.cover} alt='' className='rounded-t-lg object-cover w-full h-full' />
                      <h3 className='text-black my-4 font-medium'>{course.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Dashboard;