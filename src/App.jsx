import React from 'react'
import Login from './pages/Login';
import Payment from './pages/Payment';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import Extra from './pages/Extra';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Login />
            </>
          }
        />

        {localStorage.getItem('role') === 'admin' ? (
          <>
            <Route
              path='/Admin'
              element={<AdminPanel />}
            />
            <Route
              path='/Admin/payment'
              element={<Payment />}
            />
          </>
        ) : <>
          <Route
            path='/Admin'
            element={<Extra />}
          />
          <Route
            path='/Admin/payment'
            element={<Extra />}
          />
        </>}

      </Routes>
    </>
  )
}

export default App