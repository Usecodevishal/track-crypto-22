// import logo from './logo.svg';
import  { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Footer from './components/Common/Footer';
//import Header from './components/Common/Header';
//import MainComponent from './components/LandingPage/Main Component';
import HomePage from './pages/Home';
//import Dashboard from './pages/Dashboard';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import WishListPage from './pages/WishList';

function App() {
  

  useEffect(() => {
    var cursor;
    var cursorPointer;
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "2rem"),
        (cursorPointer.style.width = "2rem")
      );
    });
  }, []);
  return (
    <div className="App">
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/wishlist" element={<WishListPage/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;



