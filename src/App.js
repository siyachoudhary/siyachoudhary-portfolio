import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/nav';
import MyFooter from "./components/footer";

import './App.css';
import React from 'react'
import HomePage from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Art from "./pages/artPortfolio";
import Contact from "./pages/contact";
import Tech from "./pages/techPortfolio";

function App() {
    let Component;
    switch(window.location.pathname){
        case "/":
            Component = HomePage
            break
        case "/aboutMe":
            Component = AboutMe
            break
        case "/artPortfolio":
            Component = Art
            break
        case "/techPortfolio":
            Component = Tech
            break
        case "/contact":
            Component = Contact
            break
    }
  return(
      <>
              <MyNav/>
              <Component/>
              <MyFooter/>
      </>
  )
}

export default App;
