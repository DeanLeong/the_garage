import React, { useState, useEffect } from 'react';
import './McNotes.css'
import { useParams, Link } from 'react-router-dom'


function McNotes({ motorcycles }) {
  const [motorcycle, setMotorcycle] = useState({})

  const { id } = useParams()

  useEffect(() => {
    if (motorcycles.length) {
      const getMotorcycle = motorcycles.find((moto) => moto.id === Number(id))
      setMotorcycle(getMotorcycle)
    }
  }, [id, motorcycles])

  return (
    <div className="notes-container">
      <h3 className='notes-title'>See Notes for: </h3>
      <div className="notes-box">
            <img src={motorcycle.img_url} className="mc-img" alt="motorcycle"/><p className="moto-name">{motorcycle.name}</p>
            <div key={motorcycle.id} className="note-box">
           { motorcycle.maintenance_notes && motorcycle.maintenance_notes.map(note => (
             <Link key={note.id} to={`/motorcycles/${id}/notesdetail`}  className="note">{note.content}</Link>
            )) }
      </div>
        <Link to={`/motorcycles/${id}/notesdetail/add`}><button className="basic-button" id="add-note-btn">Add Note</button></Link>
        </div>
    </div>
  );
}

export default McNotes;