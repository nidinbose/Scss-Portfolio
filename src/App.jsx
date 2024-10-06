import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Mainpage from './Components/Mainpage'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>

<Route path='/' Component={Mainpage}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App