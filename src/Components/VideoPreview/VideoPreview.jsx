import React from 'react';
import video_1 from '../VideoPreview/video 1.webp';
import video_2 from '../VideoPreview/video 2.webp';
import video_3 from '../VideoPreview/video 3.webp';

function VideoPreview() {
  return (
    <div className='py-8 px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-center gap-4'>
        <div className='w-full md:w-52 h-36 md:h-56'>
          <img src={video_2} alt="Video Preview 2" className='w-full h-full object-cover rounded-md' />
        </div>
        <div className='w-full md:w-80 h-48 md:h-96'>
          <img src={video_1} alt="Video Preview 1" className='w-full h-full object-cover rounded-md' />
        </div>
        <div className='w-full md:w-60 h-36 md:h-60'>
          <img src={video_3} alt="Video Preview 3" className='w-full h-full object-cover rounded-md' />
        </div>
      </div>
    </div>
  );
}

export default VideoPreview;
