import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  const { currentUser, handleLogout } = props
  return (
    <div className="header">
      <Link to='/home' className="header-link"><h1 className="header-title">The Garage</h1></Link>
      {
        currentUser ?
          <>
            {/* <p>{currentUser.username}</p> */}
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
          :
          <Link to='/'></Link>
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