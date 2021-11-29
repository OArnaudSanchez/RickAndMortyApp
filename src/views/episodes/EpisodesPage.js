import React from 'react';
import { EpisodeCard } from '../../components/layout/cards/EpisodeCard';
import { AppLoading } from '../../components/layout/loading/AppLoading';
import { useFetch } from '../../hooks/useFetch';

export const EpisodesPage = () => {

    const ENDPOINT = process.env.REACT_APP_EPISODES_ENDPOINT;
    const { data, loading } = useFetch(ENDPOINT);

    return (
        <div className='row'>
            <div className='col-12'>
                <h1>Episodes</h1>
            </div>
            {
                loading 
                ? <AppLoading />
                : data.results.map( episode => (
                    <EpisodeCard 
                        episode = { episode } 
                        key = { episode.id } />
                ))
            }
        </div>
    )
}
