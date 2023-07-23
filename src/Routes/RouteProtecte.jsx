import { Navigate, Outlet } from 'react-router-dom'

export const RouteProtecte = ({ user, children, reditecPath = '/login' }) => {
    if(!user){
        return <Navigate to={reditecPath} replace />
    }

    return children ? children : <Outlet />
}