import logo from './logo.svg';
import './App.css';
import CatBreedList from './Components/BreedList';
import CatBreedDetails from './Components/CatBreedDetails'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (

  <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<CatBreedList/>} />
        <Route path="/catlist/:id" element={<CatBreedDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import React from 'react';
//  import BreedList from "./Components/BreedList";
// import CatBreedDetails from "./Components/CatBreedDetails"
// import { BrowserRouter as Router, Routes,  } from "react-router-dom";

// function App() {
//   return (
//     <Router>
    
//       <Routes path="/" exact component={BreedList} />
//       <Routes path="/breeds/:id" component={CatBreedDetails} />
    
//   </Router>
//   )
// }

// export default App
