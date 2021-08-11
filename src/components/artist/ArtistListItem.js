const ArtistListItem = ({artist}) => {
    return (
        <div>
            <h3>{artist.name} ({artist.id})</h3>
        </div>
    )
}

export default ArtistListItem
