import React from 'react';
import { CharacterCard } from '../../components/layout/cards/CharacterCard';
import { AppLoading } from '../../components/layout/loading/AppLoading';
import { useFetch } from '../../hooks/useFetch';

export const CharactersPage = () => {
    const ENDPOINT = process.env.REACT_APP_CHARACTERS_ENDPOINT;
    const { data, loading } = useFetch(ENDPOINT);
    
    return (
        <div className='row'>
            <div className='col-12'>
                <h1>Characters</h1>
            </div>
            {
                loading 
               ? <AppLoading />     
               : data.results.map( character => (
                   <CharacterCard 
                        character = { character } 
                        endpoint = { ENDPOINT } 
                        key = { character.id } />
               ))
            }
        </div>
    )
}
