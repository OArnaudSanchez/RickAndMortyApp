import React from 'react';
import { LocationCard } from '../../components/layout/cards/LocationCard';
import { AppLoading } from '../../components/layout/loading/AppLoading';
import { useFetch } from '../../hooks/useFetch';

export const LocationsPage = () => {

    const ENDPOINT = process.env.REACT_APP_LOCATIONS_ENDPOINT;
    const { data, loading } = useFetch(ENDPOINT);

    return (
        <div className='row'>
            <div className='col-12'>
                <h1>Locations</h1>
            </div>
            {
                loading 
                ? <AppLoading />
                : data.results.map( location => (
                    <LocationCard 
                        location = { location } 
                        key = { location.id } />
                ))
            }
        </div>
    )
}
