import React, { useState } from 'react';
import { connect } from 'react-redux';

function ChangeCount(props) {

    const [value, setValue] = useState('');


    return (
        <div>
            <button
                onClick={() => {
                    props.onValueDown(value);
                    setValue('');
                }}
            >
                Value down
</button>

            <button
                onClick={props.onValueUp}
            >
                Value up
        </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onValueUp: () => {
            dispatch({ type: 'INCREMENT' });
        },
        onValueDown: () => {
            dispatch({ type: 'DECREMENT' });
        },
    };

};

export default connect(null, mapDispatchToProps)(ChangeCount);