import React from 'react';
import Home from "./Home";
import Header from "./elements/Header";
import {GlobalStyle} from './styles/GlobalStyle';
import {Router} from "@reach/router";
import NotFound from "./NotFound";
import Movie from "./Movie";
import {BASE_PATH} from "./const";

const App = () => {
    return(
        <>
            <Header/>
            <Router basepath={BASE_PATH}>
                <Home path='/'/>
                <Movie path='/:movieId'/>
                <NotFound default/>
            </Router>
            <GlobalStyle/>
        </>
        )

}

export default App;
