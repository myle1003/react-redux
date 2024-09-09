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


    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} adress {this.state.age}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;