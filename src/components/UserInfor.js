import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'my',
        address: 'Tam ky',
        age: 21
    }


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "random",
            name: this.state.name,
            age: this.state.age
        })
    }


    render() {
        return (
            <div>
                My name is {this.state.name} adress {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default UserInfor;