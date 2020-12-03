import React, { useEffect, useState } from 'react';
import './NotesDetail.css'
import {Link, Redirect, useParams, useHistory} from 'react-router-dom'
import { postMaintenance_note, getAllMaintenance_notes, destroyMaintenance_note,  putMaintenance_note } from '../services/maintenance_notes';
// import { maintenance_noteHandleDelete, maintenance_noteHandleUpdate } from '../App'


function NotesDetail(props) {
  const [notes, setNotes] = useState([])
  const [isLoaded, setLoaded] = useState(null)
  const [isDeleted, setIsDeleted] = useState(false)
  const [maintenance_notes, setMaintenance_notes] = useState({
    content: '',
  })
  console.log(props)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNotes = props.maintenance_notes.filter((note) => note.motorcycle_id === Number(id))
      setNotes(getNotes)
      setLoaded(true)
      console.log(notes)
    }
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  if (isDeleted) {
    history.push(`/notesdetail`)
  }

  const maintenance_noteHandleDelete = async (this_id) => {
    await destroyMaintenance_note(this_id)
    setIsDeleted(!isDeleted)
  }

  const maintenance_noteHandleCreate = async (maintenance_notesData) => {
    const newMaintenance_note = await postMaintenance_note(maintenance_notesData)
    setMaintenance_notes(prevState => [...prevState, newMaintenance_note])
    history.push('/maintenance_notes')
  }

  
  return (
    <div className="notes-detail-container">
      <h2>Add a new note, or Update and Delete your current notes!</h2>
      <Link to={`/motorcycles/${id}/notesdetail/add`}><button className="basic-button">Add Note</button></Link>
      {
        notes.map(note => (
          <p key={note.id}>
            {note.content}{/* buttons for update and delete */}
            {<button className="basic-button" onClick={() => maintenance_noteHandleDelete(note.id)}>Delete Note</button>}
            {<Link to={`/motorcycles/${id}/notesdetail/${note.id}/edit`}><button className="basic-button">Edit Note</button></Link>}
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

// onClick={maintenance_notehandleUpdate}
//onClick={maintenance_noteHandleCreate}