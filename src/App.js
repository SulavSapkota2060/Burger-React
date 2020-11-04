import React, { Component } from 'react';
import './App.css';
import Layout from  "./components/Layout/layout"
import BurgerBuilder from "./components/BurgerBuilder/burgerbuilder"



class App extends Component{


  render(){
    return(
      <React.Fragment>
          <Layout>
     
              <BurgerBuilder />

          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
