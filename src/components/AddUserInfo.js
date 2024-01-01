import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: '',
        age: ''
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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
                <hr></hr>
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
                <hr></hr>
            </div>
        )
    }
}

export default AddUserInfor;