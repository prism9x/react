import React, { useState } from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";
import { isElementType } from "@testing-library/user-event/dist/utils";

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState([
        { id: 1, name: "dinh manh tuong", age: 22 },
        { id: 2, name: "fiction", age: 25 },
        { id: 3, name: "prism", age: 29 }
    ])
    const handleAddNewUser = (userObj) => {

        setListUsers([userObj, ...listUsers])

    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;

        listUsersClone = listUsersClone.filter(item => item.id !== userId);

        setListUsers(listUsersClone);

    }


    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div >
    );
}

export default MyComponent;
