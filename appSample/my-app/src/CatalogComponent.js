import React, { Component } from 'react';
import {Media,Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';

class Catalog extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state={
            selectedItem: null,
            items:[
                {
                    name: 'Helmet',
                    image: '/assets/images/helmet.jpg',
                    category: 'safety',
                    label: 'ultra safe',
                    price: '4.99',
                    description: 'Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros'
                },
                {
                    name: 'Audio protector',
                    image: '/assets/images/audio.jpg',
                    category: 'safety',
                    label: 'noise filter',
                    price: '12.99',
                    description: 'Protege de ruidos auditivos por encima de los decibeles considerados aceptables'
                },
                {
                    name: 'Glasses',
                    image: '/assets/images/glasses.jpg',
                    category: 'safety',
                    label: 'New technology',
                    price: '31.99',
                    description: 'Permite filtrar rayos ultravioleta, material anti rayas, anti caidas'
                },
                {
                    name: 'Gloves',
                    image: '/assets/images/gloves.jpg',
                    category: 'safety',
                    label: '',
                    price: '12.99',
                    description: 'Hechos de algodón con goma antideslizante, especial para industria química.'
                }                
            ]
        }
    }
    
    onItemSelect(item) {
        this.setState({
            selectedItem: item
        })
    }

    renderItem(item) {
        if (item != null) {
            return (
                <Card className="col-5">
                    <CardImg width="100%" 
     src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
    
        } else {
            return (
                <div/>
            );
        }
    
    }
    
    render() {
        const imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };
    
        var catalog= this.props.items.map(item => {
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{this.onItemSelect(item)}}>
                            <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {catalog}
                    </Media>
                </div>
                <div className="row">
                    {this.renderItem(this.state.selectedItem)}
                </div>
            </div>
        );
    }
}

export default Catalog;