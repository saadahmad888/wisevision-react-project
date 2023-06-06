import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const SimplePostLightHeading = ({ simplePostData }) => {

    return (
        <>
            {simplePostData.map((item, index) => (
                <div className='SimplePostLightHeading' key={index}>
                    <div className=''>
                        <a href={item?.url}>
                            <img className='w-100 main-image' src={item?.urlToImage===null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg":item?.urlToImage} alt='News Image' />
                        </a>
                    </div>
                    <div className=''>
                        <a href="" className='mb-0 category'>
                            {item?.source.name}
                        </a>
                        <a href={item?.url} className='heading'>
                            {item?.title}
                        </a>
                    </div>
                    <div className='share-and-comment-info'>
                        <div className='me-3'>
                            <ShareIcon /> <span>358</span>
                        </div>
                        <div className=''>
                            <ModeCommentIcon /> <span>21</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SimplePostLightHeading
