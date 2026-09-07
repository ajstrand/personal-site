const ServerErrorFallback = ({error}) => {
    return (
        <div class="error-fallback-server">
            <p class="message">there was an error on the server</p>
            <p>url: {error.url}</p>
            <p>{error.error}</p>
        </div>
    )
}

export default ServerErrorFallback;
