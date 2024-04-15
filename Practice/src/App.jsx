// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


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
// import First from './first';
// import Second from './second';
// import Third from './third';
import './App.css';
import Student from './students';
import StudentInfo from './StudentInfo';
import Message from './messageBox';

function App(){

  return (

    // <div className="main">

    //   <First price = "hariom"/>
    //   <Second age = {20}/>
    //   <Third job = "Software engineer"/>
    //   </div>
    // <div className="stINfo">
    //   {/* <Student name="hariom" age = "20" rollNo = {120}/>
    //   <Student name = "Gaurisha" age= "19" rollNo = {121}/>
    //   <Student name = "Shreesha" age = "23" rollNo={122}/> */}
    //   <StudentInfo/>
    // </div>
    <Message userName = "hariom" textColor="black"/>

  )
}

export default App;