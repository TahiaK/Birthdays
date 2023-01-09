import AddPeople from "./components/People/AddPeople";
import PeopleList from "./components/People/PeopleList"
import React, {useState} from "react";

function App() {
  const [peopleList, setPeopleList] = useState([])

  const addPeopleHandler = (pname, pdate) => {
    setPeopleList((prevList) => {
      return [...prevList, {name: pname, date: pdate, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddPeople onAddPeople={addPeopleHandler}/>
      <PeopleList people={peopleList}/>
    </div>
  );
}

export default App;
