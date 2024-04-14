// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Math from './file';

// function Title(){

//   return (

//     <div className="container">

//       <p>Hello this is hariom.</p>

//     </div>
//   )
// }

// function Names(){

//   return(

//     <div className="box">
//       <p>Virat Kohli</p>
//       <p>Dhoni</p>
//       <p>Rohit</p>
//     </div>
//   )
// }
import First from './first';
import Second from './second';
import Third from './third';

function App(){

  return (

    <div className="main">

      <First price = {10}/>
      <Second price = {20}/>
      <Third price = {30}/>
      </div>
  )
}

export default App;