import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../components/assets/data/dummydata';
import { UserContext } from './UserContext';

const Course = () => {
  const [courses] = useState([
    { id: 1, title: 'Topic 1', topic: 'Introduction to React', instructor: 'John Doe', cover: 'course1-cover.jpg', description: 'This is a course about React', topics: ['React basics', 'React components', 'React state'] },
    { id: 2, title: 'Topic 2', topic: 'JavaScript Fundamentals', instructor: 'John Doe', cover: 'course2-cover.jpg', description: 'This is a course about JavaScript', topics: ['JavaScript basics', 'JavaScript functions', 'JavaScript objects'] },
    { id: 3, title: 'Topic 3', topic: 'React Hooks', instructor: 'John Doe', cover: 'course3-cover.jpg', description: 'This is a course about React Hooks', topics: ['React Hooks basics', 'React Hooks examples', 'React Hooks best practices'] },
  ]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Courses by John Doe</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="text-gray-600">
            <span>{course.title}</span> - {course.topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { user, setUser } = useContext(UserContext);

  if (!course) {
    return <h1 className="text-3xl font-bold mb-4">Course not found</h1>;
  }

  if (!user) {
    return <h1 className="text-3xl font-bold mb-4">User not found</h1>; // Handle case where user is empty
  }

  const handleEnroll = () => {
    if (!isEnrolled) {
      const enrolledCourses = user.enrolledCourses || [];
      enrolledCourses.push(course);
      setUser({ ...user, enrolledCourses });
      setIsEnrolled(true);
      console.log("You have enrolled in the course!");
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img
        src={course.cover}
        alt=""
        className="rounded-t-lg object-cover w-3/4 h-48 mb-4"
      />
      <p className="text-gray-600">Taught by {course.instructor}</p>
      <p className="text-gray-600"></p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{course.topic}</h2>
        <p className="text-gray-600">{course.description}</p>
      </div>
      {course.topics && (
        <div className="md:ml-4">
          <h2 className="text-2xl font-bold mb-2">Topics:</h2>
          <ul>
            {course.topics.map((topic) => (
              <li key={topic} className="text-gray-600">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleEnroll}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CourseDetail />
      <Course />
    </div>
  );
};

export default App;