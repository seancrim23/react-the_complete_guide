import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //HTTP request....
    /*setTimeout(() => {
        alert('Saved data to the cloud!');
      }, 1000);*/
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });

    const assignedClasses = [];
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button ref={toggleBtnRef} onClick={props.personsHandler}>Toggle Persons</button>
            
            <button onClick={authContext.login}>CLick me haha!!!!</button>
            </div>
    );
};

export default React.memo(cockpit);