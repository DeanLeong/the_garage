import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'


function Home(props) {
  // console.log(props)
  // console.log(props.currentUser)
  // console.log(props.currentUser.img_url)
  // console.log(props.currentUser.username)
  //randomly decides currentUser is null

  return (
    <div className="home-container">
      <h1 className="see-all">See All Motorcycles</h1>
      <img src={props.currentUser.img_url} className="user-img" />
      <p>{props.currentUser.username}</p>
      <Link to={`/addmotorcycle`}><button className="basic-button">Add a new motorcycle!</button></Link>
      <div className="moto-container">
      {
        props.motorcycles.map(motorcycle => (
          <div className="moto" key={motorcycle.id}>
            <Link to={`/motorcycles/${motorcycle.id}`} className="mc-link"><img src={motorcycle.img_url} className="mc-img"/><p>{motorcycle.name}</p></Link>
          </div>
        ))
        }
        </div>
    </div>
  );
}

export default Home;

// import get motorcycles from wherever it is
//How to get user on this?