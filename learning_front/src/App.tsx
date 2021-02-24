import React from 'react';
import './App.css';
import People from "./main/People";
import PersonCreate from "./main/PersonCreate"
import PersonEdit from "./main/PersonEdit"
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

          <BrowserRouter>
            <Route path='/' component={People} exact />
            <Route path='/person/create' component={PersonCreate} exact />
            <Route path='/person/:id/edit' component={PersonEdit} exact />
          </BrowserRouter>
    </div>
  );
}

export default App;
