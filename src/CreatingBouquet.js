import React from 'react';
import Color from './Color';
import Flower from './Flower';
function CreatingBouquet (props){
    return (
        <div>
        <h3>Bouquet consists of {props.number} <Color color={props.color}/> <Flower flower={props.flower}/></h3>
        </div>
    );
}
export default CreatingBouquet;
