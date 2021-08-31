import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />

    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
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

    <nav className="nav-logged-in" >


    <button className="nav-profile-button">
      {isLoaded && sessionLinks}

    </button>
    <button className="nav-button">
      <NavLink to="/shoes/new">New Shoe</NavLink>
    </button>
    <button className="nav-button">
      <NavLink exact to="/">Home</NavLink>
    </button>



  </nav>
  );
}

export default Navigation;
