import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, item) => {
            return sum + item;
        }, 0)
        console.log("sum :", sum);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAditiion = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAditiion;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchasable(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            };
            updatedIngredient[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
            this.updatePurchasable(updatedIngredient);
        }
    }

    purchaseHandler = () => {

    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal>
                    <OrderSummery ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                        addIngredient={this.addIngredientHandler} 
                        removeIngredient={this.removeIngredientHandler}
                        disabledInfo={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={!this.state.purchasable}
                        />
            </Aux>
        );
    }
}

export default BurgerBuilder;