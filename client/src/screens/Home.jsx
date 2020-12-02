import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'


function Home(props) {
  console.log(props)
  return (
    <div className="home-container">
      <h1>See All Motorcycles</h1>
      {
        props.motorcycles.map(motorcycle => (
          <div key={motorcycle.id}>
            <Link to={`/motorcycles/${motorcycle.id}`}><img src={motorcycle.img_url}/><p>{motorcycle.name}</p></Link>
          </div>
        ))
      }
    </div>
  );
}

export default Home;

// import get motorcycles from wherever it is