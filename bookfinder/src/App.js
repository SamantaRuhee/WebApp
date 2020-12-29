import React from 'react';
import Books from './components/Books';
import { BrowserRouter, Link, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route path = "/" exact = {true} component ={Books}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;