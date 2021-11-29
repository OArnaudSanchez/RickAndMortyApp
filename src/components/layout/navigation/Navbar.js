import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { homeCardsData } from '../../../data/homeCardsData';

export const Navbar = () => {

  const pathData = homeCardsData;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ps-5">
      <Link className="navbar-brand" to="/">
        Rick And Morty
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {
              pathData.map( path => (
                <NavLink 
                  className="nav-item nav-link" 
                  to={ path.linkPath } 
                  key = { path.linkText }>
                    { path.linkText }
                </NavLink>
              ))
          }
        </div>
      </div>
    </nav>
  );
};
