import React from 'react';
import {notas} from '../notas';
import Formulario from './Formulario';

/*const listaDeCards = notas.map((item, i) => {
    return (
        <>
      <p key={i}>{i}.-{item.titulo}</p><hr></hr>
      </>            
      )
  });*/

class Main extends React.Component {
    constructor(context, props){
        super(context, props)
        console.log(notas);
        this.state = {
            notas
        };
        this.guardarItem = this.guardarItem.bind(this);
    }
    
    eliminarItem(index) {
        console.log(index,typeof index);
        this.setState({
          notas: this.state.notas.filter(item=>item.id !== index)
        })
    }

    actualizarItem(index) {
        console.log(index,typeof index);
        const item = this.state.notas.find(element => element.id === index);
        /*this.setState({
          notas: this.state.notas.filter(item=>item.id !== index)
        })*/
    }

    guardarItem(objeto){
        console.log("llego el objeto");
        console.log(objeto);
        this.setState({
          notas: [...this.state.notas,objeto]
        });
    }

    render() {
        const listaDeCards = this.state.notas.map((todo, i) => {
            return (
            <div className="col-md-4" key={i}>
                <div className="card mt-4">
                <div className="card-title text-center">
                    <h3>{todo.titulo}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                    {todo.prioridad}
                    </span>
                </div>
                <div className="card-body">
                    <span>{todo.descripcion}</span>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.eliminarItem.bind(this,todo.id)}>
                        Delete {todo.id}
                    </button>
                    <button className="btn btn-primary" onClick={this.actualizarItem.bind(this,todo.id)}>
                        Update {todo.id}
                    </button>
                </div>
                </div>
            </div>
            )
        });
        return (
            <div className="App">
               <h1>Note App</h1> 
               <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Lista de Notas</h3>
                      {listaDeCards}
                    </div>
                    <div className="col-md-4">
                      <h3>Formulario</h3>
                      <Formulario guardarItem = {this.guardarItem}></Formulario>
                    </div>
                  </div>
                </div>
            </div>
          );
    }
}

export default Main;