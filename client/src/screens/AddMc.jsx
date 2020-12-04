import React, { useState } from 'react';
import './AddMc.css'
import { postMotorcycle } from '../services/motorcycles'
import {useParams, useHistory} from 'react-router-dom'

function AddMc(props) {
  const [motorcycle, setMotorcycle] = useState({
    name: '',
    img_url: '',
  })
  const [isCreated, setCreated] = useState(false)
  console.log(props)
  const { id } = useParams()
  const history = useHistory()

  console.log(id)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMotorcycle({
      ...motorcycle,
      [name]: value,
    })
  }

  console.log(motorcycle)

 const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await postMotorcycle(motorcycle)
    setCreated({ created })
    history.push(`/home`)
  }
  if (isCreated) {
    history.push(`/home`)
  }



  return (
    <div className='add-mc-container'>
      <h2 className="add-moto-title">Add a Motorcycle!</h2>
      <form className="create-mc-form" onSubmit={handleSubmit}>
        <input
          className="add-mc-name"
          placeholder="Motorcycle Name"
          value={motorcycle.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="add-mc-img"
          placeholder="Add an image URL"
          value={motorcycle.img_url}
          name="img_url"
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit" className="basic-button" id="submit-moto">Submit</button>
      </form>
    </div>
  );
}

export default AddMc;