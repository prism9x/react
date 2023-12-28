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
                My name is: {this.state.name}
                My age: {this.state.age}
                My address: {this.state.address}
            </div>
        );
    }
}

export default MyComponent;