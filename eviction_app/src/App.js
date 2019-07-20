import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
        </div>
    </BrowserRouter>
  );
}

export default App;
