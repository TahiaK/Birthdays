import React, { useState } from "react";
import Card from '../UI/Card'
import classes from './AddPeople.module.css'
import Button from '../UI/Button'

//show the name, date and age

const AddPeople = props => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const addPeopleHandler = event => {
        event.preventDefault()
        if (enteredDate.trim().length === 0 || enteredName.trim().length === 0) return
        const date = new Date(enteredDate)
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate()+1
        const year = date.getFullYear();
        props.onAddPeople(enteredName, enteredDate)
        setEnteredName('')
        setEnteredDate('')
    }

    const nameChangeHandler = event => {
        setEnteredName(event.target.value) // this handler is used to save the entered name when the onChange happens in input
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value) // this handler is used to save the entered date when the onChange happens in input
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addPeopleHandler}>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" value={enteredName} onChange={nameChangeHandler} />
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
                <Button type="submit">Add Person</Button>
            </form>
        </Card>

    )
}

export default AddPeople