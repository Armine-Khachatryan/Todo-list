import React from 'react';
import {connect} from 'react-redux';

function ShowCount(props){

    return(
        <h2>
        Count: {props.value}
        <br/>
        Message: {props.message}
        </h2>
    );
}

const mapStateToProps = (state)=>{
return {
    value: state.count,
    message: state.message
};
};


export default connect(mapStateToProps)(ShowCount);


