const Main = ({ children }) => {
    return(
        <main className='row' style={{ minHeight : 'calc(100vh - 70px - 212px)' }}>
                { children }
        </main>
    )
}

export default Main