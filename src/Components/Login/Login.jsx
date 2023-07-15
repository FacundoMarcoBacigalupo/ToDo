import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import "./login.css"



const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [gmail, setGmail] = useState("")

    const { login, uniqueId, formCampsFull } = useContext(AuthContext)


    const handleForm = (event) =>{
        event.preventDefault()
        handleLogin()
    }



    const handleLogin = () =>{
        const objetAuth ={
            id: uniqueId(),
            name,
            password,
            gmail
        }

        if(formCampsFull([name, password, gmail])){
            alert("Please complete all fields")
        }
        else{
            login(objetAuth)
        }
    }




    return (
        <form className='formLogin' onSubmit={handleForm}>
            <h1>Login</h1>

            <label>Name
                <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>

            <label>Password
                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>

            <label>Gmail
                <input type="email" placeholder='Gmail' value={gmail} onChange={(event) => setGmail(event.target.value)} />
            </label>

            <button type="submit">Login</button>

            <div className="social">
                <div className="go"><i className="fab fa-google"></i>Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>Facebook</div>
            </div>
        </form>
    )
}


export default Login