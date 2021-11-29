import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/layout/navigation/Navbar';

// Buscar la forma de limpiar todos estos imports
import { HomePage } from '../views/home/HomePage';
import { CharactersPage } from '../views/characters/CharactersPage';
import { LocationsPage } from '../views/locations/LocationsPage';
import { EpisodesPage } from '../views/episodes/EpisodesPage';
import { NotFoundPage } from '../views/404/NotFoundPage';
import { CharacterPage } from '../views/characters/CharacterPage';
import { Footer } from '../components/layout/footer/Footer';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path = '/' element = { <HomePage /> } />

                    <Route path = '/characters' element = { <CharactersPage /> } />
                    <Route path='character/:characterId' element = { <CharacterPage /> } />

                    <Route path = '/locations' element = { <LocationsPage /> } />

                    <Route path = '/episodes' element = { <EpisodesPage /> } />

                    <Route path = '*' element = { <NotFoundPage /> } />
                </Routes>
            </div>
            
            <Footer />
        </BrowserRouter>
    )
}
