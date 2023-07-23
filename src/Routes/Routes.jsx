import TaskListContainer from '../Components/ComponentsTaks/TaskListContainer/TaskListContainer'
import Home from '../Components/Home/Home'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


const Rutes = () => {

    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/tasks' element={<TaskListContainer />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default Rutes