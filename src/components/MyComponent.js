import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Manh Tuong',
        address: 'Phu Xuyen',
        age: 29
    };

    render() {
        return (
            <div>
                <p>My name is: {this.state.name}</p>
                <p>My age: {this.state.age}</p>
                <p>My address: {this.state.address}</p>
            </div>
        );
    }
}

export default MyComponent;