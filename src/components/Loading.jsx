function Loading({ width, height, backgroundColor }) {
    return (
        <div className="loading" style={{ 
            width, 
            height, 
            backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.3s ease-in-out'
        }}>
            <div className="loading-skeleton" style={{
                width: '70%',
                height: '40px',
                marginBottom: '20px',
                backgroundColor: backgroundColor === '#1A1A1A' ? '#2a2a2a' : '#f0f0f0',
                borderRadius: '4px'
            }}></div>
            <div className="loading-skeleton" style={{
                width: '90%',
                height: '300px',
                backgroundColor: backgroundColor === '#1A1A1A' ? '#2a2a2a' : '#f0f0f0',
                borderRadius: '4px'
            }}></div>
        </div>
    );
}

export default Loading;