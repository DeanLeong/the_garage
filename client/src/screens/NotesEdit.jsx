import React, { useEffect, useState } from 'react';
import './NotesEdit.css'
import {putMaintenance_note } from '../services/maintenance_notes';
import {useParams, useHistory} from 'react-router-dom'

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

  const sendRefresh = () => {
    history.push(`/motorcycles/${motorcycle_id}/notesdetail`)
  }

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNote = props.maintenance_notes.find((note) => note.id === Number(id))
      setNote(getNote)
      setLoaded(true)
    }
  }, [id])


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
    sendRefresh()
  }

  // if (isUpdated) {
  //   history.push(`/motorcycles/${motorcycle_id}/notesdetail`)
  // }

  // const maintenance_notehandleUpdate = async (id, maintenance_noteData) => {
  //   const updatedMaintenance_note = await putMaintenance_note(id, maintenance_noteData)
  //   setMaintenance_notes(prevState => prevState.map(maintenance_note => {
  //     return maintenance_note.id === Number(id) ? updatedMaintenance_note : maintenance_note
  //   }))
  //   history.push('/maintenance_notes')
  // }
 
  return (
    <div className='notes-edit-container'>
      <h2 className="edit-comment-title">Edit your comment!</h2>
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