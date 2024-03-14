import React, { MouseEventHandler } from 'react'
import ThumbUp from '../SVG/ThumbUp';
import ThumbDawn from '../SVG/ThumbDawn';

interface FeedBackProps {
    image: string;
    funcLiked: MouseEventHandler<HTMLDivElement> | undefined;
    funcDisliked: MouseEventHandler<HTMLDivElement> | undefined;
}

const FeedBack:React.FC<FeedBackProps> = ({image, funcLiked, funcDisliked}) => {
  return (
    <div className='feedback_comp'>
        <img src={image} alt='feedback image' className='feedback_img' />

        <div className='feedback_thumbs'>
            <div onClick={funcDisliked}><ThumbDawn /></div>
            <div onClick={funcLiked}><ThumbUp /></div>
        </div>
    </div>
  )
}

export default FeedBack