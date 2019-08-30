import React from 'react';
import {notas} from '../notas'

/*const listaDeCards = notas.map((item, i) => {
    return (
        <>
      <p key={i}>{i}.-{item.titulo}</p><hr></hr>
      </>            
      )
  });*/

const listaDeCards = notas.map((todo, i) => {
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
        </div>
        <div className="card-footer">
            <button className="btn btn-danger">
            Delete
            </button>
        </div>
        </div>
    </div>
    )
});

class Main extends React.Component {
    constructor(context, props){
        super(context, props)
        console.log(notas);
    }
    
    render() {
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
                    </div>
                  </div>
                </div>
            </div>
          );
    }
}

export default Main;