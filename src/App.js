import React from 'react';
import Routes from './Routes/Routes';
import AuthContextProvider from './Context/AuthContext';


function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}

export default App;