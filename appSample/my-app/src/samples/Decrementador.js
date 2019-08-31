import React, { Component } from 'react';

class Decrementador extends Component {
    constructor(){
        super();
        this.state = {
            numero:100
        };
        this.decrementar = this.decrementar.bind(this);
    }

    decrementar() {
        this.setState({
            numero: this.state.numero - 1
        });
    }

    render() {
        return (
            <div className="container text-center">
                <h1 className="display-2">{this.state.numero}</h1>
                <button className="btn btn-danger" onClick={this.decrementar}>decrementar 01</button>
                <button className="btn btn-warning" onClick={()=>this.decrementar()}>decrementar 01</button>
                <button className="btn btn-success" onClick={this.decrementar.bind(this)}>decrementar 01</button>
            </div>
        );
    }
}

export default Decrementador;