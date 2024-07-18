import axios from "axios";


// user data json
const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlTodos = 'https://jsonplaceholder.typicode.com/todos'

//GET
const getAllUsers = async () => {
    const { data } = await axios.get(urlUsers)
    return data;
}

const getAllTodos = async () =>{
    const {data} = await axios.get(urlTodos)
    return data
}

//PUT
const updateUser = async (id, user) => {
    const { data } = await axios.put(`${urlUsers}/${id}`, user)
    return data
}

//POST
const createUser = async (id, user) => {
    const { data } = await axios.post(urlUsers, user)
    return data
}

//DELETE
const deleteUser = async (id) => {
    const { data } = await axios.delete(`${urlUsers}/${id}`)
    return data
}
export { getAllUsers, updateUser, deleteUser, createUser ,getAllTodos }