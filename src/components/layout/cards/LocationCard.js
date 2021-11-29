import React from 'react';
import PropTypes from 'prop-types';
import { LinkComponent } from '../navigation/LinkComponent';

export const LocationCard = ({ location }) => {
    const { name, dimension, type, created, residents, url } = location;
    const createdDate = new Date(created)?.toLocaleString().substring(0, 10);
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 my-3 animate__animated animate__fadeIn'>
            <div className="card text-center rounded-3">
                <div className="card-body text-start">
                    <h5 className="card-title pb-1">{ name }</h5>
                    <p className='card-text'>Dimension: { dimension }</p>
                    <p className='card-text'>Created: { createdDate }</p>
                    <p className='card-text'>Type: { type }</p>
                    <p className='card-text'>Residents: { residents?.length }</p>
                    <LinkComponent 
                        path={ url } 
                        redirectInsideApp = { false } />
                </div>
            </div>
        </div>
    )
}

LocationCard.propTypes = {
    location: PropTypes.object.isRequired
}