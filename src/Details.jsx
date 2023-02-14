import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {Modal,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import './index.css';


const Details = () => {
  const [show, setShow] = useState(false);
  const history=useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [logindata, setLogindata] = useState([]);
  var todayDate = new Date().toISOString().slice(0, 10);
  const birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogindata(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
            handleShow();
            console.log("ok");
        }, 3000);
      }
    }
  };

  const userlogout=()=>{
    localStorage.removeItem("user_login");
    history("/");
  }

  useEffect(() => {
    birthday();
  }, []);
  return (
    <div>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
        <div className="text-center">
          <h1 >Details page</h1>
          <h1 >{logindata[0].name}</h1>

          <Button  onClick={userlogout}>LOG OUT</Button>
          </div>

          {
            logindata[0].date===todayDate ?
            
            
                <>
                {console.log("hello")}
                
                <Modal show={show} >
            <Modal.Header >
              <Modal.Title>{logindata[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              HAPPY BIRTHDAY !!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          </>:""
          }
          
        </>
      )}
    </div>
  );
};

export default Details;
