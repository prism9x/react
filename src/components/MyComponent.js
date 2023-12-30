import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "dinh manh tuong", age: 22 },
            { id: 2, name: "fiction", age: 25 },
            { id: 3, name: "prism", age: 29 }
        ]
    }


    render() {
        const myInfor = ['ab', 'c', 'd']


        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers}
                />
            </div >
        );
    }
}

export default MyComponent;
