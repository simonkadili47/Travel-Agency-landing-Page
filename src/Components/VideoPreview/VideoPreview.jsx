import React from 'react'
import video_1 from '../VideoPreview/video 1.webp'
import video_2 from '../VideoPreview/video 2.webp'
import video_3 from '../VideoPreview/video 3.webp'
function VideoPreview() {
  return (
    <div className=' flex pt-10 pl-28 justify-center mr-44 pb-2 '>
        <div className='w-52 h-56   object-cover pt-8'>
            <img src={video_2} alt="" />
        </div>
        <div className='w-96 h-96 object-cover pl-5 pt-5'>
            <img src={video_1} alt="" />
        </div>
        <div className='w-60 h-60  object-cover pt-8 pl-5'>
            <img src= {video_3} alt="" />
        </div>
    </div>
  )
}

export default VideoPreview