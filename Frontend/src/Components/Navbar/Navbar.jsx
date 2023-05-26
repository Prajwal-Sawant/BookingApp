// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Navbar.css"
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className="navContainer">
//         <Link to="/" style={{color:"white", textDecoration:"none"}}>

//           <span className="logo">prajwal</span>
//         </Link>
//         <div className="navItems">
//           <button className="navButton">Register</button>
//           <button className="navButton">Login</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar








import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;