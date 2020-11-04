import React, { Component } from "react";
import "./burgerbuilder.css";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BurgerControls/burgerControls";

class BurgerBuilder extends Component {
  INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0,
    },
    price: 4,
    purchasable: false,
  };

  updatePurchaseState = (ingredients) => {
    let total = 0;
    Object.keys(ingredients).map((ingKey) => {
      total += ingredients[ingKey];
      return null
    });
    if (total > 0) {
      this.setState({ purchasable: true });
    }
    else{
      this.setState({purchasable:false})
    }
    console.log("SUM:", total);
  };
  addIngredientHandler = (ingredient) => {
    let ingredients = { ...this.state.ingredients };
    ingredients[ingredient.toLowerCase()] += 1;
    this.setState({ ingredients: ingredients });
    const newPrice = this.INGREDIENT_PRICES[ingredient];
    this.setState((prevProps) => {
      return { price: prevProps.price + newPrice };
    });
    console.log(this.state)
    this.updatePurchaseState(ingredients);
  };

  removeIngredientHandler = (ingredient) => {
    let ingredients = { ...this.state.ingredients };
    ingredients[ingredient.toLowerCase()] -= 1;
    this.setState({ ingredients: ingredients });
    const newPrice = this.INGREDIENT_PRICES[ingredient];
    this.setState((prevProps) => {
      return { price: prevProps.price - newPrice };
    });
    console.log(this.state)
    this.updatePurchaseState(ingredients);
  };

  disabledStat = (ing) => {
    const ingredients = { ...this.state.ingredients };
    return ingredients[ing] <= 0;
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          ingredients={this.state.ingredients}
          disabled={this.disabledStat}
          price={this.state.price}
          order={this.state.purchasable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
