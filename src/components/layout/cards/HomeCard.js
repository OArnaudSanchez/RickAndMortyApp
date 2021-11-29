import React from 'react';
import PropTypes from 'prop-types';
import { LinkComponent } from '../navigation/LinkComponent';

export const HomeCard = ({ iconClass, linkText, linkPath }) => {
  return (
    <div className='col my-3'>
      <div className="card text-center rounded-3">
        <span className='mt-4'>
          <i className={ iconClass }></i>
        </span>
        <div className="card-body">
          <h5 className="card-title mb-3">{ linkText }</h5>
          <LinkComponent 
            path={ linkPath } 
            redirectInsideApp = { true } />
        </div>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};
