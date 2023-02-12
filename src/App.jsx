import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import UserList from './components/UserList'

function App() {

  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const getAllUsers = () => {
    const url = `https://users-crud.academlo.tech/users/`

    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createNewUser = data => {
    const url = `https://users-crud.academlo.tech/users/`

    axios.post(url, data)
      .then(res => {
        getAllUsers()
        setIsOpen(false)
      })
      .catch(err => console.log(err))
  }

  const deleteUser = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`

    axios.delete(url)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateDataUser = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`

    axios.put(url, data)
      .then(res => {
        getAllUsers()
        setUserUpdate()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <Form
        createNewUser={createNewUser}
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        updateDataUser={updateDataUser}
      />

      <header>
        <h1>Usuarios</h1>
        <button onClick={() => setIsOpen(true)} ><i className='bx bx-plus'></i> Create new user</button>
      </header>

      <div className="box__users">

        {

          isEmpty ? <h1>Hola</h1>
            : users?.map(user => (
              <UserList
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUserUpdate={setUserUpdate}
                setIsOpen={setIsOpen}
              />
            ))
        }
      </div>
    </div>
  )
}

export default App
