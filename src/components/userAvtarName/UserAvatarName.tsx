import "./UserAvatarName.css"
import {useUser} from "../../hooks/UseUser"

const UserAvatarName = () => {
const {user, avatar} = useUser()
  return (
    <div className='user_avatar_name'>
        <img src={avatar} className='user_avatar' alt='user avatar' />
        <p>{user}</p>
    </div>
  )
}

export default UserAvatarName