import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const style = {
        backgroundColor: '#ffc107',
    }

    if(props.showPersons)
      style.backgroundColor = '#cbadd2';

    let assignedClasses = [];
    if(props.persons.length <= 2)
      assignedClasses.push(classes.dull);
    if(props.persons.length <= 1)
      assignedClasses.push(classes.spacing);
    if(props.persons.length === 0)
      assignedClasses.push(classes.bg);

    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}> This is my first react app </h1>
            <button className={classes['btn-primary']} onClick={() => props.switch("Manuel!!")}>
            Switch Person
            </button>
            <button style={style} onClick={props.toggle}>
            Toggle
            </button>
        </div>
    );
}

export default cockpit;