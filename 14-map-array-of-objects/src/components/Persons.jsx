import Person from './Person';
import persons from '../data/persons';

function Persons() {
  return (
    <div className="cards">
      {persons.map((v) => {
        return <Person {...v} key={v.id} />;
      })}
    </div>
  );
}

export default Persons;
