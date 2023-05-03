// import React, { useContext } from 'react'
// import { myContext } from '../Context'
// import React, { useEffect, useState } from 'react'
import '../home.css'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsFillStarFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useState ,useEffect} from 'react';
import { myContext } from '../Context';
import { Link } from 'react-router-dom';
const Drama = () => {
    
    
    const [search,setSearch]=useState('')
    // const [ApiData,SetApiData]=useState([])
    const {ApiData,SetApiData} =useContext(myContext)
    // const [search, setSearch] = useState("");
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=242efbc4712f4c03c1e8c51afa2afe05&language=en-US&page=140';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getAllMovies = async () => {
    try {
      const response = await axios.get(url);

      console.log(response.data.results);

      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(ApiData);

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return (
    <div>
          <div >

   <div className="upper">
      <h1 style={{color:"white",textAlign:"start",marginLeft:"30px"}}>Drama Categories</h1>
   </div>

{/* cardsection */}

<div className="cardwala">


{
   ApiData.map((e)=>(
    <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <Card  className='card mycard' style={{border:"none" ,backgroundColor:"#232425"  }}>
      <Card.Img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <Card.Body style={{backgroundColor: '#232425'}}>
        <Card.Title style={{color:"white"}}>{e.original_title}</Card.Title>
        
        <div className="part"><BsFillStarFill className='rating'/>&nbsp;&nbsp;&nbsp;&nbsp;
        <Card.Text style={{fontSize:"20px",color:"white"}}>{e.vote_average}</Card.Text>  </div> 
        {/* <Button className='button' variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>   
    
        </div>
        </Link>
        </>
    ))
}
</div>
</div>
    </div>
  )
}

export default Drama
