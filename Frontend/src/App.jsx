import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/dashboard/Home';
import Expenses from './pages/dashboard/Expense';
import Income from './pages/dashboard/Income';
import Transaction from './pages/dashboard/Transaction';
import Analytics from './pages/dashboard/Analytics';
import Not_found from "./pages/dashboard/Not_found";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Expense" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/analytics" element={<Analytics />} />

            <Route path="*" element={<Not_found />} />
          </Routes>
        </div>
      </UserContextProvider>
    </>
  )
}

const Root = () => {
  const isauth = !!localStorage.getItem('token');

  return isauth ? (<Navigate to="/home" />) : (<Navigate to="/login" />)
}
export default App;
