import React from "react";

export default function Input(props) {

    return (
        <div>
            <div className={props.className}>
                {props.value}
            </div>
        </div>
    )
}