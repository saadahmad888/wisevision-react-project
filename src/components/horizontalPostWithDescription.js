import React from 'react'

const HorizontalPostWithDescription = () => {
  return (
    <>
        <div className='HorizontalPostWithDescription'>
            <div className='main-image-div'>
                <a href=''>
                    <img className='main-img' src='https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg' alt='News Image'/>
                </a>
            </div>
            <div className='ms-3'>
                <a href='' className='category'>
                    Social Media
                </a>
                <a href="" className='heading'>
                    If you wanted to get rich, how would you do it?
                </a>
                <p className='description'>
                    {/* I think your best bet would be to start or join a startup. */}
                    I think your best bet would be to start or join a startup. That's been a reliable way to get rich for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very similar.
                </p>
                <div className='author-info'>
                    <p>
                        By <a href='' className='author-name'>Mike Tyson</a> <span className='date'>- 16 hours ago</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HorizontalPostWithDescription
