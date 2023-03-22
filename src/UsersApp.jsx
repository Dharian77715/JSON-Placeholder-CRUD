import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// const init = () => {
//     return JSON.parse(localStorage.setItem('users')) || []
// }
const url = 'https://jsonplaceholder.typicode.com/users'
export const UsersApp = () => {
    
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get(url);
            setUsers(data);
        };
        getUser();
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('users', JSON.stringify( users ) || [])
    // }, [users])




       const deleteUser = async (user) => {
         try {
            setUsers(users.filter(e => e.id !== user.id ))
            await axios.delete(`${url}/${user.id}`)
        } catch (error) {
            console.log(error)
         }
       }


    return (
        <>
            <div className="d-flex justify-content-center mt-2">User's CRUD</div>
            <div className="container">
                <button
                    onClick={() => navigate("/adduser/new")}
                    className="btn btn-primary mb-4">
                    Add user
                </button>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>  <button
                                    onClick={() => navigate(`/adduser/${user.id}`)}
                                    className="btn btn-primary">
                                    Update
                                </button> </td>
                                <td> <button
                                onClick={() => deleteUser(user)}
                                    className="btn btn-danger">
                                    Delete
                                </button> </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default url;