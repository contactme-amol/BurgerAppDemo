import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummery = (props) => {
    const summeryIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}> { igKey }</span>: 
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3> Order Summery </h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {summeryIngredient}
            </ul>
            <p></p>
        </Aux>
    );
};

export default orderSummery;