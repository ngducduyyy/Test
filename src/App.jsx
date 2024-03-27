import React from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './components/Home';
import ListAnime from './components/ListAnime';
import Navbar from './components/Navbar/Navbar';
import Detail from './components/Detail';
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListAnime" element={<ListAnime />} />
        <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App