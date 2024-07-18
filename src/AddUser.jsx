import React, { useState } from 'react'
import './App.css'

export default function AddUser(props) {
    const [user, setUser] = useState({ name: "", email: "" })
    return (
        <div className="user-container-add"  >
            <div className="user-info">
                <label>Name:</label>
                <input onChange={e => setUser({ ...user, name: e.target.value })} type='text' />
            </div>
            <div className="user-info">
                <label>Email:</label>
                <input onChange={e => setUser({ ...user, email: e.target.value })} type='text' />
            </div>


            <button style={{ margin: `10px` }}>Cancel</button>
            <button onClick={() => props.addUser(user)}>Add</button>
        </div>
    )
}
