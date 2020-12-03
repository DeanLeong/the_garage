import React, { useEffect, useState } from 'react';
import { postMaintenance_note } from '../services/maintenance_notes';
import {Link, Redirect, useParams, useHistory} from 'react-router-dom'
import './NotesAdd.css'

function NotesAdd(props) {
  const [maintenance_note, setMaintenance_note] = useState({
    content: '',
  })
  const [isCreated, setCreated] = useState(false)
  console.log(props)
  const { id, motorcycle_id } = useParams()
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setMaintenance_note({
      ...maintenance_note,
      [name]: value,
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await postMaintenance_note(motorcycle_id, maintenance_note)
    setCreated({ created })
  }
  if (isCreated) {
    return <Redirect to={`motorcycles/${motorcycle_id}/notesdetail`} />
  }

  return (
    <div className="notes-add-container">
      <form className="create-note-form" onSubmit={handleSubmit}>
        <textarea
          className="add-note"
          placeholder="Add your note here"
          value={maintenance_note.content}
          name="content"
          required
          onChange={handleChange}
        />
        <button type="submit" className="basic-button">Submit</button>
      </form>
    </div>
  );
}

export default NotesAdd;