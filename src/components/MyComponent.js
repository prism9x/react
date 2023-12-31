import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";
import { isElementType } from "@testing-library/user-event/dist/utils";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "dinh manh tuong", age: 22 },
            { id: 2, name: "fiction", age: 25 },
            { id: 3, name: "prism", age: 29 }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log('>>> check data from parent', userObj)

        //bad code
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // console.log('check', listUsersNew)

        this.setState({
            listUsers: [...this.state.listUsers, userObj]
            //bad code
            // listUsers: listUsersNew

        })

    }

    render() {
        const myInfor = ['ab', 'c', 'd']


        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div >
        );
    }
}

export default MyComponent;
