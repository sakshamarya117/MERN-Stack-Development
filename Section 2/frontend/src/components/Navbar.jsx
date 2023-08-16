import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" >
        <img  className='logo' src="/download (11).jpg" alt="" />
        {/* Navbar */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
          </li>
          
          <li className="nav-item">
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/add" >
              AddLikeComment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo" >
              ToDoList
            </NavLink>
          </li>
          
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            
            <li><a className='dropdown-item' href="">
                 <NavLink className="nav-link" to="/event" >
                 EventHandling
                 </NavLink>
                </a>
            </li>

            <li className="nav-item"><a className='dropdown-item' href="">
            <NavLink className="nav-link" to="/state" >
              StateManagement
            </NavLink>
             </a>

            </li>
                                        
          </ul>
        </li>

        </ul>
        <form className="d-flex" role="search">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          
          {/* <button className="btn btn-outline-success me-2" type="submit">
           Search
          </button> */}
          <button className="btn btn-outline-primary me-2" type="login">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </button>
          <button className="btn btn-outline-danger me-2" type="signin">
            <NavLink className="nav-link" to="/signup" >
              Signup
            </NavLink>
          
          </button>
        </form>
      </div>
    </div>
  </nav>
  

  )
}

export default Navbar