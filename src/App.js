import AddPeople from "./components/People/AddPeople";
import People from "./components/People/People";
import React, {useState} from "react";

function App() {
  const [peopleList, setPeopleList] = useState([])

  const addPeopleHandler = (data) => {
    setPeopleList((prevList) => {
      return [...prevList, {name: data.name, day: data.day, month: data.month, year: data.year, age: data.age, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddPeople onAddPeople={addPeopleHandler}/>
      <People people={peopleList}/>
    </div>
  );
}

export default App;
