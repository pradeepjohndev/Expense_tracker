import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
