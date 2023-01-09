//PeopleList.js
import React from "react";
import Card from "../UI/Card";
import classes from './PeopleList.module.css'

const PeopleList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.people.map(ppl => (
                    <li key={ppl.id}>{ppl.name} {ppl.date}</li>
                ))}
            </ul>
        </Card>
    )
}

export default PeopleList