
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


