import React, { useEffect, useState } from 'react';
import {Link, Redirect, useParams} from 'react-router-dom'
import { getAllMaintenance_notes, destroyMaintenance_note } from '../services/maintenance_notes';
// import { maintenance_noteHandleDelete, maintenance_noteHandleUpdate } from '../App'


function NotesDetail(props) {
  const [notes, setNotes] = useState([])
  // const [isLoaded, setLoaded] = useState(false)
  // const [isDeleted, setIsDeleted] = useState(false)
  //console.log(maintenance_notes)
  const { id } = useParams()

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNotes = props.maintenance_notes.filter((note) => note.motorcycle_id === Number(id))
      setNotes(getNotes)
      console.log(notes)
    }
  }, [id])

  // const handleDelete = async () => {
  //   await destroyMaintenance_note(notes.id)
  //   setIsDeleted(!isDeleted)
  // }

  // if (!isDeleted) {
  //   return <Redirect to={'/notesdetail'}
  // }

  return (
    <div className="notes-detail-container">
      <h2>Update or Delete your notes!</h2>
      {
        notes.map(note => (
          <p>{note.content}{/* buttons for update and delete */}
            {<button className="basic-button" onClick={props.handleDelete}>Delete Note</button>}
            {<button className="basic-button" onClick={props.handleUpdate}>Edit Note</button>}
          </p>
        ))
       }
    </div>
  );
}

export default NotesDetail;
// onClick={maintenance_noteHandleDelete}
// onclick={maintenance_noteHandleUpdate}

//refactor code so I can get all props?

//Something deleted mc 1's notes and seeding didn't bring them back
//took SS of working code refactoring to props