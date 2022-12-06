import Image from 'next/image'

const CardWrapper = ({children, isUnread}) => {
    return (
        <section className={`card ${isUnread ? "bg-accentLight1/60" : "bg-white" } flex gap-4 text-sm sm:text-lg`}>
            {children}
        </section>
    )
}

const User = ({user}) => {
    return (
        <span className='card-user'>{user} </span>
    )
}

const Action = ({action}) => {
    return (
        <span className='card-action'>{action} </span>
    )
}

const Post =  ({post}) => {
    return (
        <span className='card-post'>{post} </span>
    )
}

const Group = ({group}) => {
    return (
        <span className='card-group'>{group} </span>
    )
}

const Unread = () => {
    return (
        <div className='card-unread'></div>
    )
}

const TimeStamp = ({timeStamp}) => {
    return (
        <p>{timeStamp} ago</p>
    )
}

const Message = ({message}) => {
    return (
        <div className='card-message'>
            <p>{message}</p>
        </div>
    )
}

const Avatar = ({avatar}) => {
    return (
        <figure>
            <Image 
                src={`/images/${avatar}`} 
                width={60} 
                height={45} 
                alt="avatar" 
            />
        </figure>
    )
}

const Picture = ({picture}) => {
    return (
        <figure>
            <Image 
                src={`/images/${picture}`} 
                width={80} 
                height={80} 
                alt="picture" 
            />
        </figure>
    )
}

export {CardWrapper, User, Action, Post, Group, Unread, TimeStamp, Message, Avatar, Picture}

