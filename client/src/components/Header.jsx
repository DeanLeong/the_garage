import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  const { currentUser, handleLogout } = props
  return (
    <div>
      <h1>The Garage</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/'>Login/Register</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/motorcycles'>Motorcycles</Link>
          <Link to='/maintenance_notes'>Notes</Link>
        </>
      }
    </div>
  );
}

export default Header;