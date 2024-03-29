import React, { Component } from 'react';
import Notas from './notas/Main';
import Contador from './samples/Contador';
import Decrementador from './samples/Decrementador';
import {Navbar, NavbarBrand} from 'reactstrap';
import Catalog from './CatalogComponent';
import {ITEMS} from './shared/items';

class App extends Component{
  constructor(props, context) {
      super(props, context);
      this.state={
          items: ITEMS
      }
  }
  render() {
    return (/*
      <div className="App">
         <Notas></Notas>
         <Contador></Contador>
         <Decrementador></Decrementador>
      </div>*/
      <div className="App">
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
              </div>
            </Navbar>
            <Catalog items={this.state.items}/>
          </div>
  
    );
  }
}

export default App;
