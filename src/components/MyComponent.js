import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Manh Tuong',
        address: 'Phu Xuyen',
        age: 29
    };

    handleClick = (event) => {
        console.log('>> click me');
        console.log('>> ', this.state.name)

        this.setState({
            name: 'Prism9x'
        })
    }
    handleOnMouseOver = (event) => {
        console.log('X', event.pageX)
        console.log('Y', event.pageY)

    }
    render() {
        return (
            <div>
                <p>My name is: {this.state.name}</p>
                <p>My age: {this.state.age}</p>
                <p>My address: {this.state.address}</p>
                <button onClick={(event) => this.handleClick(event)}>Click me</button>
                <button onMouseOver={(event) => this.handleOnMouseOver(event)}>Hover me</button>
            </div >
        );
    }
}

export default MyComponent;