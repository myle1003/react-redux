import React from "react";
import './DisplayInfor.scss'
import logo from "./../logo.svg"

class DisplayInfor extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {
            isShowListUser: true
        }
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
            <div className="display-infor-contanier">
                {/* <img src={logo}></img> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser ? "Hide list items" : "Show list items"}
                    </span>
                </div>
                {this.state.isShowListUser && <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 21 ? "red" : "blue"}>
                                <div>
                                    <div style={{ color: 'purple', paddingTop: '50px' }}>My name is {user.name}</div>
                                    <div>Age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

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