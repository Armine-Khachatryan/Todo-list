import React, {Component} from 'react';
class Description extends Component {
    render (){
        const {value}=this.props
        return (
            <div> Description: {value} </div>
        )
    }
}
export {Description};