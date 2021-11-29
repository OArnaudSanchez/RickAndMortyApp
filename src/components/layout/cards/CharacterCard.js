import React from 'react';
import PropTypes from 'prop-types';
import { LinkComponent } from '../navigation/LinkComponent';

export const CharacterCard = ({ character, endpoint }) => {
  const { id, image, name, species, status, gender, origin, location } = character;
  return (
       <div className='col-sm-6 col-md-4 col-lg-3 my-3 animate__animated animate__fadeIn'>
            <div className="card text-center rounded-3">
                <img 
                    src={ image } 
                    className="card-img"
                    alt={ name } />

                <div className="card-body text-start">
                    <h5 className="card-title">{ name }</h5>
                    <p className='card-text'>{ species }</p>
                    <p className='card-text'>Status: { status }</p>
                    <p className='card-text'>Gender: { gender }</p>
                    <p>Origin: { origin.name }</p>
                    <p>Location: { location.name }</p>
                    
                    <LinkComponent 
                        path={ `/${ endpoint }/${ id }` } 
                        redirectInsideApp = { true } />
                </div>
            </div>
        </div>
  );
};

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
    endpoint: PropTypes.string.isRequired,
};

