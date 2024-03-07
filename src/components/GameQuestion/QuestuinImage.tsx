import React from 'react'
import "./GameQuestion.css"

interface CoverProps {
    image: string
}

const QuestuinImage:React.FC<CoverProps> = ({image}) => {
  return (
    <div className='question_image_backdrop'>
    <img src={image} className='QuestuinImage' alt='question image' />

    </div>
  )
}

export default QuestuinImage