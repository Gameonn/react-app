import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    render() {
      return (
        this.props.persons.map((person, index) => {
            return (
                <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  click={() => this.props.clicked(index)}
                  changed={(event) => this.props.changed(event, person.id)}
                  isAuth={this.props.isAuthenticated}
                >
                  {person.hobby}
                </Person>
            );
          }
        )
      );
    }
}


export default Persons;