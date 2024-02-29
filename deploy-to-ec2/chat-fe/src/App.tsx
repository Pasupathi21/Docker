
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'

import ListUsers from './pages/users/index'
import AddEitUser from './pages/users/add-edit'


function App() {


  return (
    <>
      <main>
        <Routes>
          <Route element={ <Home /> } path="/" />
          <Route element={<ListUsers /> } path="/users-list"/>
          <Route element={<AddEitUser />} path='/add-edit-user' />
          <Route element={<AddEitUser />} path='/add-edit-user/:id' />
        </Routes>
      </main>
    </>
  )
}

export default App
