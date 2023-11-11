import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/ContactUs';
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import Posts from './pages/Posts';

class App extends React.Component {
  render() {
    return (
      <>
        <div
          className="container App"
        >
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/contact-us" element={<Contact></Contact>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/post/:slug/:id" element={<Posts></Posts>}></Route>
              <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  };
};

export default App;