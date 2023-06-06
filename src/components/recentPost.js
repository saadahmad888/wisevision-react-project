import React from 'react'

const formatDate = (dateValue) => {
    const date = new Date(dateValue);
    const formattedDate = date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  
    return formattedDate;
  };
  
  const formatTime = (dateValue) => {
    const date = new Date(dateValue);
    const formattedTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    return formattedTime;
  };

const RecentPost = ({recentPostDate}) => {
  return (
    <>
        {recentPostDate.map((item, index) => (
        <div className='RecentPost'  key={index}>
            <div className='main-image-div'>
                <a href={item?.url}>
                    <img className='main-img' src={item?.urlToImage===null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg":item?.urlToImage} alt='News Image'/>
                </a>
            </div>
            <div className='ms-3'>
                <a href={item?.url} className='heading'>
                    {item?.title}
                </a>
                <div className='post-date-and-time'>
                    <p>
                        {formatTime(item?.publishedAt) + " " + "on" + " " + formatDate(item?.publishedAt)}
                    </p>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}

export default RecentPost
