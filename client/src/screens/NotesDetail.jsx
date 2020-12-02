import React from 'react';
import {Link} from 'react-router-dom'

function NotesDetail(props) {
  console.log(props)
  return (
    <div>
      <h2>Hi Dean</h2>
       {/* {
        props.maintenance_notes.map(maintenance_note => (
          <div key={maintenance_note.id}>
            <p>{maintenance_note.content}</p>
          </div>
        ))
      } */}
    </div>
  );
}

export default NotesDetail;