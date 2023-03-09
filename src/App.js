import React from 'react';
import Login from './components/Login';
import  Alert from './components/Alert';
import {useState} from 'react';

function App() {
  const [alert, setAlert] = useState({
    mensaje : "",
    color : ""
  });
  return (
    <>
        <h1>Estado de los componentes y eventos</h1>
        <Login setAlert={setAlert}/>

        {alert.mensaje !== "" ? <Alert color={alert.color}> {alert.mensaje} </Alert> : null}
    </>
  );
}

export default App;

