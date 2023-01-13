import React, {useState} from "react";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";

const People = props => {

    const [filtered, setFiletered] = useState('January')
    
    const filterChangeHandler = selectedYear => {
        setFiletered(selectedYear)
    }

    const fileteredPeople = props.people.filter(ppl => {
        return ppl.month === filtered
    })

    return (
        <div>
            <PeopleFilter selected={filtered} onChangeFilter={filterChangeHandler} />
            <PeopleList people={fileteredPeople} />
        </div>
    )
}

export default People