import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredints: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return (
            <Aux>
                <div> Burger Control </div>
                <Burger ingredients={this.state.ingredints}></Burger>
                <div> Burger </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;