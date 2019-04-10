import React from 'react';
import './Burger.css';
import BurgerIngradient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        console.log()
        console.log("key :", igKey);
        console.log(Array(props.ingredients[igKey]));
         return [...Array(props.ingredients[igKey])].map((_, i) => {
             return <BurgerIngradient key={igKey + i} type={igKey} />;
         })   
    });

    return(
        <div className='Burger'>
            <BurgerIngradient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngradient type="bread-bottom"/>
        </div>
    );
}

export default burger;