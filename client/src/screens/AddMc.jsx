import React, { useState } from 'react';
import './AddMc.css'
import { postMotorcycle } from '../services/motorcycles'
import {Link, Redirect, useParams, useHistory} from 'react-router-dom'

function AddMc(props) {
  const [motorcycle, setMotorcycle] = useState({
    name: "",
    img_url: ""
  })
  const [isCreated, setCreated] = useState(false)
  console.log(props)
  const { motorcycle_id, user_id } = useParams()

  const handleChange = (event) => {
    const { name, value } = event.target
    setMotorcycle({
      ...motorcycle,
      [name]: value
    })
  }

 const  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await postMotorcycle(user_id, motorcycle_id)
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
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="add-mc-img"
      </form>
    </div>
  );
}

export default AddMc;