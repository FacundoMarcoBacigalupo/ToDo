import React, { useContext } from 'react'
import TaskListContainer from '../Components/ComponentsTaks/TaskListContainer/TaskListContainer'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import RouteProtecte from './RouteProtecte'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext'
import { Routes, Route, BrowserRouter } from 'react-router-dom'



const Rutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route element={<RouteProtecte user={user} />} >
                        <Route path='/tasks' element={<TaskListContainer />} />
                    </Route>

                    <Route path='/login' element={<Login />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default Rutes