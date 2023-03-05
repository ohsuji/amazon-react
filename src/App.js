import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { useStateValue } from './StateProvider';

function App() {

  const [ {}, dispatch ] = useStateValue();

  useEffect(() => {
    getAuth.onAuthStateChanged( authUser => {
      if (authUser) {
        dispatch ({
          type: 'SET_USER',
          user : authUser,
        })
      } else {
        dispatch ({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="Checkout" element={<Checkout/>} />

        <Route path="Login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
