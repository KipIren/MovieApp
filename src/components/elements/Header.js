import React from "react";
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';
import {StyledHeader,StyledRMDBLogo,StyledTMDBLogo} from '../styles/StyledHeader'
import {Link} from "@reach/router";
import {BASE_PATH} from "../const";

const Header = () => {
    return(
        <StyledHeader>
            <div className='header-content'>
                <Link to={BASE_PATH}>
                  <StyledRMDBLogo src={RMDBLogo} alt='rmdb-logo'/>
                </Link>
                <StyledTMDBLogo src={TMDBLogo} alt='tmbd-logo'/>
            </div>
        </StyledHeader>
    )

};

export default Header;
