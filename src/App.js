import './App.css';
import { useContext } from 'react';
import Login from './component/Login';

import Home from './component/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import Allmovies from './component/movies/Allmovies';
import Comedy from './component/movies/Comedy'
import Drama from './component/movies/Drama'
import Action from './component/movies/Action'
import Moviesdetails from './component/movies/Moviesdetails';
import { myContext } from './component/Context';
import TopRated from './component/TopRated';




function App() {
    const { login } = useContext(myContext);
    return (

        <
        div className = "App" > { /* <Login/> */ }

        <
        Routes >


        <
        Route path = '/'
        element = { login ? < Home / > : < Login / > } >
        <
        Route path = ''
        element = { < Navigate to = 'toprated' / > }
        />  <
        Route path = 'toprated'
        element = { login ? < TopRated / > : < Login / > }
        /> <
        Route path = 'allmovies'
        element = { login ? < Allmovies / > : < Login / > }
        /> <
        Route path = 'comedy'
        element = { login ? < Comedy / > : < Login / > }
        /> <
        Route path = 'action'
        element = { login ? < Action / > : < Login / > }
        /> <
        Route path = 'drama'
        element = { login ? < Drama / > : < Login / > }
        /> <
        /Route>

        <
        Route path = "/MoviedetailPage/:id"
        element = { login ? < Moviesdetails / > : < Login / > }
        /> <
        /Routes> 


        <
        /div>
    );
}

export default App;