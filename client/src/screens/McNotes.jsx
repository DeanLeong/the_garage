import React, { useState, useEffect } from 'react';
import './McNotes.css'
import { useParams, Link } from 'react-router-dom'
import { getOneMotorcycle } from "../services/motorcycles"

function McNotes({ motorcycles }) {
  const [motorcycle, setMotorcycle] = useState({})
  //console.log(motorcycles)
  const { id } = useParams()
  //console.log(id)

  // useEffect(() => {
  //   const getData = async () => {
  //     const getMotorcycle = await getOneMotorcycle(id)
  //     setMotorcycle(getMotorcycle)
  //   }
  //   getData()
  //   console.log(motorcycle)
  // }, [id])

  useEffect(() => {
    if (motorcycles.length) {
      const getMotorcycle = motorcycles.find((moto) => moto.id === Number(id))
      setMotorcycle(getMotorcycle)
      console.log(motorcycle)
    }
  }, [id])

  return (
    <div className="notes-container">
      <h3 className='notes-title'>See Notes for: </h3>
          <div key={motorcycle.id} className="note-box">
            <img src={motorcycle.img_url} className="mc-img"/><p>{motorcycle.name}</p>
           { motorcycle.maintenance_notes && motorcycle.maintenance_notes.map(note => (
             <Link key={note.id} to={`/motorcycles/${id}/notesdetail`}  className="note">{note.content}</Link>
            )) }
      </div>
      <Link to={`/motorcycles/${id}/notesdetail/add`}><button className="basic-button">Add Note</button></Link>
    </div>
  );
}

export default McNotes;

//How to get notes to render only for their specific motorcycle?
//Show that MC picture and name