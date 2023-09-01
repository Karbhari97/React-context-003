import React from "react";
import '../App.css';
import { useContext } from "react";
import ref from "../ContextAPi/Data";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import More from "./More";
import Blog from "./Blog";
import { Link } from "react-router-dom";


function Navbar() {
    let {textcolor,toggle,color,theme}=useContext(ref);
  return (
    <>
    <div className="container-fluid" style={{display:"flex", justifyContent:"space-evenly",width:"100%",alignItems:"center",backgroundColor:color}}>
     

     <div className="container"  style={{width:"50%",padding:"10px"}}>
        <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRerWaIGYaBBBi90RW3RrGwBmIzeW4rSIvg&usqp=CAU" alt="logo" width={100} /></Link>
     </div>

     <div className="container" style={{width:"60%"}}> 
     <nav class="navbar navbar-expand-lg" >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" >
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Home" style={{color:textcolor}} >
                  Home
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/About" style={{color:textcolor}}>
                  About
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Blog" style={{color:textcolor}}>
                  Blog
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Contact" style={{color:textcolor}}>
                  Contact
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/More" style={{color:textcolor}}>
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </div>

     <div style={{display:"flex",justifyContent:"space-evenly",width:"30%",alignItems:"center"}}>
        <Link to="">Login</Link>
        <button className="btn btn-outline-primary" id="toggle" onClick={()=>{toggle()}}>Toggle to {theme}</button>
        
     </div>
  
    </div>
    <div className="container-fluid" style={{backgroundColor:color,color:textcolor, height:"100vh"}}>
    <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />

        <Route path='/Blog' element={<Blog />} />

        <Route path='/Contact' element={<Contact />} />

        <Route path='/More' element={<More />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
   
    </>
  );
}

export default Navbar;
