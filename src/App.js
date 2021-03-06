import React, { useState, useEffect } from "react";
import {Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import Schema from './Components/Schema'
import './index.css'
import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm'

// empty form object
const defaultForm = {
  size:"",
  sauce:"",
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
  substitute:false,
  instructions:"",
  name:""
}

// errors Object
const orderErrors ={
  name:"",
  size: "",
  sauce:"",
  pepperoni: "",
  sausage: "",
  tofu: "",
  mushrooms: "",
  peppers: "",
  pineapple: "", 
  chicken: "",
  threeCheese: "", 
  bacon: "",
  artichoke: "",
  garlic: "",
  substitute:"",
  instructions:""
}


const App = () => {
  // Slices of State
const [form, setForm] = useState(defaultForm)  // Form State
const [orders, setOrders]=useState([]) // State for Orders(Array of values)
const [disabled, setDisabled]=useState(true)  // Disable attribute for validation
const [errors, setErrors] = useState(orderErrors) // Error Validation State

// Error Validation via yup schema
const checkFormErrors = (name, value) => {
  yup.reach(Schema, name).validate(value)
  .then(() => setErrors({...errors, [name]:''}))
  .catch((error) => setErrors({...errors,[name]: error.errors[0]}))
}
useEffect(()=>{
  Schema.isValid(form).then(valid => setDisabled(valid))
},[form])

  return (
    <div>
      <div className='header-nav'>
      <h1 className="lambdaEats">Lambda Eats</h1>
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
            <PizzaForm 
            form={form} 
            setForm={setForm} 
            orders={orders} 
            setOrders={setOrders} 
            defaultForm={defaultForm} 
            disabled={disabled} 
            checkOrderErrors={checkFormErrors}
            errors={errors}/>
          </Route>
      </Switch>
      
    </div>
  );
};
export default App;
