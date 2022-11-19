const Header = ({count, handleMark}) => {
    return (
        <header className='row-between'>
            <h1 className='row-end gap-3'>
                Notifications
                <span className='[ count ] [ py-1 px-3 sm:px-4 sm:py-1.5 ]'>
                    {count}
                </span>
            </h1>
            <p 
                onClick={handleMark} 
                className="hover:cursor-pointer">
                    Mark all as read
                </p>
        </header>
    )
}

export default Header