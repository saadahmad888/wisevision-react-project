import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const SimplePostWithoutDescription = () => {
  return (
    <>
    <div className='SimplePostWithoutDescription'>
        <div className=''>
            <a href=''>
                <img className='w-100 main-image' src='https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg' alt='News Image'/>
            </a>
        </div>
        <div className=''>
            <a href='' className='mb-0 category'>
                MUSTREADS
            </a>
            <a href='' className='heading'>
                If you wanted to get rich, how would you do it?
            </a>
        </div>
        <div className='share-and-comment-info'>
            <div className='me-3'>
                <ShareIcon/> <span>358</span>
            </div>
            <div className=''>
                <ModeCommentIcon/> <span>21</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default SimplePostWithoutDescription
