import React, { Component } from 'react';
class Price extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: props.value
        }
    }
    changeCurrency = () => {
        let {price} = this.state;
        let purePrice = parseFloat(price);
    price = price.includes('$') ? purePrice * 500 + '֏' : purePrice / 500 + '$';
    this.setState({
        price: price
    })
}
render(){
    const {price} = this.state
    return (
        <div>
            <span>Price:{price}</span>
            <button onClick={this.changeCurrency}>changeCurrency </button>
        </div>
    );
}
}
export { Price };