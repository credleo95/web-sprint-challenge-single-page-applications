import React, { useState, useEffect } from "react";
import {Route, Link, Switch } from 'react-router-dom';
import './index.css'
import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm'


const defaultForm = {
  size:"",
  sauce:"",
  toppings: "",
  substitute:"",
  pepperoni: false, 
  sausage: false, 
  tofu: false,
  mushrooms: false,
  peppers: false,
  pineapple: false, 
  chicken: false,
  threeCheese: false, 
  bacon: false,
  artichoke: false,
  garlic: false,
  instructions:""
}


const App = () => {
const [form, setForm] = useState(defaultForm)
const [orders, setOrders]=useState([])

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
      <Switch>
           <Route exact path='/'> 
            <Home/>
          </Route>
          <Route path='/pizza'>
            <PizzaForm/>
          </Route>
      </Switch>
      
    </div>
  );
};
export default App;
