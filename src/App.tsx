import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <span>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse); // 응답값 확인
            const { credential } = credentialResponse || {};  // credential을 안전하게 추출
            if (credential) {
              try {
                const decoded = jwtDecode(credential);  // JWT 디코딩
                console.log(decoded);
              } catch (error) {
                console.log('Invalid token');
              }
            } else {
              console.log('No credential found');
            }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </span>
    </>
  );
}

export default App;
