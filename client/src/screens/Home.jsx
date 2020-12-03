import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'


function Home(props) {
  console.log(props)
  return (
    <div className="home-container">
      <h1 className="see-all">See All Motorcycles</h1>
      <Link to={`/addmotorcycle`}><button>Add a new motorcycle!</button></Link>
      {
        props.motorcycles.map(motorcycle => (
          <div key={motorcycle.id}>
            <Link to={`/motorcycles/${motorcycle.id}`} className="mc-link"><img src={motorcycle.img_url} className="mc-img"/><p>{motorcycle.name}</p></Link>
          </div>
        ))
      }
    </div>
  );
}

export default Home;

// import get motorcycles from wherever it is
//How to get user on this?