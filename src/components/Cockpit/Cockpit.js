import React from 'react';

import styles from './Cockpit.module.css';

const cockpit = (props) => {

    let pClass = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.red;
    }
    
    if (props.persons.length % 2 === 0) {
      pClass.push(styles.red);
    } else {
      pClass.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Learn React</h1>
            <p className={pClass.join(' ')}>style check</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle display</button>
        </div>
    );
};

export default cockpit;