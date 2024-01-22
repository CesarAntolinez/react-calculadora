import React from "react";

export default function Button(props) {

    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} ${props.className}`} type={props.type || 'button'}
            onClick={() => props.onValue(props.value)}>
            {props.value}
        </button>
    )
}