import React from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar';

const Home = () => {

  return (
    <>
    <Navbar/>

    {/* // navbar section? */}
    <div className='mainHome'>

        {/* sidebarsection */}
        <div className="sidebar">
        <Link to='toprated'>Top Rated</Link>
            <Link to='allmovies'>All Movies</Link>
            <Link to='action'>Action</Link>
            <Link to='comedy'>Comedy</Link>
            <Link to='drama'>Drama</Link>
          
        </div >

        {/* bodysection */}
       
       <div className="body">
       <Outlet/>
       </div>
        
       
    </div>
    </>
    
  )
}

export default Home
