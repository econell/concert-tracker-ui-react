import NoData from '../NoData';
import ArtistListItem from './ArtistListItem';

const ArtistList = ({ artists }) => {
    return (
        <>
            {artists.length > 0 ?
            artists.map((artist) => <ArtistListItem key={artist.id} artist={artist} />)
            : <NoData message="No Artists" />}
        </>
    )
}

export default ArtistList
