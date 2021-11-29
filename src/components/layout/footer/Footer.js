import React from 'react';
import { LinkComponent } from '../navigation/LinkComponent';

export const Footer = () => {
    return (
        <footer className='navbar navbar-expand-sm navbar-dark bg-dark fixed-bottom'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className='text-white'>
                            &copy; All rights reserved.
                            Created by 
                            
                            <LinkComponent 
                                path = 'https://www.linkedin.com/in/oarnaudsanchez'
                                redirectInsideApp = { false }
                                linkText = ''
                                cssClass = ''
                                iconClass = 'fab fa-linkedin footer-icon' />

                            <LinkComponent 
                                path = 'https://github.com/OArnaudSanchez/'
                                redirectInsideApp = { false }
                                linkText = ''
                                cssClass = ''
                                iconClass = 'fab fa-github footer-icon'/>
                        </span>

                    </div>
                </div>
            </div>
        </footer>
    )
}
