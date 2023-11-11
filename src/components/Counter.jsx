import {React, Component}  from "react";

class Counter extends Component {
    constructor() {
        super();

        this.count = 0;

        alert('construcr');
    }

    updateCount() {
        this.setState({ count: this.count++ })
    }

    componentDidMount(){
        alert('component did mount called');
    }

    render() {
        return (
            <>
                Counter Application <br />
                <button onClick={() => this.updateCount()}>Count: {this.count}</button>
                {/* <button onClick={this.updateCount.bind(this)}>Count: {this.count.count}</button> */}
            </>
        );
    };
}

export default Counter;