import React, {Component} from 'react';
import {Price} from './Price';
import {Name} from './Name';
import {Description} from './Description';
class Product extends Component{
render () {
    const{name,price,description}=this.props;
    return (
        <>
        <Name value={name}/>
        <Price value={price}/>
        <Description value={description}/>
        </>
    );
}
}
export{Product};