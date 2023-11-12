import { Button } from 'flowbite-react';
import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Home></Home>
      </>
    );
  };
};

export default App;