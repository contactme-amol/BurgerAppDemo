import React from 'react';
import './Burger.css';
import BurgerIngradient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
         return [...Array(props.ingredients[igKey])].map((_, i) => {
             return <BurgerIngradient key={igKey + i} type={igKey} />;
         })  
    }).reduce((prev, current) => {
        return prev.concat(current)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <div> Please start adding ingredients </div>
    }
    return(
        <div className='Burger'>
            <BurgerIngradient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngradient type="bread-bottom"/>
        </div>
    );
}

export default burger;