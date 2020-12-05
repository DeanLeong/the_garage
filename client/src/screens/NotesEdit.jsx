import React, { useEffect, useState } from 'react';
import './NotesEdit.css'
import {useParams, useHistory} from 'react-router-dom'

function NotesEdit(props) {
  console.log(props)
  const [note, setNote] = useState({})
  const [isLoaded, setLoaded] = useState(null)
  const { id, motorcycle_id } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (props.maintenance_notes.length) {
      const getNote = props.maintenance_notes?.find((note) => note.id === Number(id))
      setNote(getNote)
      setLoaded(true)
    }
  }, [id, props.maintenance_notes])


  const handleChange = (event) => {
    const { name, value } = event.target
    setNote({
      ...note,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.maintenance_noteHandleUpdate(id, note)
    history.push(`/motorcycles/${motorcycle_id}/notesdetail`)
  }
 
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