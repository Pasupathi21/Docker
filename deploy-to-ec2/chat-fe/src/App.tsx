
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'

import ListUsers from './pages/users/index'
import AddEitUser from './pages/users/add-edit'

import ChatLogin from './pages/chat/chatlogin'
import Chat from './pages/chat/chat'


function App() {


  return (
    <>
      <main>
        <Routes>
          <Route element={ <Home /> } path="/" />
          <Route element={<ListUsers /> } path="/users-list"/>
          <Route element={<AddEitUser />} path='/add-edit-user' />
          <Route element={<AddEitUser />} path='/add-edit-user/:id' />

          <Route element={<ChatLogin /> } path="/chat-login" />
          <Route element={<Chat /> } path="/chat-home" />
        </Routes>
      </main>
    </>
  )
}

export default App
