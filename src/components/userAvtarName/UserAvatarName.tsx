import "./UserAvatarName.css"
import userDefaultIcon from "../../assets/icons/userDefault.png"
import {useUser} from "../../hooks/UseUser"

const UserAvatarName = () => {
const {user, avatar} = useUser()
  return (
    <div className='user_avatar_name'>
        <img src={user ? avatar : userDefaultIcon} className='user_avatar' alt='user avatar' />
        <p className="username">{user}</p>
    </div>
  )
}

export default UserAvatarName