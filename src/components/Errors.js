const Errors = ({errors}) => {
    return (
        <div>
            <p>Unable to complete request. Please try again.</p>
            {errors && <p>Errors: {errors}</p>}
        </div>
    )
}

export default Errors
