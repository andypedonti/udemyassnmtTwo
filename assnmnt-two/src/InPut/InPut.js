import React from 'react';

const inPut = (props) => {
    return <input
        type='text'
        onchange={props.changed} />
}

export default inPut;