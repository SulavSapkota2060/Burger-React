import React from 'react'
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients'
import './Burger.css'

const Burger = (props) => {
  let list = [];
    for(let i in props.ingredients){
        for(let k=0;k<props.ingredients[i];k++){
          list.push(<BurgerIngredients key={i+Math.random()} type={i} />)
        }
    }

    

    if(list.length === 0){
      list= <p>Please start adding ingredients.</p>
    }
    return (
      <div className="Burger">
        <BurgerIngredients type="bread-top" />
        {list}
        <BurgerIngredients type="bread-bottom" />
      </div>
    );
}


export default Burger;