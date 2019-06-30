import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue dar">
      <div className="container">
        <Link className="brand-logo" to="/">Welcome To Store</Link>
        <ul className="right">
         {
            (cookies.get('loggedIn')!==null && cookies.get('loggedIn')!== undefined && cookies.get('loggedIn')!== "" ?
                <li><NavLink to='/logout'>Logout</NavLink></li> : null
             )
    
      }
         
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)