import React, { useState, useEffect } from 'react'
import axios from 'axios';

const MostPopularBlock = () => {
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
    const randomItems = shuffledItems.slice(0, 5);

    // console.log(articlesData)
    return (
        <>
            <div className='MostPopularBlock'>
                <h3 className='sec-heading'>
                    5 Most Popular
                </h3>
                <div className='popular-list'>
                    <ol>
                        {randomItems.map((item, index) => (
                            <li key={index}>
                                <a href={item?.url}>
                                    {item?.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default MostPopularBlock
