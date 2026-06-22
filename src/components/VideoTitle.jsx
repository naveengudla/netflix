import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoIcon from '@mui/icons-material/Info'

const VideoTitle = ({title , description}) => {
  return (
    <div className='w-screen h-screen px-16 pt-[20%] pb-4 absolute bg-gradient-to-r from-black text-white w-screen'>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p className='text-lg w-1/2 py-6 text-lg hidden md:block'>{description}</p>
      <div className='flex gap-4'>
        <button className='bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center gap-2 cursor-pointer'>
          <PlayArrowIcon />
          Play
        </button>
        <button className='bg-gray-500 bg-opacity-50 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 cursor-pointer'>
          <InfoIcon />
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
