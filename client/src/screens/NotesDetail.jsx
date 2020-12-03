import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { getAllMaintenance_notes, destroyMaintenance_note } from '../services/maintenance_notes';
// import { maintenance_noteHandleDelete, maintenance_noteHandleUpdate } from '../App'


function NotesDetail({ maintenance_notes }) {
  console.log(maintenance_notes)
  const [notes, setNotes] = useState([])
  //console.log(maintenance_notes)
  const { id } = useParams()

  useEffect(() => {
    if (maintenance_notes.length) {
      const getNotes = maintenance_notes.filter((note) => note.motorcycle_id === Number(id))
      setNotes(getNotes)
      console.log(notes)
    }
  }, [id])

  return (
    <div className="notes-detail-container">
      <h2>Update or Delete your notes!</h2>
      {
        notes.map(note => (
          <p>{note.content}{/* buttons for update and delete */}
            {<button className="basic-button" >Delete Note</button>}
            {<button className="basic-button" >Edit Note</button>}
          </p>
        ))
       }
    </div>
  );
}

export default NotesDetail;
// onClick={maintenance_noteHandleDelete}
// onclick={maintenance_noteHandleUpdate}