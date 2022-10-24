import React from 'react'
import './Nav.css'
// import { Link } from "react-scroll";
import {Link, Route, Routes} from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import Bedroom from '../../Pages/BedroomPage/Bedroom'

export default function Nav() {
  return (
    <div id='nav' className='nav'>
        <nav className="navbar navbar-expand-lg bg-light container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Furn.</a>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link 
                         to="/"
                         className="nav-link active" aria-current="page" >
                        Home</Link>    
                        </li>
                     
                        <li className="nav-item">
                        <Link 
                         to="/bedroom"
                         className="nav-link active" aria-current="page" >
                        Bedroom</Link>    
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/bedroom' element={<Bedroom/>}/>
        </Routes>
    </div>
  )
  }
/**
 *    {/* <li className="nav-item">
                        <Link
                         to="arrivalsection"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={1000}
                          className="nav-link" >new arrival</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="FetureProductSection"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={1000} className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="blogs"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={1000} className="nav-link">Blogs</Link>
                        </li>

                       

                        <li className="nav-item">
                        <Link to="contact"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={1000} className="nav-link">Contact</Link>
                        </li> */

 