import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Comp/Nav'
import Hero from './Comp/Hero';
import coursedata from './courseData/shuffle'
import Courses from './Comp/Courses';
import Cart from './Comp/Cart'
import './App.css'


function App() {
  const courses = coursedata.slice(0, 15)

  const [course, setCourse] = useState(courses)
  const [cart, setCart] = useState([])

  const handleClick = (course) => {

    const newCart = [...cart, course]

    setCart(newCart)

  }
  return (
    <div>
      <Nav />
      <Hero />
      <div className="course-section">

        <div className='courses'>
          <h3 className="text-center">Our Online Courses</h3>
          {
            course.map((data) => (
              <Courses  data={data} handleClick={handleClick} />
            ))
          }
        </div>
        <div className="cart">
          <Cart cart={cart} />
        </div>
      </div>


    </div>
  );
}

export default App;