import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "John", age: 20 },
            { id: 2, name: "my", age: 21 },
            { id: 3, name: "he", age: 22 }
        ]
    }


    // handleClick = (event) => {
    //     console.log(event.taget)
    //     console.log(`My name is`, this.state.name);

    //     this.setState({
    //         name: 'selina',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })

    // }

    // handleOnMouseOver(event) {
    //     // console.log(event.taget)
    //     // console.log(`Iam from`, this.state.address);
    // }



    //jsx
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        )
    }
}

export default MyComponent;