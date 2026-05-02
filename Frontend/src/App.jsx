import { BrowserRouter, Routes, Route, useNavigate, Navigate, Router } from "react-router-dom";
import React from 'react';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/dashboard/Home';
import Expenses from './pages/dashboard/Expense';
import Income from './pages/dashboard/Income';
import Transaction from './pages/dashboard/Transaction';
import Analytics from './pages/dashboard/Analytics';
import Not_found from "./pages/dashboard/Not_found";
import UserContextProvider, { UserContext } from "./context/userContext";

function App() {
  const Navigate = useNavigate();
  return (
    <>
      <UserContextProvider>
        <div>
          <Routes>
            <Route path='/' element={<root />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign" exact element={<Signup />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Expense" exact element={<Expenses />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/transaction" exact element={<Transaction />} />
            <Route path="/analytics" exact element={<analytics />} />

            <Route path="*" element={<Not_found />} />
          </Routes>
        </div>
      </UserContextProvider>
    </>
  )
}

const Root = () => {
  const isauth = !!localStorage.getItem('token');

  return isauth ? (<Navigate to="dashboard" />) : (<Navigate to="Login" />)
}
export default App;
