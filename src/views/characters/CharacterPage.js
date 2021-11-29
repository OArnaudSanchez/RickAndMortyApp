import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { AppLoading } from '../../components/layout/loading/AppLoading';
import { useFetch } from '../../hooks/useFetch';
import { LinkComponent } from '../../components/layout/navigation/LinkComponent';

export const CharacterPage = () => {
    
    const navigate = useNavigate();
    const { characterId } = useParams();
    const ENDPOINT = `${ process.env.REACT_APP_CHARACTERS_ENDPOINT }/${ characterId }`;
    const { data, loading } = useFetch(ENDPOINT);
    const { image, name, species, status, gender, origin, location }  = !!data && data;
    const handleReturn = () => navigate( -1 );

    return (
        <div>
            {
                loading
                ? <AppLoading />
                :
                <div className="row mt-4 animate__animated animate__fadeIn">
                    <div className="col-auto">
                        <img 
                            src={ image } 
                            alt={ name } 
                            className='rounded' />
                    </div>
                    
                    <div className="col-auto">
                        <h1>{ name }</h1>
                        <p>Gender: { gender }</p>
                        <p>Species: { species }</p>
                        <p>Statue: { status }</p>
                        <p>Origin: 
                            <LinkComponent 
                                path = { origin.url } 
                                redirectInsideApp = { false }
                                cssClass = 'normal-link'
                                iconClass = 'm-1 fas fa-link'
                                linkText = { origin.name } /> 
                        </p>
                        <p>Location: 
                            <LinkComponent
                                path = { location.url }
                                redirectInsideApp = { false }
                                cssClass = 'normal-link'
                                iconClass = 'm-1 fas fa-link'
                                linkText = { location.name } />
                        </p>
                        <button className='link' onClick={ handleReturn }>Go Back</button>
                    </div>
                    <div className='col-12 mt-2'>
                        <hr />
                    </div>
                        
                </div>
            }

        </div>
    )
}
