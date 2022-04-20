import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hey bro!', likesCount: 12},
    {id: 2, message: 'It is my first post! How are you?', likeCount: 21},
    {id: 2, message: 'It is my first post! How are you?', likeCount: 21},
  ]

  let dialogsData = [
    {id: 1, name: 'Costya'},
    {id: 2, name: 'Nadya'},
    {id: 3, name: 'Petr'},
    {id: 4, name: 'Julia'},
    {id: 5, name: 'Ivan'},
  ]  

  let messageData = [
    {id: 1, message: 'hi'},
    {id: 1, message: 'how r u'},
    {id: 1, message: 'bye'},
  ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts={posts} dialogsData={dialogsData} messageData={messageData}/>
);



reportWebVitals();
