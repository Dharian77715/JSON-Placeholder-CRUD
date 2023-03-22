import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import url from './UsersApp'


// const url = 'https://jsonplaceholder.typicode.com/users'
export const AddUser = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [data, setData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${url}/${id}`)
            setData(data);
        }
        getData();
    }, [])

   const onInputChange = ({target}) => {
    const postClone = { ...data };
    postClone[target.name] = target.value;
    setData(postClone);
    
   }
    
    const onFormSubmit = async (event) => {
       event.preventDefault();
       
       try {
        if (id === 'new') {
            axios.post(url, data)
            return navigate("/")
    
           } else {
            axios.put(url + '/' + id, data)
            return navigate("/")
           }      
       } catch (error) {
        console.log(error)
       }
    }

    return (
      <>
    {/* <div className=" d-flex justify-content-center"> */}
    <form  className="d-flex justify-content-center">
        <input
        className="m-2"
         type="text" 
         placeholder="Name"
         name="Name"
         value={data.name || ''}
        onChange={onInputChange}
       

         />
        <input
        className="m-2"
        placeholder="Email"
        type="Email" 
        name="Email"
         value={data.email || ''}
        onChange={onInputChange}
        />

        <button onClick={onFormSubmit} className="btn btn-primary m-2">{id === 'new' ? 'Post' : 'Update'}</button>
   </form>
   {/* </div> */}
      </>
    )
  }