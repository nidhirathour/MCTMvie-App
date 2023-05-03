import React, { useContext,  useState } from 'react'
import './login.css'
import { myContext } from './Context';

const Login = () => {
  const { setlogin } = useContext(myContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

const handleLogin = () => {
  if(user.name === "nidhi" && user.password === "1234" ) {
    setlogin(true);
  } else {
    alert("Enter Proper Credentials");
  }
};

  return (
    <>

    <div className="main">
    <div className='loginmain'>
       <div className='leftlogin'>

       </div>
       <div className='rightlogin' >
        <form action="">
            <div className="rightwala">
                 <h1 style={{marginRight:"170px",color:"white",textAlign:"start"}}>Welcome Back,</h1>
                 <p style={{marginRight:"300px",color:"white"}}>Sign to Your Account</p>
                 <label htmlFor="" style={{color:"white",marginLeft:"110px"}}>Email</label>
                 <input onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }} type="email" />
                 <br />
                 <label style={{color:"white",marginLeft:"150px"}} htmlFor="">Password</label>
                 <input onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }} type="password" />
                <p style={{marginLeft:"300px",color:"white"}}>Forget Password ?</p>
                <button className='btnwala' onClick={handleLogin} >Sign In</button>
                <p style={{color:"white"}}>Don't have an Account?&nbsp;&nbsp;<span style={{color:"#ff4757"}}>Sign up</span></p>
           
            </div>
           </form>
       </div>
    </div>
    </div>
  
    </>
  )
}

export default Login;
