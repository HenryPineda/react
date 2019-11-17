
// Section 3 module introduction part 25

//Just introduction to section 3


//The build workflow part 26

//No codepen. Set up a local project or local environment.

// Why.

/*

Optimize code

Use Next-Gen Javascript features

Be more productive Css auto prefixing

*/

// How

/*

Use Dependency Management tool like npm or yarn

Use Bundler Recommended Webpack

Use compiler (Nex-Gen Javascript) Babel + Presets

Use a Development Server

*/

// Installing a react app in part 27

/*

Google create react app and find the officil link to the github repository

https://github.com/facebook/create-react-app

Install nodeJS

https://nodejs.org/

We use nodejs for package management and the local server

To create an react app we have to execute the following command

npx create-react-app nameOfTheApp

Alternatively we can use the following command

npx create-react-app nameOfTheApp --scripts-version 1.1.5


*/

//Understanding the folder structure part 28

/*

Just a brief explanation of the folder structure.

*?

*/

//Understanding components part 29

/*

In the index.js file we import three very important things.

import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';


But we also import the App component using the following code.

import App from './App';



to be able to use the App component we use the following code

ReactDOM.render(<App />, document.getElementById('root'));


In the App component we have to use the following code. This is the content of the code App.js file

import React, { Component } from 'react';

class App extendes Component{

  render () {

    return (

        <h1>This is rendered by the App component!</h1>
    );
  }
}


export default App;



*/


// Introduction to conditionals in part 52.

/*

Using a ternary expression we can control can it is display and what not.

Within the App component we add the following code


class App extends Componenet {

    state = {

        persons: [

            {name: 'Henry Pineda', age:31}
        ],

        showPersons:false
    }

    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;

        this.setState({ showPersons: !doesShow});

    }

    render() {

        return (

            <button onClick ={this.togglePersonsHandler}>Toggle person<buttom />

            { this.state.showPersons ===true  ?
                <div>

                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
            
            
                <div/>
                
                : null
            }
        )
    }
}



*/

//Handle dynamic content the js way part 54

/*

To output content conditionally

class App extends Components {

    state = {

        persons: [

            {name: 'Henry Pineda', age:31}
        ],

        showPersons:false
    }


    let persons = null;

    if (this.state.showPersons) {

        persons = (

            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
 
        );
    }


    render() {


        const style = {

            backgroundColor: 'white',
            font:'inherit',
            border: '1px solid blue',
            padding: '8px',
            curson: 'pointer'
        }

        return (

            <button style={style} onClick ={this.togglePersonsHandler}>Toggle person<buttom />

            {persons}

        )
    }
}



*/

//Outputting the content of the array of persons in the state dynamically in part 55

/*

    Just introduction to displaying or output arrays of data or the content of state dynamically

*/


// List the persons array part 56


/*


let persons = null

if(this.state.showPersons) {

    persons = (

        <div>

            {this.state.persons.map(person => {

                return <Person {person.name} {person.age } />
            })}
        
        
        <div/>
    )
}


*/

//Creating the deletePersonHandler in part 57

/*

deletePersonHandler = (personsIndex) =>{

        const persons = this.state.persons;

        persons.splice(personsIndex, 1);

        this.setState({persons: persons});

}

let persons = null

if(this.state.showPersons) {

    persons = (

        <div>

            {this.state.persons.map((person, index) => {

                return <Person {person.name} {person.age } click={() => this.deletePersonHandler(index)} />
            })}
        
        
        <div/>
    )
}


*/


// Creating unmutable updates in part 58

/*

The way we are removing the person from the array of object is by mutating the state using the splice method.
However this consider not best practice. The flaw of this approach is that objects and arrays in javascript are reference 
type so when we persons from the original array using the this.state.persons we are actually getting a pointer to the original
array. If we splice the array we are mutating the original array. This can lead to unpredicatable results and it is a bad practice.


We need to create a copy of the array before manipulating it. we can do this two ways.

1. By calling the slice method with out parameters.

This method returns a completely new array.

const persons = this.state.persons.slice()

2. Using the spread operator "...". This would be the most popular and common way of doing it these days.

const persons = [...this.state.persons];

*/

//Key prop in part 59

/*

we need to specify a key prop in every component in react.

<Person key={person.id} />




*/

//Flexible list part 60

/*

The idea is to change the name of a specific user when text input is changed on the textbox.

On the input field we have onChange event listener has execute a method called changedNameHandler. This method 
is passed as as property on the <Person /> component the following way

this.state.persons.map((person, index) =>{

   return  <Person name={person.name} click={() =>this.deletePersonHandler(index)} changed={(event) =>this.changedNameHandler(event, person.id)} />

});

In the Person.js file we add the following code.

import React from 'react';
import './Person.css';

const person = (props) =>{

    return (

        <p onClick={props.click}>I am {props.name} and I am {props.age} old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    );
}


changedNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {

        return p.id ==id;
    });

    const person = [...this.state.persons[personIndex]];

    person.name = event.target.value;

    const persons = []...this.state.persons];

    persons[personIndex] = person;

    this.setState({

        persons: persons;

    }
    );

}


*/

//Summary on conditional list part 61

/*

Just a summary of the last 10 parts


*/


//Conditional asignment solution  part 62

/*

import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';



class App extends Component {

    state ={

        userInput: ''

    }

    changeTextHandler = (event) => {

        this.setState({

            userInput: event.target.value
        });
    }

    deleteCharHandler = (index) => {

        let text = this.state.userInput.split('');

        text.splice(index,1);


        newUpdatedText = text.join('');

        this.setState({

            userInput: newUpdatedText
        });

    }

    render() {

        const charList = this.state.userInput.split('').map((char, index) => {

            return <Char char={char} key={index} clicked={() =>this.deleteCharHandler(index)} />


        });

        return (

            <div>

                <input type="text" onChange={this.changeTextHandler} value={this.state.userInput} />

                <p>{this.state.userInput}</p>

                <Validation userInputLength={this.state.userInputLength.length} />

            </div>

        );
    };

}


we need to create another folder. We are going to call the folder validation to save the Validation.js Component.apply

we add the following code


import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text is long is enough!';

    if(props.userInputLength <= 5){

        validationMessage = 'Text is too short!';
    }

    return (

        <div>

            { props.userInputLength < 5 ?
                <p>The text is too short!</p>
                :
                <p>The text is long is enough!</p>

            }

            {validationMessage}


        </div>

    );


}


export default validation;


import React from 'react';


const char = (props) => {

    const style = {
        display:'inline-block',
        padding:'16px',
        margin: '16px',
        border: '1px solid black',
        textAlign:'center',
        boxShadow:' 0 2px 2px grey',
        borderRadius: '2px'
    };

    return (

        <div style={style} onClick={props.clicked}>{props.char}</div>


    );


}

export default char;


*/



