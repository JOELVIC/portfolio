import logo from './logo.svg';
import './themes.css';
import './App.css';
import * as React from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/homeComponent/home';
import { Route, Router, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ScrollToTop className="scrollToTopBtn" smooth/>
      
      <Footer />
    </>

  );
}

export default App;
