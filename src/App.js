import React, { useState, useEffect } from "react";
import {Route, Link, Switch } from 'react-router-dom';
import './index.css'
import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm'



const App = () => {
  return (
    <div>
      <div className='header-nav'>
      <h1 class="lambdaEats">Lambda Eats</h1>
          <nav className='nav-bar'>
            <button>
              <Link to='/' style={{textDecoration: 'none',color:'black'}}>Home</Link>
            </button>
            <button> 
              <Link to='/'style={{textDecoration: 'none',color:'black'}}>Help</Link> 
            </button>
            &nbsp;&nbsp;
          </nav>
          
      </div>
      <div className='image-container'>
          <section className="Hero-statement">
                    <h1>Your favorite food, delivered while coding</h1>
                    <button>Pizza?</button>
          </section>
      </div>
      <Switch>
          <Route path='/pizza'>
            <PizzaForm/>
          </Route>
          <Route path='/'> 
            <Home/>
          </Route>
      </Switch>
      
    </div>
  );
};
export default App;
