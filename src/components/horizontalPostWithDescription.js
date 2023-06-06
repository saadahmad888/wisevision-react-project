import React, { useState, useEffect } from 'react'
import axios from 'axios';

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

const HorizontalPostWithDescription = () => {

    const [articlesData, setArticlesData] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
            setArticlesData(res.data.articles)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // Create a copy of the original array
    const shuffledItems = [...articlesData];

    // Shuffle the array randomly using the Fisher-Yates algorithm
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }

    // Select the first five items from the shuffled array
    const randomItems = shuffledItems.slice(0, 4);

    // console.log(articlesData)


    return (
        <>
            {randomItems.map((item, index) => (
                <div className='col-12' key={index}>
                    <div className='HorizontalPostWithDescription'>
                        <div className='main-image-div'>
                            <a href={item?.url}>
                                <img className='main-img' src={item?.urlToImage===null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg":item?.urlToImage} alt='News Image' />
                            </a>
                        </div>
                        <div className='ms-3'>
                            <a href='' className='category'>
                                {item?.source.name}
                            </a>
                            <a href={item?.url} className='heading'>
                                {item?.title}
                            </a>
                            <p className='description'>
                                {item?.description}
                            </p>
                            <div className='author-info'>
                                <p>
                                    By <a href='' className='author-name'>{item?.author}</a> <span className='date'>- {formatTime(item?.publishedAt) + " " + "on" + " " + formatDate(item?.publishedAt)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div >

            ))}
        </>
    )
}

export default HorizontalPostWithDescription
