import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';

function App() {

  const [ {}, dispatch ] = useStateValue();
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
      console.log('현재 사용자는' + user + '입니다' );

      if (user) { // 로그인 상태
        dispatch ({
          type: 'SET_USER',
          user : user,
        })
      } else { // 로그아웃 했을 때
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
