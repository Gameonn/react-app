import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    //runs whenever the persons props change
    useEffect( () => {
      console.log('[Cockpit.js] useEffect');

      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, props.persons);

    //runs when component renders the first time
    useEffect( () => {
      console.log('[Cockpit.js] useEffect II');
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect II');
      }
    }, []);

    const style = {
        backgroundColor: '#ffc107',
    }

    if(props.showPersons)
      style.backgroundColor = '#cbadd2';

    let assignedClasses = [];
    if(props.personsLength <= 2)
      assignedClasses.push(classes.dull);
    if(props.personsLength <= 1)
      assignedClasses.push(classes.spacing);
    if(props.personsLength === 0)
      assignedClasses.push(classes.bg);

    return (
        <div className={classes.Cockpit}>
            <h1> {props.title} </h1>
            <h2 className={assignedClasses.join(' ')}> This is my first react app </h2>
            <button className={classes['btn-primary']} onClick={() => props.switch("Manuel!!")}>
            Switch Person
            </button>
            <button ref={toggleBtnRef} style={style} onClick={props.toggle}>
            Toggle
            </button>
            {/* <AuthContext.Consumer>
              {(context) =>  <button style={style} onClick={context.login}> Login </button>}
            </AuthContext.Consumer> */}
            <button style={style} onClick={authContext.login}> Login </button>

        </div>
    );
}

export default React.memo(cockpit);