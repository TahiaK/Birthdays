//PeopleList.js
import React from "react";
import Card from "../UI/Card";
import classes from './PeopleList.module.css'

const PeopleList = props => {

    if (props.people.length === 0) {return <h2 className={classes.fallback}>Found no expenses</h2>}
    return (
        <Card className={classes.users}>
            <ul>
                {props.people.map(ppl => (
                    <li key={ppl.id}>{ppl.name} {ppl.day}-{ppl.month}-{ppl.year}</li>
                ))}
            </ul>
        </Card>
    )
}

export default PeopleList