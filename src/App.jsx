import React from 'react'
import Login from './pages/Login';
import Payment from './pages/Payment';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path='/admin'
          element={
            <>
              <AdminPanel />
            </>
          }
        />

        <Route
          path='/admin/payment'
          element={
            <>
              <Payment />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App