import React from "react";
import cardClass from './Card.module.css'

const Card = props => {
    return (
        <div className={`${cardClass.card} ${props.className}`}> {props.children} </div>
    )
}

export default Card