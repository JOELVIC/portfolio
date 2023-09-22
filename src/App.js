import logo from './logo.svg';
import './themes.css';
import './App.css';
import * as React from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/homeComponent/home';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
