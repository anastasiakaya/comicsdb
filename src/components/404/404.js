import React from 'react';
import './404.css';
import opsImg from '../../img/icons/oops.svg';

const Page404 = () => {
    return (
        <div className="page-not-found" >
            <img src={opsImg} alt="Ooops" />
            <h2>Page not found</h2>
        </div> 
    );
}

export default Page404;