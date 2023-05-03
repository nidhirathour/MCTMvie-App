import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './home.css'
import { myContext } from './Context';
const TopRated = () => {
    const {search,Rated,SetRated,Popular,SetPopular}=useContext(myContext)
    // const [search,setSearch]=useState('')
    // const [Rated,SetRated]=useState([])
    // const[Popular,SetPopular]=useState([])

    const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=242efbc4712f4c03c1e8c51afa2afe05&query=";
    // const getSearchedMovies = async () => {
    //     try {
    //       const response = await axios.get(SEARCHAPI + search);
    //       SetRated(response.data.results);
    //       SetPopular(response.data.results)
    //     } catch (err) {
    //       console.log(err.message);
    //     }
    //   };
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
    let base_url="https://api.themoviedb.org/3";
    let url=base_url+"/movie/top_rated?=popularity.desc"+API_key;
     let url2=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    const gettopratedMovies = async () => {
        try {
          const response = await axios.get(url);
    
          console.log(response.data.results);
    
          SetRated(response.data.results);
        } catch (err) {
          console.log(err.message);
        }
      };
 const getpopularMovies = async () => {
        try {
          const response = await axios.get(url2);
    
          console.log(response.data.results);
    
          SetPopular(response.data.results);
        } catch (err) {
          console.log(err.message);
        }
      };
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
            gettopratedMovies();
            getpopularMovies();
        } else {
          getSearchedMovies();
        }
      }, [search]);





    //   useEffect(() => {
      
    //       gettopratedMovies();
    //       getpopularMovies();
        
    //   }, []);
      console.log(Rated);
  return (
    <>
    <div>
          <div >

   <div className="upper">
      <h1 style={{color:"white",fontSize:"50px",textAlign:"start",margin:"10px 20px"}}>TopRated</h1>
   </div>
   {/* <div >
<InputGroup className="mb-3 mt-50">
<Form.Control
onChange={(e) => setSearch(e.target.value)}
placeholder="Search"
aria-label="Search"
aria-describedby="basic-addon1"
className="inputwala"
value={search}
/>
</InputGroup>
</div>  */}
{/* cardsection */}

<div className="cardwala">


{
   Rated.map((e)=>(
    <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <Card  className='card mycard' style={{border:"none" ,backgroundColor:"#232425"  }}>
      <Card.Img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <Card.Body style={{backgroundColor: '#232425'}}>
        <Card.Title style={{color:"white"}}>{e.original_title}</Card.Title>
        
        <div className="part"><BsFillStarFill className='rating'/>&nbsp;&nbsp;&nbsp;&nbsp;
        <Card.Text style={{fontSize:"20px",color:"white"}}>{e.vote_average}</Card.Text>  </div> 
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
             {/* Popular wala pArt */}

             <div>
          <div >

   <div className="upper">
      <h1 style={{color:"white",fontSize:"50px",textAlign:"start",margin:"10px 20px"}}>Popular</h1>
   </div>

{/* cardsection */}

<div style={{boxShadow:"10px 10px 10px red"}} className="cardwala">


{
   Popular.map((e)=>(
    <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <Card  className='card mycard' style={{border:"none" ,backgroundColor:"#232425"  }}>
      <Card.Img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <Card.Body style={{backgroundColor: '#232425'}}>
        <Card.Title style={{color:"white"}}>{e.original_title}</Card.Title>
        
        <div className="part"><BsFillStarFill className='rating'/>&nbsp;&nbsp;&nbsp;&nbsp;
        <Card.Text style={{fontSize:"20px",color:"white"}}>{e.vote_average}</Card.Text>  </div> 
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
</>
 
  )
}

export default TopRated