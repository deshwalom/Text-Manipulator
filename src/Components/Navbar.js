import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {

// AGR NAVBAR.JS ME HI DARK MODE ENABLE KRNA HO TO
//  const [myStyle1,setMyStyle]=useState({
//   color:"light",
//   backgroundColor:"light"
//  })
//  const [btnText,setBtnText]=useState({
//        color:"black",
//        backgroundColor:"black"
//  })
//  const handleClick= function(){
//     if(myStyle1.color==="light"){
//       setMyStyle({
//        color:"dark",
//        backgroundColor:"light"
//        } )
//        setBtnText({
//         color:"white",
//         backgroundColor:"white"
//        })
//       }
//     else{
//       setMyStyle({
//        color:"light",
//        backgroundColor:"dark"
//       } );
//       setBtnText({
//         color:"black",
//         backgroundColor:"black"
//        })
//       } 
//   }
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ boxShadow: '0px 0px 6px rgba(0,0,0,0.4'}} >
    <div className="container-fluid">
     {/* <Link className="navbar-brand" to="/"  >{props.title}</Link> */}
     <a className="navbar-brand" href="/"  >{props.title}</a>
     <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon" ></span>
     {/* `this is my nak=me :  ${myStyle1.backgroundColor} . afasfasfafasf` */}
    </button>
    <div className="collapse navbar-collapse"   id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" href="/" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/about" >{props.about}</a>
        </li>
       
      </ul>
      <button type="button" className="btn btn-primary"  onClick={props.toggleMode2} style={{margin: " 0 10px" }} >SkyBlue mode</button>
      <button type="button" className="btn btn-success"  onClick={props.toggleMode3} style={{margin: " 0 10px" }}>Green mode</button>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode1}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label  "  htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?"Enable Black Darkmode":"Disable Darkmode"}</label>
        </div>
        
       
      
      {/* <form className="d-flex" role="search">  `"${btnText.color}"`style={{color: `${btnText.color}` }}
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
       
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
}
Navbar.propTypes={title : PropTypes.string,
                  aboutText :PropTypes.string}

// DEFAULT PROPS
  Navbar.defaultProps= {
    title : "set title here",
    about : "set about here"
  }