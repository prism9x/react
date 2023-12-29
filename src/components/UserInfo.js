import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Manh Tuong',
        address: 'Phu Xuyen',
        age: 29
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>My name is: {this.state.name}</p>
                <p>My age: {this.state.age}</p>
                <p>My address: {this.state.address}</p>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <label>Age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;