import React,{useState, useEffect} from 'react'
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const SimplePostWithDescription = () => {
    const [articlesData, setArticlesData] = useState([])
    // const articles = axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
            // console.log(res.data)
            setArticlesData(res.data.articles[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // const article1 = articlesData[0]
    // console.log(articlesData)
  return (
    <>
    <div className='SimplePostWithDescription'>
        <div className=''>
            <a href={articlesData?.url}>
                <img className='w-100 main-image' src={articlesData?.urlToImage===null ? "https://www.themes247.net/html5/goodnews/images/thumbs/4.jpg":articlesData?.urlToImage} alt='News Image'/>
            </a>
        </div>
        <div className=''>
            <a href='' className='mb-0 category'>
                {/* {articlesData?.source.name} */}
            </a>
            <a href={articlesData?.url} className='heading'>
                {articlesData?.title}
            </a>
        </div>
        <div className=''>
            <p>
                {articlesData?.description}
            </p>
        </div>
        <div className='author'>
            <p>
                By <a href=''>{articlesData?.author}</a>
            </p>
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

export default SimplePostWithDescription
