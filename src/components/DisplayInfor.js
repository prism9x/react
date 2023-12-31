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

        const { listUsers } = this.props
        console.log(listUsers)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Hide List User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((item, index) => {
                                return (
                                    <div key={item.id} className={+item.age > 25 ? "green" : "red"}>
                                        <div>My name is {item.name}</div>
                                        <div>My age is {item.age}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;
