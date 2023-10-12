// creating element

import React from 'react'

// used for making changes to the dom/element
import ReactDOM from 'react-dom/client'
import Master from './master';

// import Footer from './components/Footer'
// import NavBar from './components/NavBar';
// import Header from './components/Header';

// const Header = ()=>{
//   return <div>
//     <h1>Hello world</h1>
//     <h2>its me kingsley</h2>
//   </div>



 const heading=React.createElement(
    'h1',
    null,
    React.createElement('h2',null,'hi'));


ReactDOM.createRoot(document.getElementById('root')).render(  <Master/> );  

  
     
   

