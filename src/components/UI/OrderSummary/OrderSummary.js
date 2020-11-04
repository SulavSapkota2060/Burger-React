import React from 'react'
import './'

const OrderSummary =(props) => {


    return(
        <div className="Modal">
            <p>Order Summary:</p>


            <button className="Danger">Cancel</button>
            <button className="Success">Continue</button>
        </div>
    );
}