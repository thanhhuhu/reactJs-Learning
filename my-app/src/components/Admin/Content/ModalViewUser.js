import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import {putUpdateUser} from "../../../services/apiService";
import _ from "lodash";
// import { toast } from 'react-toastify';
// import {postCreateNewUser} from "../../../services/apiService";

const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate } = props; // Include `dataUpdate`
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("USER");
    const [previewImage, setPreviewImage] = useState("");

    // Use useEffect to set state when `dataUpdate` changes
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email );
            setPassword(dataUpdate.password); // Assuming password is included in the user data
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role || "USER");
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate]);

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setImage("");
        setRole("USER");
        setPreviewImage("");
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            backdrop="static"
            className="modal-add-user"
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal View User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            value={username}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select
                            className="form-select"
                            value={role}
                            disabled
                        >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label label-upload" htmlFor="labelUpload">
                            <FcPlus /> Upload file image
                        </label>
                        <input type="file" id="labelUpload" hidden />
                    </div>
                    <div className="col-md-12 img-preview">
                        {previewImage ? (
                            <img src={previewImage} alt="" />
                        ) : (
                            <span> Preview image </span>
                        )}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalViewUser;
