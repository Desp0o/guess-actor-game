import React from 'react'
import "./LoginButtonComp.css"

interface LoginButtonProps {
    icon: string;
    text: string;
}

const LoginButtonComp: React.FC<LoginButtonProps> = ({icon, text}) => {
  return (
    <div className='login_button'>
        <img src={icon} alt='login icon' style={{width:"30px", height:"30px"}} />
        <p>{text}</p>
    </div>
  )
}

export default LoginButtonComp