import React from "react";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Grid from "./elements/Grid";
import Actor from "./elements/Actor";
import Spinner from "./elements/Spinner";
import {useMovieFetch} from "./hooks/useMovieFetch";

const Movie = ({movieId}) => {
    const [state,loading,error] = useMovieFetch(movieId);
    console.log(state,'state');

    if (error) return <div>Something went wrong......</div>
    if(loading) return <Spinner/>
    return(
     <>
         <Navigation movieName={state.original_title}/>
         <MovieInfo movie={state}/>
         <MovieInfoBar
         time={state.runtime}
         budget={state.budget}
         revenue={state.revenue}
         />
         <Grid header="Actors">
             {state.actors.map(actor=>(
                 <Actor key={actor.credit_id} actor={actor}/> ))}

         </Grid>
     </>
    )

};
export default Movie;
