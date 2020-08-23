import React from "react";
import {StyledMovieThumb} from "../styles/StyledMovieThumb";
import {Link} from "@reach/router";
import {BASE_PATH} from "../const";

const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`${BASE_PATH}/${movieId}`}>
              <img className="clickable" src={image} alt="moviethumb" />
            </Link>
        ) : (
            <img src={image} alt="moviethumb" />
        )}
    </StyledMovieThumb>
)

export default MovieThumb;

