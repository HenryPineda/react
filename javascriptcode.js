

function Person(props){

    return (

        <div className="person">

            <h1>{props.name }</h1>
            <p> Your Age: {props.age }</p>
        </div>

    );
}

var app = (

    <div>

        <div>

            <Person name="Stephanie" age="4" />

        </div>

        <div>
            <Person name="Leonardo" age="1" />

        </div>
    </div>


);

ReactDOM.render(<Person name="Henry" age="32" />,
document.querySelector('#p1'));

ReactDOM.render(<Person name="Taty" age="25" />,
document.querySelector('#p2'));

ReactDOM.render(app,
document.querySelector('#app'));