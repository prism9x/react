import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Manh Tuong',
        address: 'Phu Xuyen',
        age: 29
    };

    handleClick(event) {
        console.log('>> click me');
    }
    handleOnMouseOver(event) {
        console.log('X', event.pageX)
        console.log('Y', event.pageY)
    }
    render() {
        return (
            <div>
                <p>My name is: {this.state.name}</p>
                <p>My age: {this.state.age}</p>
                <p>My address: {this.state.address}</p>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div >
        );
    }
}

export default MyComponent;