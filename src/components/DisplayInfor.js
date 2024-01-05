import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> render')
//         const { listUsers } = this.props
//         console.log(listUsers)
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <div>
//                         {
//                             listUsers.map((item, index) => {
//                                 return (
//                                     <div key={item.id} className={+item.age > 25 ? "green" : "red"}>
//                                         <div>My name is {item.name}</div>
//                                         <div>My age is {item.age}</div>
//                                         <hr></hr>
//                                         <div>
//                                             <span><button onClick={() => { this.props.handleDeleteUser(item.id) }}>Delete</button></span>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        // alert('click me')
        setShowHideListUser(!isShowListUser);

    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>{isShowListUser === true ? 'Hide list user' : 'show list user'}</span>
            </div>
            {isShowListUser &&
                <div>
                    {
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id} className={+item.age > 25 ? "green" : "red"}>
                                    <div>My name is {item.name}</div>
                                    <div>My age is {item.age}</div>
                                    <hr></hr>
                                    <div>
                                        <span><button onClick={() => { props.handleDeleteUser(item.id) }}>Delete</button></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div >
    )
}

export default DisplayInfor;
