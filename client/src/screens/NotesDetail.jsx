import React, { useEffect, useState } from 'react';
import './NotesDetail.css'
import {Link, useParams, useHistory, Redirect} from 'react-router-dom'
import { postMaintenance_note, destroyMaintenance_note} from '../services/maintenance_notes';



function NotesDetail(props) {
  const [notes, setNotes] = useState([])
  const [isLoaded, setLoaded] = useState(null)
  const [isDeleted, setIsDeleted] = useState(false)
  const [maintenance_notes, setMaintenance_notes] = useState([])
  const { id } = useParams()
  const history = useHistory()
  const {motorcycle_id} = useParams()

  
  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNotes = props.maintenance_notes.filter((note) => note.motorcycle_id === Number(id))
      setNotes(getNotes)
      setLoaded(true)
    }
  }, [id, props.maintenance_notes])

  const sendRefresh = () => {
    history.push(`/motorcycles/${id}`)
  }

  const maintenance_noteHandleDelete = async (id) => {
    await destroyMaintenance_note(id)
    setMaintenance_notes(prevState => prevState.filter(note => note.id !== id))
  }

  if (isDeleted) {
    history.push(`/motorcycles/${id}`)
  }

  return (
    <div className="notes-detail-container">
      <h2 className="detail-title">Add a new note, or Update and Delete your current notes!</h2>
      <Link to={`/motorcycles/${id}/notesdetail/add`}><button className="basic-button">Add Note</button></Link>
      <div className="add-notes-container">
      {
        notes.map(note => (
          <p key={note.id} className="note">
            {note.content}
            {<button className="basic-button" onClick={() => maintenance_noteHandleDelete(note.id)}>Delete Note</button>}
            {<Link to={`/motorcycles/${id}/notesdetail/${note.id}/edit`}><button className="basic-button">Edit Note</button></Link>}
          </p>
        ))
        }
        </div>
    </div>
  );
}

export default NotesDetail;