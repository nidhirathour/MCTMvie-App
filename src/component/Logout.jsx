import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import { myContext } from './Context';

const Logout = () => {
  const navigate=useNavigate();
    const {setlogin}=useContext(myContext)
    return (
        <>
            <button className='logoutwala' style={{padding:"5px",width:"90px",borderRadius:"5px",marginTop:"-20px",fontSize:"17px"}} onClick={() => {
            setlogin(false);
            navigate("/");
          }}>Logout</button>
        </>
    )
}

export default Logout