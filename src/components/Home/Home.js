import React, { useEffect, useState } from 'react';
import SubHome from '../SubHome/SubHome';
import './Home.css';

const Home = () => {
  const [courses, setCourses] = useState([]);

// data call

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [ ]);

  return (
    <div>
      <h1 className='welcome'>Welcome to our Digital IT Center,,</h1>
      <div className="home">
        {/* data mapping */}
        {courses.map((course) => (
          <SubHome key={course.id} course={course}></SubHome>
        ))}
      </div>
    </div>
  );
};

    

export default Home;