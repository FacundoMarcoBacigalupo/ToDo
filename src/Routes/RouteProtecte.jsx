import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const RouteProtecte = ({
    user,
    reditecPath = '/login',
    children
}) => {


    if(!user){
        return <Navigate to={reditecPath} />
    }

    return children ? children : <Outlet />
}



export default RouteProtecte