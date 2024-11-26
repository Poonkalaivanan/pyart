import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React , { lazy, Suspense } from 'react';
import { CardHeader } from '@mui/material';
import  ResponsiveAppBar from './components/header';

const Home = lazy(() => import( './components/home'));
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Suspense fallback={<>...</>}><Home/></Suspense>} />
        </Routes>
      </BrowserRouter>
      <div class="footer">
        <span>Artist: </span>
        <a>Shanmuga Priya</a>
        <span>Instagram: </span>
        <a>@pyaartgallery</a>
        <span>Youtube:</span>
        <a>@PYAARTGALLERY</a>
        <span>Mail: </span>
        <a href="mailto:pyaartgallery@gmail.com">pyaartgallery@gmail.com</a>
        <span>Order Online: </span>
        <a href="https://www.amazon.com" target="_blank">Amazon</a>
        <span>Contact: </span>
        <a href="tel:+91-6383434347">+91-6383434347</a>
    </div>
    </div>
  );
}

export default App;
