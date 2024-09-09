import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'my',
        address: 'Tam ky',
        age: 21
    }

    handleClick = (event) => {
        console.log(event.taget)
        console.log(`My name is`, this.state.name);

        this.setState({
            name: 'selina',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }

    handleOnMouseOver(event) {
        // console.log(event.taget)
        // console.log(`Iam from`, this.state.address);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        alert(`Your name is ${this.state.name}`);
    }



    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} adress {this.state.age}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;