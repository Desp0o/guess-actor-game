import React from 'react'
import "./UserAvatarName.css"

interface UserInfo {
    name: string,
    avatar: string,
}

const UserAvatarName:React.FC<UserInfo> = ({avatar, name}) => {
  return (
    <div className='user_avatar_name'>
        <img src={avatar} className='user_avatar' alt='user avatar' />
        <p>{name}</p>
    </div>
  )
}

export default UserAvatarName