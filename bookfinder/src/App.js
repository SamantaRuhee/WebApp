import React from 'react';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import '../src/styles/App.css'
import { BrowserRouter, Link, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route path = "/" exact = {true} component ={Books}/>
        <Route path = "/bookDetails/:title" exact = {true} component = {BookDetails}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;