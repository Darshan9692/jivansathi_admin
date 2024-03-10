import React, { useContext } from 'react'
import Login from './pages/Login';
import Payment from './pages/Payment';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import Extra from './pages/Extra';
import AuthContext from './pages/AuthContext';

const App = () => {

  const { role } = useContext(AuthContext);
  console.log(role);

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

        {role && role === 'admin' ? (
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