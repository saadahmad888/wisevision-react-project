import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom"
import Header from './header'
import Footer from './footer'
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import {Loader} from './loader'

const SearchListin = () => {
    const location = useLocation()
    const searchQuery = location.state?.title
    const [loading, setLoading] = useState(true);

    const [articlesData, setArticlesData] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
            setArticlesData(res.data.articles)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const filteredData = articlesData?.filter((item) => item.title?.toLowerCase().includes(searchQuery?.toLowerCase()))
    // console.log(searchQuery)

    return (
        <>
            <Header />
            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='fw-bold mt-3'>
                                Results
                            </h3>
                        </div>
                        {/* <SimplePostWithoutDescription /> */}
                        {loading ? <Loader height='200px' width='200px'/> : filteredData.length > 0 ? (
                            <>
                                {filteredData.map((item, index) => (
                            <div className='col-lg-6 col-12' key={index}>
                                <div className='SimplePostWithoutDescription'>
                                    <div className=''>
                                        <a href={item?.url}>
                                            <img className='w-100 main-image' src={item?.urlToImage === null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg" : item?.urlToImage} alt='News Image' />
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
                        ) : (
                            <h1>
                                No Data Found!
                            </h1>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchListin
