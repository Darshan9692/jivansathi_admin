import React, { useEffect, useState } from 'react'
import Login from './pages/Login';
import Payment from './pages/Payment';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import Extra from './pages/Extra';

const App = () => {

  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [])

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

        {role === 'admin' ? (
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