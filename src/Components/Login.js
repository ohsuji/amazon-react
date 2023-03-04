import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = e => {
    e.preventDefault();

    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          navigate('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="Login">

      <div className="Login-container">
        <div className="Login-signIn">

          <form>
            <h1> 로그인 </h1>

            <h5> 이메일 </h5>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" />

            <h5> 비밀번호 </h5>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" />

            <button onClick={signIn} className="Login-signInButton"> 로그인 하기 </button>
          </form>
        </div>

        <p> 이용 약관에 동의하기 </p>
        
        <button onClick={register} className="Login-registerButton"> 회원가입 </button>
      </div>

    </div>
  )
}

export default Login