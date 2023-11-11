import 'bootstrap/dist/css/bootstrap.min.css';
import ListStateUp from './components/LiftStateUp';
import React from 'react';

function App() {
  function parentAlert(data) {
    console.log("Name is: " + data.name);
    console.log("Age is: " + data.age);
  }

  return (
    <React.Fragment>
      <ListStateUp alert={parentAlert}></ListStateUp>
    </React.Fragment>
  );
}

export default App;
