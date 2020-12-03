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
    const created = await postMaintenance_note(maintenance_note)
    setCreated({ created })
  }
  if (isCreated) {
    return <Redirect to={`motorcycles/${id}/notesdetail`} />
  }

  return (
    <div className="notes-add-container">
      
    </div>
  );
}

export default NotesAdd;