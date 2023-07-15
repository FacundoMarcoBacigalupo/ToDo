import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const RoutePublic = ({
    user,
    reditecPath = '/',
    children
}) => {

    if(user){
        return <Navigate to={reditecPath='/tasks'} replace />
    }

    return children ? children : <Outlet />
}



export default RoutePublic