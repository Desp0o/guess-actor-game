import "./UserAvatarName.css"
import { useEffect } from "react"
import {useUser} from "../hooks/UseUser"

const UserAvatarName = () => {
const {user, avatar} = useUser()
  useEffect(()=>{
    console.log(user);
    
  },[user])
  return (
    <div className='user_avatar_name'>
        <img src={avatar} className='user_avatar' alt='user avatar' />
        <p>{user}</p>
    </div>
  )
}

export default UserAvatarName