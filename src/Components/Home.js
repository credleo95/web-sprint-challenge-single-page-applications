import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom'; 
import McdonaldsLogo from './logo.png'
import SweetGreensLogo from './sweetgreenLogo.png'
import StarbucksLogo from './StarbucksLogo.png';
import {Link, Route} from 'react-router-dom';

// Home Component Styling
const TopRestaurantSection = styled.section`
        display: flex; 
        flex-flow: row wrap;
  `
  const BottomRestaurantSection = styled.section`
        display: flex; 
        flex-flow: row wrap;
  `

const RestaurantDiv = styled.div`
      width: 25%; 

` 
const StandardLogo = styled.img`
        width: 25%; 
        height: 25%; `

// Home Page Restuarants Mark-up
export default function Home(){
    return(
        <div>
            <div className='image-container'>
                <section className="Hero-statement">
                            <h1>Your favorite food, delivered while coding</h1>
                            <button><Link to='/pizza'style={{textDecoration: 'none',color:'black'}}>Pizza?</Link></button>
                </section>
            </div>
             <h3>Food Delivery in Gotham City</h3>
             <TopRestaurantSection>
                 <RestaurantDiv>
                     <figure>
                        <StandardLogo src={McdonaldsLogo} alt="McDonalds Logo"/>
                        <figcaption>McDonald's</figcaption>
                        <br/>
                        <h4>$ - American - Fast Food - Burgers</h4>
                        <button>20 - 30 Min</button>
                                &nbsp;&nbsp;
                        <button>$5.99 Delivery Fee</button>
                    </figure>
                </RestaurantDiv>
                <RestaurantDiv>
                    <figure>
                        <StandardLogo src={SweetGreensLogo} alt="Sweetgreen Logo"/>
                        <figcaption>Sweetgreen</figcaption>
                        <br/>
                        <h4>$ - Healthy - Salads</h4>
                        <button>30 - 45 Min</button>
                            &nbsp;&nbsp;
                        <button>$4.99 Delivery Fee</button>
                    </figure>
                </RestaurantDiv>
                <RestaurantDiv style={{width: '30%'}}>
                    <figure>
                        <StandardLogo src={StarbucksLogo} style={{width: '15%'}} alt="Starbucks Logo"/>
                        <figcaption>Starbucks</figcaption>
                        <br/>
                        <h4>$ - Cafe - Coffee - Breakfast and Brunch</h4>
                        <button>10 -20 Min</button>
                            &nbsp;&nbsp;
                        <button>$3.99 Delivery Fee</button>
                    </figure>
                </RestaurantDiv>
            </TopRestaurantSection>
                <hr style={{width: '80%'}}/>
            <BottomRestaurantSection>
                <RestaurantDiv>
                    <figure>
                        <StandardLogo src="" alt="Taco Bell Logo"/>
                        <figcaption>Taco Bell</figcaption>
                        <br/>
                        <h4>$ - Burritos - Fast Food - Mexican</h4>
                        <button>35 - 45 Min</button>
                            &nbsp;&nbsp;
                        <button>$2.99 Delivery Fee</button>
                    </figure>               
               </RestaurantDiv>
                <RestaurantDiv>
                    <figure>
                        <StandardLogo src="" alt="Ruby Tuesday Logo"/>
                        <figcaption>Ruby Tuesday</figcaption>
                        <br/>
                        <h4>$ - American - BBQ - Sandwich - Family Meals</h4>
                        <button>25 - 35 Min</button>
                            &nbsp;&nbsp;
                        <button>$1.99 Delivery Fee</button>
                    </figure>               
                  </RestaurantDiv>
                <RestaurantDiv>
                    <figure>
                        <StandardLogo src="" alt="Bojangle's Logo"/>
                        <figcaption>Bojangle's Famous Chicken & Biscuits</figcaption>
                        <br/>
                        <h4>$ - American - Chicken - Wings</h4>
                        <button>20 - 30 Min</button>
                            &nbsp;&nbsp;
                        <button>$8.99 Delivery Fee</button>
                    </figure>                
                </RestaurantDiv>
             </BottomRestaurantSection>

        </div>
    )
}