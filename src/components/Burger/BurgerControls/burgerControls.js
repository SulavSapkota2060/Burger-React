import BurgerControl from "./burgerControl/burgerControl"
import React from 'react'
import './burgerControls.css'

const burgerControls = props => {
  console.log("Order State:",props.order)
    return (
      <div className="controls">
        <p>
          Total Price: <strong>${props.price.toFixed(2)}</strong>
        </p>
        {Object.keys(props.ingredients).map((e) => (
          <BurgerControl
            key={Math.random()}
            add={props.add}
            remove={props.remove}
            control={e}
            disabled={props.disabled}
            
          />
        ))}
        <button className="OrderButton" disabled={!props.order}>ORDER NOW</button>
      </div>
    );
}


export default burgerControls;