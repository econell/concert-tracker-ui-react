import { useState, useEffect } from 'react';
import ArtistApi from '../../api/ArtistApi';
import Loading from '../Loading';
import Errors from '../Errors';
import ArtistList from './ArtistList';

const Artist = ({ api }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState();
    const [artists, setArtists] = useState([]);

    const artistApi = new ArtistApi(api);

    useEffect(() => {
        artistApi.getAll().then((response) => {
            response.json().then((artists) => {
                setArtists(artists);
                setIsLoading(false);
            })
        }).catch((error) => {
            setErrors(JSON.stringify(error));
            setIsLoading(false);
        })
    }, [])

    return (
        <div>
            {isLoading && <Loading />}
            {!isLoading && errors && <Errors errors={errors} />}
            {!isLoading && !errors && <ArtistList artists={artists}/>}
        </div>
    )
}

export default Artist
