import React, { useEffect, useState } from 'react';
import './NotesDetail.css'
import {Link, useParams, useHistory} from 'react-router-dom'
import { postMaintenance_note, destroyMaintenance_note} from '../services/maintenance_notes';



function NotesDetail(props) {
  const [notes, setNotes] = useState([])
  const [isLoaded, setLoaded] = useState(null)
  const [isDeleted, setIsDeleted] = useState(false)
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

  return (
    <div className="notes-detail-container">
      <h2>Add a new note, or Update and Delete your current notes!</h2>
      <Link to={`/motorcycles/${id}/notesdetail/add`}><button className="basic-button">Add Note</button></Link>
      {
        notes.map(note => (
          <p key={note.id}>
            {note.content}
            {<button className="basic-button" onClick={() => maintenance_noteHandleDelete(note.id)}>Delete Note</button>}
            {<Link to={`/motorcycles/${id}/notesdetail/${note.id}/edit`}><button className="basic-button">Edit Note</button></Link>}
          </p>
        ))
       }
    </div>
  );
}

export default NotesDetail;