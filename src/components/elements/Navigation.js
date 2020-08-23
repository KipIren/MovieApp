import React from "react";
import {Link} from "@reach/router";
import {StyledNavigation} from "../styles/StyledNavigation";
import {BASE_PATH} from "../const";

const Navigation = ({movieName}) => {
    return(
       <StyledNavigation>
           <div className='navigation-content'>
               <Link to={BASE_PATH}>
                   <p>Home</p>
               </Link>
               <p>|</p>
               <p>{movieName}</p>
           </div>
       </StyledNavigation>
    )

};

export default Navigation;

