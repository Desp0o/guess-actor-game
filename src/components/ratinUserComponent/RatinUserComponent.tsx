import React from 'react'
import "./RatinUserComponent.css"

interface RatinUserComponentProps {
    index: number;
    avatar: string;
    name: string;
    score: number
}

const RatinUserComponent:React.FC<RatinUserComponentProps> = ({index, avatar, name, score}) => {
  return (
    <div className='user_comp_for_rating'>
        <p className='position_num'>{index}</p>
        <div className='avatar_name_rating'>
            <img loading='lazy' src={avatar} className='rating_avatar_img' alt='avatar' /> 
            <p>{name}</p>
        </div>
        <p className='rating_score'>{score}</p>
    </div>
  )
}

export default RatinUserComponent