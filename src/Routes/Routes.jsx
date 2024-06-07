import TaskListContainer from '../Components/ComponentsTaks/TaskListContainer/TaskListContainer.jsx'
import Home from '../Components/Home/Home.jsx'
import NavBar from '../Components/NavBar/NavBar.jsx'
import Footer from '../Components/Footer/Footer.jsx';
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