import { useMemo } from 'react';
import { HomeCard } from '../../components/layout/cards/HomeCard';
import { getCardsInformation } from '../../selectors/homeCarsSelector';

export const HomePage = () => {

  const cardInformation = useMemo( () => getCardsInformation(), [] );

  return (
    <div className="row mt-5">
      <div className="col-12">
        <h1 className="text-center">Rick and Morty React Project</h1>
      </div>
      <div className="col">
        <div className="row row-cols-1 row-cols-md-3 animate__animated animate__fadeIn">
            {
                cardInformation.map( (card) => (
                  <HomeCard 
                    { ...card } 
                    key = { card.linkPath } />
                ))
            }
        </div>
      </div>
    </div>
  );
};
