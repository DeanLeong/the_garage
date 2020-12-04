import React, { useState } from 'react';
import { postMaintenance_note } from '../services/maintenance_notes';
import {useParams, useHistory} from 'react-router-dom'
import './NotesAdd.css'

function NotesAdd(props) {
  const [maintenance_note, setMaintenance_note] = useState({
    content: '',
  })
  const [created, setCreated] = useState(false)
  const {motorcycle_id} = useParams()
  const history = useHistory()
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setMaintenance_note({
      ...maintenance_note,
      [name]: value,
    })
  }

  const sendRefresh = () => {
    history.push(`/motorcycles/${motorcycle_id}/notesdetail`)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await postMaintenance_note(motorcycle_id, maintenance_note)
    setCreated({ created })
    props.setMaintenance_notes(prevState => [...prevState, created])
    sendRefresh()
  }


  return (
    <div className="notes-add-container">
      <h2 className="add-note-title">Add a note here!</h2>
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