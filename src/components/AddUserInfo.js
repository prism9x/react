import React, { useState } from "react";


const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Phu xuyen');
    const [age, setAge] = useState('')


    const handleOnChangeInput = (event) => {

        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {

        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }



    return (
        <div>
            <p>My name is: {name}</p>
            <p>My age: {age}</p>
            <p>My address: {address}</p>
            <hr></hr>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}></input>
                <label>Age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}></input>
                <button>Submit</button>
            </form>
            <hr></hr>
        </div>
    )
}

export default AddUserInfor;