import React from 'react';
import './McNotes.css'
import {Link} from 'react-router-dom'

function McNotes(props) {
  console.log(props)
  return (
    <div className="notes-container">
      <h3 className='notes-title'>See Notes for: </h3>
      {
        props.maintenance_notes.map(maintenance_note => (
          <div key={maintenance_note.id}>
            <p>{maintenance_note.content}</p>
          </div>
        ))
      }
    </div>
  );
}

export default McNotes;

//How to get notes to render only for their specific motorcycle?
//Show that MC picture and name