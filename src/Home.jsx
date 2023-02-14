import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import Image from "./Image";
import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
    const history=useNavigate();

    const [inpval,setInpval]=useState({
        name:"",
        email:"",
        date:"",
        password:""
    });

    const [data,setData]=useState([]);

    const getdata=(e)=>{
        console.log(e.target.value);

        const {value,name}=e.target;
        setInpval(()=>{
            return {
                ...inpval,
                [name]:value

            }
        });
    };

    const addData=(e)=>{
        e.preventDefault();

        const {name,email,date,password}=inpval;

        if(name==="")
        {
            alert("Name field is required");
        }else if(email==="")
        {
            alert("Email field is required");
        }else if(!email.includes("@"))
        {
            alert("Please enter valid email address");
        }else if(date==="")
        {
            alert("Date field is required");
        }else if(password==="")
        {
            alert("Password field is required");
        }
        else if(password.length<5)
        {
            alert("Password length should be greater than 5");
        }else{

            localStorage.setItem("user",JSON.stringify([...data,inpval]));
            alert("User Added Successfully");
            history("/login");
        }

    }
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{width:"100%"}}>
          <h3 className="text-center col-lg-6">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              
              <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Name" />
             
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              
              <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
             
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <p>Enter Today's Date</p>
              
              <Form.Control type="date" name="date" onChange={getdata}  />
             
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              
              <Form.Control type="password"  name="password" placeholder="Password" onChange={getdata} />
            </Form.Group>
            
            <Button variant="primary" className="col-lg-6" onClick={addData} style={{backgroundColor:"green"}} type="submit">
              Submit
            </Button>
          </Form>

          <p className="mt-3">Already have an account <span><NavLink to="/login">Sign In</NavLink></span></p>
        </div>
       <Image/>
      </section>
    </div>
  );
};

export default Home;
