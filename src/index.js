import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify';


import Routes from './routes/routes';
import GlobalStyles from './styles/globalStyles'
import { UserProvider } from './hooks/UserContext'



ReactDOM.render(
  <>
  <UserProvider>
    <Routes />
  </UserProvider>
    <ToastContainer/>
    <GlobalStyles />
  </>,

  document.getElementById('root')
)
