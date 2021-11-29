import React from 'react';
import ReactLoading from 'react-loading';

export const AppLoading = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <ReactLoading 
                type='spinningBubbles' 
                color='#000' 
                height='10%' 
                width='10%' />
        </div>
    )
}
