import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";

const ModalCreateUser =(props) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const[username,setUsername] =useState("");
    const [image,setImage] =useState("");
    const [role,setRole] =useState("USER");
    const [previewImage,setPreviewImage]=useState("");

    // fucntion upload ảnh
    const handleUploadImage = (event) =>{
        // điều kiện nếu không upload ảnh thì sẽ có chữ preview image
        if (event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }else {
            setPreviewImage("");
        }
    }
    return (
      <div>
          <Button variant="primary" onClick={handleShow}>
              Add new user
          </Button>
          <Modal
              show={show}
              onHide={handleClose}
              size={"xl"}
              // static : khi nhấn bên ngoài thì sẽ có animation
              backdrop={"static"}
              className = "modal-add-user"
          >

              <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              {/*phần body của form dùng bootstrap*/}
              <Modal.Body>
                  <form className="row g-3">
                      <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email"
                                 value={email}
                                 className="form-control"
                                 onChange={(event) => setEmail(event.target.value)}/>
                      </div>
                      <div className="col-md-6">
                          <label className="form-label">Password</label>
                          <input type="password" value={password} className="form-control"
                                 onChange={(event) => setPassword(event.target.value)}
                          />
                      </div>
                      <div className="col-md-6">
                          <label className="form-label">Username</label>
                          <input type="text" value={username} className="form-control"
                                 onChange={(event) => setUsername(event.target.value)}
                          />
                      </div>
                      <div className="col-md-4">
                          <label className="form-label">Role</label>
                          <select className="form-select"
                                  onChange={(event) => setRole(event.target.value)}
                          >
                              <option selected value={"USER"}>USER</option>
                              <option value={"ADMIN"}>ADMIN</option>
                          </select>
                      </div>
                      <div className="col-md-12">
                          <label className="form-label label-upload" htmlFor="labelUpload">
                              <FcPlus/> Upload file image
                          </label>
                          <input
                              type="file"
                              id="labelUpload"
                              hidden
                              onChange={handleUploadImage}
                          />
                      </div>
                      {/*htmlFor khi cùng id với ô input sẽ nhận thuộc tính upload img (để giống như html)*/}
                      <div className="col-md-12 img-preview">
                          {previewImage ?
                              <img src={previewImage} alt={""}/>
                              :
                              <span> Preview image </span>
                          }
                      </div>
                  </form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                      Save
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </div>
    )
}
export default ModalCreateUser