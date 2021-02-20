import React from 'react';
import { NavLink} from 'react-router-dom';


import logo from '../../img/logo.png';

const Header = () => {
    return (
        <div className="row header">
        
            <div className="span5 logo">
            <a href="index.htm"><img src={logo} alt="Comics DB" /></a>
                <h5>Find your hero</h5>
            </div>
            
            <div className="span7 navigation">
            <div className="navbar hidden-phone">
                
                <ul className="nav">
                
                    <li><NavLink to='/' exact={true} activeClassName='active'>Home</NavLink></li>
                    <li><NavLink to="/characters/" exact={true}  activeClassName='active' >Characters</NavLink></li>
                    <li><NavLink to="/movies/" exact={true}  activeClassName='active' >Movies</NavLink></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="gallery-4col.htm">Gallery <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="gallery-3col.htm">Gallery 3 Column</a></li>
                            <li><a href="gallery-4col.htm">Gallery 4 Column</a></li>
                            <li><a href="gallery-6col.htm">Gallery 6 Column</a></li>
                            <li><a href="gallery-4col-circle.htm">Gallery 4 Round</a></li>
                            <li><a href="gallery-single.htm">Gallery Single</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="blog-style1.htm">Blog <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="blog-style1.htm">Blog Style 1</a></li>
                            <li><a href="blog-style2.htm">Blog Style 2</a></li>
                            <li><a href="blog-style3.htm">Blog Style 3</a></li>
                            <li><a href="blog-style4.htm">Blog Style 4</a></li>
                            <li><a href="blog-single.htm">Blog Single</a></li>
                        </ul>
                    </li>
                    <li><a href="page-contact.htm">Contact</a></li>
                </ul>

            </div>


            </div>
      
        </div>
    );
};

export default Header;
