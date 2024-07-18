import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getTodoById } from './Service/ServiceTodos'
import { updateUser, deleteUser } from './Service/ServiceUser'
export default function User(props) { //key = userData

    const [todo, setTodo] = useState()
    const [isHidden, setIsHidden] = useState(false);

    const updateUsers = async () => {
        const data = await updateUser(props.userData.id, props.userData)
        console.log(data)
        console.log("updated user " + props.userData.id)
    }

    const deleteUsers = async () => {
        const data = await deleteUser(props.userData.id)
        console.log(data)
        console.log("deleted user " + props.userData.id)
    }

    useEffect(() => {

        const getTodos = async () => {
            const data = await getTodoById(props.userData.id)
            setTodo(data)
        }

        getTodos()
        console.log("success useEEffect user")
    }, [])



    return (


        <div className="user-container" style={{ border: `1px solid ${todo && todo.completed ? 'green' : 'red'}` }} >
            <div className="user-info">
                <label>ID:</label>
                {props.userData.id}
            </div>
            <div className="user-info">
                <label>Name:</label>
                <input type='text' defaultValue={props.userData.name} />
            </div>
            <div className="user-info">
                <label>Email:</label>
                <input type='text' defaultValue={props.userData.email} />
            </div>

            {isHidden && (
                <div className='moreDetail'>
                    <label>Street</label>
                    <input type='text' defaultValue={props.userData.address.street} />
                    <label>City</label>
                    <input type='text' defaultValue={props.userData.address.city} />
                    <label>Zip Code</label>
                    <input type='text' defaultValue={props.userData.address.zipcode} />
                </div>
            )}
            <div className='user-info'>
                <button onMouseOver={e => setIsHidden(true)} onClick={e => setIsHidden(false)}>Other Data</button>
                <button onClick={updateUsers}>Update</button>
                <button onClick={deleteUsers}>Delete</button>
            </div>
        </div>
    )
}
