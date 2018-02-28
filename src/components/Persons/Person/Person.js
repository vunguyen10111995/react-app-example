import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="Person">
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                Name: <input className="form-control" type="text" onChange={this.props.changed} value={this.props.name} />
                <button onClick={this.props.click} className="btn btn-danger">Delete</button>
            </div>
        )
    }
}   
export default Person;