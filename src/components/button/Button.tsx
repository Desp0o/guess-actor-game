import React from "react"
import "./Button.css"

interface ButtonProps{
    title: string;
    path?: string;
    funName?: ()=>void
}

const Button:React.FC<ButtonProps> = ({title, funName}) => {
  return (
    <div className="button" onClick={funName}>
        <p className="button_name">{title}</p>
    </div>
  )
}

export default Button