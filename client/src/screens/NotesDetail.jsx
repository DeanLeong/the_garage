import React, { useEffect, useState } from 'react';
import {Link, Redirect, useParams} from 'react-router-dom'
import { getAllMaintenance_notes, destroyMaintenance_note } from '../services/maintenance_notes';
// import { maintenance_noteHandleDelete, maintenance_noteHandleUpdate } from '../App'


function NotesDetail(props) {
  const [notes, setNotes] = useState([])
  const [isLoaded, setLoaded] = useState(null)
  const [isDeleted, setIsDeleted] = useState(false)
  console.log(props)
  const { id } = useParams()

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNotes = props.maintenance_notes.filter((note) => note.motorcycle_id === Number(id))
      setNotes(getNotes)
      console.log(notes)
    }
  }, [id])

  // if (!isLoaded) {
  //   return <h1>Loading...</h1>
  // }
  if (isDeleted) {
  // return <Redirect to={"/notesdetail"} />
  }
  const maintenance_noteHandleDelete = async () => {
    await destroyMaintenance_note(id)
    setIsDeleted(!isDeleted)
  }

  return (
    <div className="notes-detail-container">
      <h2>Update or Delete your notes!</h2>
      {
        notes.map(note => (
          <p key={note.id}>
            {note.content}{/* buttons for update and delete */}
            {<button className="basic-button" onClick={maintenance_noteHandleDelete}>Delete Note</button>}
            {<button className="basic-button" onClick={props.maintenance_notehandleUpdate}>Edit Note</button>}
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

//i need to pass the setnotes use state from app

//is currently always looking for http://localhost:3000/motorcycles/1/maintenance_notes/1 it is also currently running on load lol