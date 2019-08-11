import React, { Component } from 'react';
import classes from './App.css';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxiliary from '../components/hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  };

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  contextPropHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render () {
    console.log('[App.js] render.');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuth={this.state.authenticated} />
        </div>
      );
    }

    return (
        <Auxiliary>
          <button onClick={() => {
            this.setState({ showCockpit: false });
          }}>Remove Cockpit</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.contextPropHandler
          }}>
            {this.state.showCockpit ? <Cockpit personsLength={this.state.persons.length} title={this.props.title} personsHandler={this.togglePersonsHandler}/> : null}
            {persons}
          </AuthContext.Provider>
        </Auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
