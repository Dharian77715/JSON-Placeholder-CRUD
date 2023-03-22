import { Navigate, Route, Routes } from "react-router-dom"
import { AddUser } from "./AddUser"
import { UsersApp } from "./UsersApp"


export const MainApp = () => {
  return (
   <>
    {/* <h1>MainApp</h1> */}
    <hr />

    <Routes>
        <Route path="/" element={ <UsersApp/> }/>
        <Route path="/adduser/:id" element={ <AddUser/> }/>

        <Route path="/*" element={ <Navigate to="/" /> }/>
    </Routes>
         
   </>
   
  )
}
