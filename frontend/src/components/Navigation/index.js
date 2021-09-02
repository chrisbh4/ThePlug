import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="nav-logged-in">

        <div className="nav-profile-button">
          <ProfileButton user={sessionUser} />
        </div>

        <button className="nav-button">
          <NavLink to="/shoes/new">New Shoe</NavLink>
        </button>

        <button className="nav-button">
          <NavLink exact to="/">Home</NavLink>
        </button>
      </div>

    );
  } else {
    sessionLinks = (
      <div className="nav-logged-in">

        <button className="nav-button">
          <LoginFormModal />
        </button>

        <button className="nav-button">
          <NavLink to="/signup">Sign Up</NavLink>
        </button>


        <button className="nav-button">
          <NavLink exact to="/">Home</NavLink>
        </button>

      </div>
    );
  }

  return (
    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //     <NavLink to="/shoes/new">New Shoe</NavLink>
    //     {isLoaded && sessionLinks}
    //   </li>
    // </ul>
      <nav >
        {isLoaded && sessionLinks}
      </nav>
    //   {/* <button className="nav-button">
    //   <NavLink to="/shoes/new">New Shoe</NavLink>
    // </button>
    // <button className="nav-button">
    //   <NavLink exact to="/">Home</NavLink>
    // </button> */}




  );
}

export default Navigation;
