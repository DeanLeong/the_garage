import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'


function Home(props) {

  return (
    <div className="home-container">
      <h1 className="see-all">See All Motorcycles</h1>
      <img src={props.currentUser.img_url} className="user-img" alt="user profile"/>
      <p className="user-name">{props.currentUser.username}</p>

      <Link to={`/addmotorcycle`}><button className="basic-button" id="add-mc-btn">Add a new motorcycle!</button></Link>

      <div className="moto-container">
      {
        props.motorcycles.map(motorcycle => (
          <div className="moto" key={motorcycle.id}>
            <Link to={`/motorcycles/${motorcycle.id}`} className="mc-link">
              <img src={motorcycle.img_url} className="mc-img" alt="motorcycles"/>
              <p className="moto-name">{motorcycle.name}</p></Link>
          </div>
        ))
        }
    </div>
    </div>
  );
}

export default Home;