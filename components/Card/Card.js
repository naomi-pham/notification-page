import { CardWrapper, Action, Avatar, Group, Message, Picture, Post, TimeStamp, Unread, User } from "./CardElements"

const Card = ({data}) => {

    const {avatar, user, action, post, group, timeStamp, message, picture, isUnread} = data

    return (
        <CardWrapper isUnread={isUnread}>
            <Avatar avatar={avatar} user={user} />
            <div className='stack stack-xs w-full'>
                <div className="row-between">
                    <div>
                        <div className='leading-[1.3]'>
                            <User user={user} />
                            <Action action={action} />
                            {post && <Post post={post} />}
                            {group && <Group group={group} />}
                            {isUnread && <Unread />}
                        </div>
                        <TimeStamp timeStamp={timeStamp} />
                    </div>
                    {picture && <Picture picture={picture} />}
                </div>
                {message && <Message message={message} />}
            </div>
        </CardWrapper>
    )
}

export default Card