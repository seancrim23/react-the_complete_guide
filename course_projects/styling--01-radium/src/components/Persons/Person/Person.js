import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    /*const rnd = Math.random();
    This code can be used with Error Hooks to return a meaningful error message when needed.
    if( rnd > 0.7 ) {
        throw new Error( 'Something went wrong!' );
    }*/

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context);
    };

    render(){
        console.log('[Person.js] is rendering...');
        return <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                <p key="item1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="item2">{this.props.children}</p>
                <input key="item3" type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name} />
        </Aux>;
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);