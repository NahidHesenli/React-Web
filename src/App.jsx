import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import CharacterDetails from './Pages/CharacterDetail/CharacterDetails'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import './index.css'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
      </Route>
      <Route path='/characters/:id' element={<CharacterDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App