import React from 'react';
import axios from 'axios'; 




export default function PizzaForm(){
   
   
   
   
    return(
<div>
   <form>
        <h2>Build Your Own Pizza</h2>
        <h4>Choice of Size</h4>
        <p>Required</p>
        <label>
             <select name="size">{/*value={form.size} > */}
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
                    value="original-red"/>
                &nbsp;&nbsp; Original Red
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="garlic-ranch"/>
                &nbsp;&nbsp; Garlic Ranch
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="bbq"/>
                &nbsp;&nbsp; BBQ Sauce
                </label>
                <label> 
                    <input 
                    name="sauce"
                    type="radio"
                    value="spinach-alfredo"/>
                &nbsp;&nbsp; Spinach Alfredo
                </label>
        </div>
        <h4>Add Toppings</h4>
        <p>Choose up to 6</p>
        <div className="toppings-container">
                <label>
                    <input 
                    name="pepperoni"
                    type="checkbox"/>
                    &nbsp;&nbsp; Pepperoni
                </label>
                <label>
                    <input 
                    name="sausage"
                    type="checkbox"/>
                    &nbsp;&nbsp; Italian Sausage
                </label>
                <label>
                    <input 
                    name="tofu"
                    type="checkbox"/>
                &nbsp;&nbsp; Tofu 
                </label>
                <label>
                    <input 
                    name="mushrooms"
                    type="checkbox"/>
                &nbsp;&nbsp; Mushrooms
                </label>
                <label>
                    <input 
                    name="peppers"
                    type="checkbox"/>
                &nbsp;&nbsp; Green Peppers
                </label> <label>
                    <input 
                    name="pineapple"
                    type="checkbox"/>
                &nbsp;&nbsp; Pineapple
                </label>
                <label>
                    <input 
                    name="chicken"
                    type="checkbox"/>
                &nbsp;&nbsp; Grilled Chicken
                </label>
                <label>
                    <input 
                    name="threeCheese"
                    type="checkbox"/>
                &nbsp;&nbsp; Three Cheese
                </label>
                <label>
                    <input 
                    name="bacon"
                    type="checkbox"/>
                &nbsp;&nbsp; Signature Cured Bacon
                </label>
                <label>
                    <input 
                    name="artichoke"
                    type="checkbox"/>
                &nbsp;&nbsp; Artichoke Hearts
                </label>
                <label>
                    <input 
                    name="garlic"
                    type="checkbox"/>
                &nbsp;&nbsp; Roasted Garlic
                </label>
        </div>
        <h4>Choice of Substitute</h4>
        <p>Choose up to 1</p>
        <label> 
            <input type="checkbox"/>
            &nbsp;&nbsp; Gluten Free Curst (+ $1.00)
        </label>
        <h4>Special Instructions</h4>
        <label>
            <input 
            type="text"
            name="instructions"
            placeholder="Anything else you'd like to add?"
            />
        </label>

   </form>
       
</div>
    )
}