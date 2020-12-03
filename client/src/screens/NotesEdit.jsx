import React, { useEffect, useState } from 'react';
import './NotesEdit.css'
import { postMaintenance_note, getAllMaintenance_notes, destroyMaintenance_note, putMaintenance_note } from '../services/maintenance_notes';
import {Link, Redirect, useParams, useHistory} from 'react-router-dom'

function NotesEdit(props) {
  console.log(props)
  const [note, setNote] = useState({})
  const [isLoaded, setLoaded] = useState(null)
  const [isUpdated, setUpdated] = useState(false)
  const [maintenance_notes, setMaintenance_notes] = useState({
    content: '',
  })
  const { id, motorcycle_id } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNote = props.maintenance_notes.find((note) => note.id === Number(id))
      setNote(getNote)
      setLoaded(true)
      console.log(note)
    }
  }, [id])

  console.log(note)

  const handleChange = (event) => {
    const { name, value } = event.target
    setNote({
      ...note,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await putMaintenance_note(id, note)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/motorcycles/${motorcycle_id}/notesdetail`} />
  }

  const maintenance_notehandleUpdate = async (id, maintenance_noteData) => {
    const updatedMaintenance_note = await putMaintenance_note(id, maintenance_noteData)
    setMaintenance_notes(prevState => prevState.map(maintenance_note => {
      return maintenance_note.id === Number(id) ? updatedMaintenance_note : maintenance_note
    }))
    history.push('/maintenance_notes')
  }
 
  return (
    <div className='notes-edit-container'>
      <h1>Edit your comment! DO IT!</h1>
      {
        <form className="edit-form" onSubmit={handleSubmit}>
          <label className="edit-label">
            <div>Content:</div>
            <textarea
              className="edit-input"
              placeholder={note.content}
              value={note.content}
              name="content"
              required
              autoFocus
              onChange={handleChange}
              />
          </label>
          <button type='submit' className="basic-button">Save</button>
        </form>
      }
    </div>
  );
}

export default NotesEdit;