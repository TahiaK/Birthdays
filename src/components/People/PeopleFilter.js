//import './PeopleFilter.css'
import Card from "../UI/Card";
import classes from './PeopleFilter.module.css'

const PeopleFilter = (props) => { 

    const dropDownFilter = (event) => {
      props.onChangeFilter(event.target.value)
    }
  
    return (
        <Card className={classes.peoplefilter}>
          <label>Filter by Month</label>
          <select value={props.selected} onChange={dropDownFilter}>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
          </select>
        </Card>
    );
  };
  
  export default PeopleFilter;