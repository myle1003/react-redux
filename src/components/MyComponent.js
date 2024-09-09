import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'my',
        address: 'Tam ky',
        age: 21
    }

    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} adress {this.state.address}
            </div>
        )
    }
}

export default MyComponent;