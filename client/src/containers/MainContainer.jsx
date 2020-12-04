// import React from 'react';
// import { useState, useEffect } from 'react'
// import { Switch, Route, useHistory } from 'react-router-dom'

// import AddMc from '../screens/AddMc'
// import Home from '../screens/Home'
// import McNotes from '../screens/McNotes'
// import NotesDetail from '../screens/NotesDetail'
// import { getAllMotorcycles, postMotorcycle } from '../services/motorcycles'
// import { destroyMaintenance_note, getAllMaintenance_notes, postMaintenance_note, putMaintenance_note } from '../services/maintenance_notes'

// function MainContainer(props) {
//   const [motorcycles, setMotorcycles] = useState([])
//   const [maintenance_notes, setMaintenance_notes] = useState([])
//   const history = useHistory()

//   useEffect(() => {
//     const fetchMotorcycles = async () => {
//       const motorcycleData = await getAllMotorcycles()
//       setMotorcycles(motorcycleData)
//     }
//     const fetchMaintenance_notes = async () => {
//       const maintenance_noteData = await getAllMaintenance_notes()
//       setMaintenance_notes(maintenance_noteData)
//     }
//     fetchMotorcycles()
//     fetchMaintenance_notes()
//   }, [])
  
//   const motorcycleHandleCreate = async (motorcycleData) => {
//     const newMotorcycle = await postMotorcycle(motorcycleData)
//     setMotorcycles(prevState => [...prevState, newMotorcycle])
//     history.push('/motorcycles')
//   }
  
//   const maintenance_noteHandleCreate = async (maintenance_notesData) => {
//     const newMaintenance_note = await postMaintenance_note(maintenance_notesData)
//     setMaintenance_notes(prevState => [...prevState, newMaintenance_note])
//     history.push('/maintenance_notes')
//   }

//   const maintenance_notehandleUpdate = async (id, maintenance_noteData) => {
//     const updatedMaintenance_note = await putMaintenance_note(id, maintenance_noteData)
//     setMaintenance_notes(prevState => prevState.map(maintenance_note => {
//       return maintenance_note.id === Number(id) ? updatedMaintenance_note : maintenance_note
//     }))
//     history.push('/maintenance_notes')
//   }

//   const maintenance_noteHandleDelete = async (id) => {
//     await destroyMaintenance_note(id)
//     setMaintenance_notes(prevState => prevState.filter(maintenance_note => maintenance_note.id !== id))
//   }
  
//   return (
//     <Switch>
//       <Route path='/motorcycle_notes'>
//         <McNotes maintenance_notes={maintenance_notes} />
//       </Route>
//       <Route path='/'

//     </Switch>
//   );
// }

// export default MainContainer;

// I need handle creates for both motorcycles and notes and handle updates, delete for just the notes
// multiple handle creates?