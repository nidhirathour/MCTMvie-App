import React, { useContext,useEffect } from 'react'
import './navbar.css'
import { SiThemoviedatabase } from "react-icons/si";
import Logout from './Logout';
import { myContext } from './Context';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
const Navbar = () => {
  const {search,setSearch,SetRated,SetPopular}=useContext(myContext)
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=242efbc4712f4c03c1e8c51afa2afe05&query=";
    const getSearchedMovies = async () => {
        try {
          const response = await axios.get(SEARCHAPI + search);
          SetRated(response.data.results);
          SetPopular(response.data.results)
        } catch (err) {
          console.log(err.message);
        }
      };
      useEffect(() => {
        if (search === "") {
            // gettopratedMovies();
            // getpopularMovies();
        } else {
          getSearchedMovies();
        }
      }, []);
  
  
  return (
    <div className='nav'>
        <div>
          <h2  className='left'><SiThemoviedatabase style={{fontSize:"60px",color:"rgb(1, 147, 147)"}}/></h2>          
        </div>
        <div className='right'>
            <ul>
            <div >
<InputGroup className=" maininput mb-3 mt-50">
<Form.Control
onChange={(e) => setSearch(e.target.value)}
placeholder="Search"
aria-label="Search"
aria-describedby="basic-addon1"
className="inputwala"
value={search}
/>
</InputGroup>
</div> 
                <li  style={{color:"white",border:"2px solid white",borderRadius:"50%"}}> <img style={{borderRadius:"50%"}} width={60} height={60} src="https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png" alt="" />   </li>
                <li className='logout' ><Logout  /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
