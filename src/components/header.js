import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerleft'>
            <NavLink to="/"><h1 style={{textDecoration: "none", color: 'white'}}>IMBD</h1></NavLink>
            <Link to="movie/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="movie/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            <Link to="movie/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
        </div>
    </div>
  )
}

export default Header