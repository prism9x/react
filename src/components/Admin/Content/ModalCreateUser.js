import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus, FcRotateToLandscape } from "react-icons/fc";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    // const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUsername('')
        setRole('USER')
        setImage('')
        setPreviewImages('')
    }

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImages, setPreviewImages] = useState("")

    const handleUploadImage = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImages(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            setPreviewImages("");
        }

    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handSubmitCreateUser = async () => {

        //validate date
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            // alert('invalid email');
            toast.error('Invalid Email');
            // toast.success('Successful');
            // toast.info('Infor');
            return;
        }

        if (!password) {
            toast.error('Invalid Password');
            return;
        }



        // using axios send data to back-end
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);

        // call API add user
        let res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log('>>> check axios')
        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
        }

        if (res.data && res.data.EC !== 0) {
            toast.info(res.data.EM);
            return;
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Create user
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => { setUsername(event.target.value) }}
                            />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                value={role}
                                onChange={(event) => { setRole(event.target.value) }}
                            >
                                <option value={'USER'}>USER</option>
                                <option value={'ADMIN'}>ADMIN</option>
                            </select>
                        </div>
                        <div classNameName='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'><FcPlus /> Uploadd File Image</label>
                            <input
                                type='file'
                                id='labelUpload'
                                hidden
                                onChange={(event) => { handleUploadImage(event) }}

                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImages ?
                                <img src={previewImages}></img>
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Add
                    </Button>
                    <Button variant="primary" onClick={handSubmitCreateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;
