import React from "react";

class DisplayInfor extends React.Component {
    render() {

        const { listUsers } = this.props
        console.log(listUsers)
        return (
            <div>
                {
                    listUsers.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>My name is {item.name}</div>
                                <div>My age is {item.age}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayInfor;
