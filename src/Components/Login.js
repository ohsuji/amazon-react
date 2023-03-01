import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className="Login">

      <div className="Login-container">
        <h1> 로그인 </h1>

        <form>
          <h5> 이메일 </h5>
          <input type="text" />
          <h5> 비밀번호 </h5>
          <input type="password" />

          <button className="Login-signInButton"> 로그인 하기 </button>
        </form>

        <p> 이용 약관에 동의하기 </p>
        
        <button className="Login-registerButton"> 회원가입 </button>
      </div>

    </div>
  )
}

export default Login