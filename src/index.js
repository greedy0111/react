import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // 페이지에서 id가 root인것을 찾아서 리액트 <App />을 넣겠다. 의미 root는 퍼블릭 index.html에 보면 있다. 코드센트 박스에는 app.js가 없고 index.js에 app 컴포넌트가 있고 root 엘리먼트에 react앱을 넣어주는 작업도 하나의 파일에 되어있다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
