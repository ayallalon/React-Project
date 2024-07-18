import React, { useEffect, useState } from 'react'
import './App.css'
import { getAllUsers, createUser } from './Service/ServiceUser'
import User from './User'
import axios from 'axios'
import AddUser from './AddUser'
export default function MainPage() {

  const [users, setUsers] = useState([])
  const [usersFilter, setUsersFilter] = useState([])
  const [todos, setTodos] = useState([])

  const fetchUsers = async () => {
    const data = await getAllUsers()
    setUsers(data)
    setUsersFilter(data)
    const responseTodos = await getAllTodos()
  }


  const getUserByParams = (value) => {
    const filterUsers = users.filter(user => {
      return user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    })
    console.log(filterUsers)
    return filterUsers
  }

  const addUser = async (user) => {
    const data = await createUser(user)
    console.log(data)
    setUsers([...users, user])
   console.log(users)
  }


  const search = (value) => {
    if (value !== "") {
      const data = getUserByParams(value)
      setUsersFilter(data)
    }
    else {
      setUsersFilter(users)
    }

  }

  //will run only on component load 
  useEffect(() => {

    fetchUsers()
    console.log("success useEEffect users")
  }, [])


  return (
    <div className='home'>
      <div className='main' >
        <span>Search</span>
        <input onChange={e => search(e.target.value)}></input>
        <button >Add</button>

        {
          usersFilter.map((user) => {
            return <User className='user' key={user.id} userData={user} />
          })
        }

      </div>
      <div>
        <AddUser addUser={addUser} />
      </div>
    </div>





  )
}
