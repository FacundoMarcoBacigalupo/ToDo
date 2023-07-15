import React, { useState, createContext } from 'react'


export const AuthContext = createContext([])


const AuthContextProvider = ({ children }) =>{
    const [user, setUser] = useState([])


    function uniqueId (){
        let uniqueId
        if(user.length === 0){
            uniqueId = 1
        }
        else{
            uniqueId++
        }
        return uniqueId
    }



    function logout (){
        setUser([])
    }



    function login (objetAuth){
        if(loginExits(objetAuth.id)){
            alert("Welcome again")
        }
        else{
            setUser(objetAuth)
            alert("Welcome")
        }
    }



    function loginExits (id){
        return user.some(objAuth => objAuth.id === id)
    }



    function formCampsFull (camps){
        return camps.some(camp => camp === "")
    }



    return (
        <AuthContext.Provider value={{ login, uniqueId, logout, formCampsFull, user }}>
            { children }
        </AuthContext.Provider>
    )
}





export default AuthContextProvider