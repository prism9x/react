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
        // khong the in bien obj ra ngoai duoc
        const test = { name: 'demo', age: 25 };
        const test2 = true;
        return (
            // fragment
            <>
                {/* convert sang json moi in duoc */}
                {JSON.stringify(test)}
                {/* in bien boolean thi khong render ra gi */}
                {test2}


                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </>
        );
    }
}

export default MyComponent;
