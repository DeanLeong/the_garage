import React, { useState } from 'react';
import './AddMc.css'
import { postMotorcycle } from '../services/motorcycles'
import {Link, Redirect, useParams, useHistory} from 'react-router-dom'

function AddMc(props) {
  const [motorcycle, setMotorcycle] = useState({
    name: '',
    img_url: '',
  })
  const [isCreated, setCreated] = useState(false)
  console.log(props)
  const {id, user_id } = useParams()

  console.log(id)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMotorcycle({
      ...motorcycle,
      [name]: value,
    })
  }

  console.log(motorcycle)

 const  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await postMotorcycle(motorcycle)
    setCreated({ created })
  }
  if (isCreated) {
    return <Redirect to={'/home'} />
  }



  return (
    <div className='add-mc-container'>
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
          placeholder="Add an image URL for your Motorcycle"
          value={motorcycle.img_url}
          name="img_url"
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit" className="basic-button">Submit</button>
      </form>
    </div>
  );
}

export default AddMc;