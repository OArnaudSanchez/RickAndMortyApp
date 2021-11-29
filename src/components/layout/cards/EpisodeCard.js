import React from 'react';
import PropTypes from 'prop-types';
import { LinkComponent } from '../navigation/LinkComponent';

export const EpisodeCard = ({ episode }) => {
    const { id, name, air_date, characters, created, url } = episode;
    const createdDate = new Date(created)?.toLocaleString().substring(0, 10);

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 my-3 animate__animated animate__fadeIn' key = { id }>
            <div className="card text-center rounded-3">
                <div className="card-body text-start">
                    <h5 className="card-title pb-1">{ name }</h5>
                    <p className='card-text'>Episode: { episode.episode }  ({ id })</p>
                    <p className='card-text'>Created: { createdDate }</p>
                    <p className='card-text'>Air Date: { air_date }</p>
                    <p className='card-text'>Characters: { characters?.length }</p>
                    <LinkComponent 
                        path={ url } 
                        redirectInsideApp = { false } />
                </div>
            </div>
        </div>
    )
}

EpisodeCard.propTypes = {
    episode: PropTypes.object.isRequired
}
