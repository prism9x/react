import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                ManageUser
            </div>
            <div classNameName="user-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>

                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;