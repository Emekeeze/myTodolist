import React from 'react';

const Toditem = (props) => {

    function handleClick() {
       
        
    }
    return <li onClick={() =>{props.onChecked(props.id)}}>{props.text}</li>;
}

export default Toditem;
