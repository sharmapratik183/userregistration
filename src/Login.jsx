import React,{useState}  from 'react';
import { Form,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Image from "./Image";

const Login = () => {
    const history=useNavigate();

    const [inpval,setInpval]=useState({
        email:"",
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
        const getUserArr=localStorage.getItem("user");

        const {email,password}=inpval;

         if(email==="")
        {
            alert("Email field is required");
        }else if(!email.includes("@"))
        {
            alert("Please enter valid email address");
        }else if(password==="")
        {
            alert("Password field is required");
        }
        else if(password.length<5)
        {
            alert("Password length should be greater than 5");
        }else{
            if(getUserArr && getUserArr.length)
            {
                const userdata=JSON.parse(getUserArr);
                const userlogin=userdata.filter((el,k)=>{
                    return el.email===email && el.password===password
                });

                if(userlogin.length===0)
                {
                    alert("Invalid Details");
                }else{
                    console.log("User Login Successfully");
                    localStorage.setItem("user_login",JSON.stringify(userlogin));
                    history("/details");
                }
            }
        }

    }
    return (
        <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{width:"100%"}}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
           

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              
              <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
             
            </Form.Group>

            

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              
              <Form.Control type="password"  name="password" placeholder="Password" onChange={getdata} />
            </Form.Group>
            
            <Button variant="primary" className="col-lg-6" onClick={addData} style={{backgroundColor:"green"}} type="submit">
              Submit
            </Button>
          </Form>

          <p className="mt-3">Already have an account <span>Sign In</span></p>
        </div>
       <Image/>
      </section>
    </div>
    );
};

export default Login;