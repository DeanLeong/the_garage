import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  const { currentUser, handleLogout } = props
  return (
    <div className="header">
      <h1 className="header-title">The Garage</h1>
      {
        currentUser ?
          <>
            {/* <p>{currentUser.username}</p> */}
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
          :
          <Link to='/'>Login/Register</Link>
      }
      {/* <hr /> */}
      {
        currentUser &&
        <>
          {/* <Link to='/motorcycles'>Motorcycles</Link>

          <Link to='/maintenance_notes'>Notes</Link> */}
        </>
      }
    </div>
  );
}

export default Header;