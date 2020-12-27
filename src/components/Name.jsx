import React, {Component} from 'react';
class Name extends Component {
    render (){
        const {value}=this.props
        return (
            <div> Name:{value}</div>
        )
    }
}
export {Name};