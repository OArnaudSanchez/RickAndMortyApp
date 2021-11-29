import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkComponent = ({ path, redirectInsideApp, linkText = 'Know More', cssClass = 'link', iconClass = '' }) => {
    return (
        <>
            {
                redirectInsideApp 
                ?  <Link 
                        className={ cssClass } 
                        to={ path }>
                            { linkText }
                    </Link>
                : 
                    <a 
                        href={ path } 
                        target='_blank' 
                        className={ cssClass } 
                        rel="noopener noreferrer">
                        
                        <i className={ iconClass }>
                            { linkText }
                        </i>
                    </a>
            }
        </>
    )
}

LinkComponent.propTypes = {
    path: PropTypes.string.isRequired,
    redirectInsideApp: PropTypes.bool.isRequired,
    cssClass: PropTypes.string,
    iconClass: PropTypes.string
}

