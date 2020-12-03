import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css';
import Layout from './layouts/Layout'
import Login from './screens/Login'
import Register from './screens/Register'
//import AddMc from './screens/AddMc'
import Home from './screens/Home'
import McNotes from './screens/McNotes'
import NotesDetail from './screens/NotesDetail'

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { getAllMotorcycles, postMotorcycle } from './services/motorcycles'
import { destroyMaintenance_note, getAllMaintenance_notes, postMaintenance_note, putMaintenance_note } from './services/maintenance_notes'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [motorcycles, setMotorcycles] = useState([])
  const [maintenance_notes, setMaintenance_notes] = useState([])
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify()
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  useEffect(() => {
    const fetchMotorcycles = async () => {
      const motorcycleData = await getAllMotorcycles(currentUser)
      setMotorcycles(motorcycleData)
    }
    const fetchMaintenance_notes = async () => {
      const maintenance_noteData = await getAllMaintenance_notes(motorcycles.id)
      setMaintenance_notes(maintenance_noteData)
    }
      fetchMotorcycles()
    fetchMaintenance_notes()
  }, [])
  
  const motorcycleHandleCreate = async (motorcycleData) => {
    const newMotorcycle = await postMotorcycle(motorcycleData)
    setMotorcycles(prevState => [...prevState, newMotorcycle])
    history.push('/motorcycles')
  }
  
  const maintenance_noteHandleCreate = async (maintenance_notesData) => {
    const newMaintenance_note = await postMaintenance_note(maintenance_notesData)
    setMaintenance_notes(prevState => [...prevState, newMaintenance_note])
    history.push('/maintenance_notes')
  }

  const maintenance_notehandleUpdate = async (id, maintenance_noteData) => {
    const updatedMaintenance_note = await putMaintenance_note(id, maintenance_noteData)
    setMaintenance_notes(prevState => prevState.map(maintenance_note => {
      return maintenance_note.id === Number(id) ? updatedMaintenance_note : maintenance_note
    }))
    history.push('/maintenance_notes')
  }

  const maintenance_noteHandleDelete = async (id) => {
    await destroyMaintenance_note(id)
    setMaintenance_notes(prevState => prevState.filter(maintenance_note => maintenance_note.id !== id))
  }

  //console.log(currentUser)
  //console.log(motorcycles)

  return (
    <div className="app">
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <Switch>
          <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>

        <Route exact path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>

        <Route exact path='/home'>
            <Home currentUser={currentUser} handleCreate={motorcycleHandleCreate} motorcycles={motorcycles}/>
        </Route>

       <Route exact path={`/motorcycles/:id`}>
            <McNotes currentUser={currentUser} motorcycles={motorcycles} handleCreate={maintenance_noteHandleCreate} maintenance_notes={maintenance_notes}/> 
       </Route>
      
      <Route exact path={`/motorcycles/:id/notesdetail`} component={NotesDetail}>
            <NotesDetail currentUser={currentUser} motorcycles={motorcycles} maintenance_notes={maintenance_notes} setMaintenance_notes={setMaintenance_notes} maintenance_notehandleUpdate={maintenance_notehandleUpdate} maintenance_noteHandleDelete={maintenance_noteHandleDelete} maintenance_noteHandleCreate={maintenance_noteHandleCreate}/>
      </Route> 
        </Switch>
    </Layout>
     </div>
  );
}

export default App;
