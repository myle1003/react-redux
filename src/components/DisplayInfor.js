import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUser } = this.props;
        console.log("11", listUser);

        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser ? "Hide list items" : "Show list items"}
                    </span>
                </div>
                {this.state.isShowListUser && <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 21 ? "red" : "blue"}>
                                <div>My name is {user.name}</div>
                                <div>Age is {user.age}</div>
                                <hr />
                            </div>
                        )
                    })}

                </div>}
            </div >
        )
    }
}

export default DisplayInfor;