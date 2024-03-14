import React from 'react'
import ThumbUp from '../SVG/ThumbUp';
import ThumbDawn from '../SVG/ThumbDawn';

interface FeedBackProps {
    image: string;
}

const FeedBack:React.FC<FeedBackProps> = ({image}) => {
  return (
    <div className='feedback_comp'>
        <img src={image} alt='feedback image' className='feedback_img' />

        <div className='feedback_thumbs'>
            <ThumbDawn />
            <ThumbUp />
        </div>
    </div>
  )
}

export default FeedBack