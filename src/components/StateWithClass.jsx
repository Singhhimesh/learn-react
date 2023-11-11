import React, { Component } from 'react';

class StateWithClass extends Component {
    constructor() {
        super();

        this.state = {
            name: "Suraj Kashyap",
            email: "surajsingh@mail.com",
            hello() {
                alert('this is me');
            }
        }
    }

    updateName() {
        this.setState({name: "Radhe Radhe" });
        console.log(this.state.hello());
    }

    render() {
        return (
            <>
                StateWithClasses <br />
                {this.state.name}

                <button onClick={this.updateName.bind(this)}>Update Name</button>
            </>
        );
    };
}

export default StateWithClass;