import React from 'react';
import {Link} from 'react-router-dom'

function NotesDetail(props) {
  return (
    <div>
       {
        props.maintenance_notes.map(maintenance_note => (
          <div key={maintenance_note.id}>
            <Link to='/notesdetail' className="note"><p>{maintenance_note.content}</p></Link>
          </div>
        ))
      }
    </div>
  );
}

export default NotesDetail;