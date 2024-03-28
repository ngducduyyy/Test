import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import ListAnime from './components/ListAnime';
import Navbar from './components/Navbar/Navbar';
import './App.css'
const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListAnime" element={<ListAnime />} />
        </Routes>
    </Router>
  )
}

export default App