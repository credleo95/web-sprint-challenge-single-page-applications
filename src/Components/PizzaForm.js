import React from 'react';
import axios from 'axios'; 




export default function PizzaForm({form, setForm, orders, setOrders, defaultForm, disabled}){
   
   const submit = event =>{
       event.preventDefault()
       const newOrder ={
             size: form.size.trim(),
            sauce: form.sauce.trim(),
            toppings: ["pepperoni", "sausage", "tofu", "mushrooms", "peppers", "pineapple", "chicken", "threeCheese", "bacon", "artichoke", "garlic"].filter(topping => !!form[topping]),
            substitute:form.substitute,
            instructions:form.instructions,
            name:form.name.trim()
          }
          axios.post('https://reqres.in/api/users', newOrder)
          .then((response) =>{
              console.log(response.data)
              setOrders(...orders,response.data)
          })
          .catch((error) => {
              console.log(error)
          })
          setForm(defaultForm)
       }
   
   const onChange = event => {
       const{name, value, type, checked } = event.target 
       const toppingValue = type === "checkbox" ? checked : value
       setForm({...form,[name]:toppingValue})
   }
   
   
    return(
<div>
   <form onSubmit={submit}>
        <h2>Build Your Own Pizza</h2>
        <label> Name &nbsp;&nbsp;
        <input type="text"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Enter your name"/>
        </label>

        <h4>Choice of Size</h4>
        <p>Required</p>
        <label>
             <select 
             name="size"
             value={form.size} 
             onChange={onChange}
             >
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xtra-large">Extra Large</option>
            </select>
        </label>
        <h4>Choice of Sauce</h4>
        <p>Required</p>
        <div className="sauce-container">
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="original-red"
                    onChange={onChange}
                    checked={form.sauce ==="original-red"}/>
                &nbsp;&nbsp; Original Red
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="garlic-ranch"
                    onChange={onChange}
                    checked={form.sauce ==="garlic-ranch"}/>
                &nbsp;&nbsp; Garlic Ranch
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="bbq"
                    onChange={onChange}
                    checked={form.sauce ==="bbq"}/>
                &nbsp;&nbsp; BBQ Sauce
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="spinach-alfredo"
                    onChange={onChange}
                    checked={form.sauce ==="spinach-alfredo"}/>
                &nbsp;&nbsp; Spinach Alfredo
                </label>
        </div>
        <h4>Add Toppings</h4>
        <p>Choose up to 6</p>
        <div className="toppings-container">
                <label>
                    <input 
                    name="pepperoni"
                    type="checkbox"
                    checked={form.pepperoni}
                    onChange={onChange}/>
                    &nbsp;&nbsp; Pepperoni
                </label>
                <label>
                    <input 
                    name="sausage"
                    type="checkbox"
                    checked={form.sausage}
                    onChange={onChange}/>
                    &nbsp;&nbsp; Italian Sausage
                </label>
                <label>
                    <input 
                    name="tofu"
                    type="checkbox"
                    checked={form.tofu}
                    onChange={onChange}/>
                &nbsp;&nbsp; Tofu 
                </label>
                <label>
                    <input 
                    name="mushrooms"
                    type="checkbox"
                    checked={form.mushrooms}
                    onChange={onChange}/>
                &nbsp;&nbsp; Mushrooms
                </label>
                <label>
                    <input 
                    name="peppers"
                    type="checkbox"
                    checked={form.peppers}
                    onChange={onChange}/>
                &nbsp;&nbsp; Green Peppers
                </label> <label>
                    <input 
                    name="pineapple"
                    type="checkbox"
                    checked={form.pineapple}
                    onChange={onChange}/>
                &nbsp;&nbsp; Pineapple
                </label>
                <label>
                    <input 
                    name="chicken"
                    type="checkbox"
                    checked={form.chicken}
                    onChange={onChange}/>
                &nbsp;&nbsp; Grilled Chicken
                </label>
                <label>
                    <input 
                    name="threeCheese"
                    type="checkbox"
                    checked={form.threeCheese}
                    onChange={onChange}/>
                &nbsp;&nbsp; Three Cheese
                </label>
                <label>
                    <input 
                    name="bacon"
                    type="checkbox"
                    checked={form.bacon}
                    onChange={onChange}/>
                &nbsp;&nbsp; Signature Cured Bacon
                </label>
                <label>
                    <input 
                    name="artichoke"
                    type="checkbox"
                    checked={form.artichoke}
                    onChange={onChange}/>
                &nbsp;&nbsp; Artichoke Hearts
                </label>
                <label>
                    <input 
                    name="garlic"
                    type="checkbox"
                    checked={form.garlic}
                    onChange={onChange}/>
                &nbsp;&nbsp; Roasted Garlic
                </label>
        </div>
        <h4>Choice of Substitute</h4>
        <p>Choose up to 1</p>
        <label> 
            <input 
            name="substitute"
            type="checkbox"
            checked={form.substitute}
            onChange={onChange}/>
            &nbsp;&nbsp; Gluten Free Curst (+ $1.00)
        </label>
        <h4>Special Instructions</h4>
        <label>
            <input 
            type="text"
            name="instructions"
            value={form.instructions}
            onChange={onChange}
            placeholder="Anything else you'd like to add?"
            />
        </label>
        <br/>
         <button disabled={disabled}> Add to Order </button> 
   </form>
       
</div>
    )
}