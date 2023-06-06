import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const SimplePostWithoutDescription = () => {

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
                <div className='col-lg-6 col-12' key={index}>
                    <div className='SimplePostWithoutDescription'>
                        <div className=''>
                            <a href={item?.url}>
                                <img className='w-100 main-image' src={item?.urlToImage===null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg":item?.urlToImage} alt='News Image' />
                            </a>
                        </div>
                        <div className=''>
                            <a href='' className='mb-0 category'>
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
                </div>

            ))}

        </>
    )
}

export default SimplePostWithoutDescription
