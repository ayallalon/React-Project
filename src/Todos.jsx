import React, { useEffect, useState } from 'react'
import { getAllTodos } from './Service/ServiceTodos'
export default function Todos() {
    const [todos, setTodos] = useState([])


    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getAllTodos()
            setTodos(data)
        }

        fetchTodos()
        console.log("success useEffect Todos")

    }, [])


    return (

        {
           
        }
    

  )
}
