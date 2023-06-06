import React,{useState, useEffect} from 'react'
import axios from 'axios';
import RecentPost from './recentPost'

const RecentPostBlock = () => {
    const [articlesData, setArticlesData] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
            setArticlesData(res.data.articles.slice(7,10))
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(articlesData)

  return (
    <>
        <div className='RecentPostBlock'>
            <h3 className='sec-heading'>
                Recent Posts
            </h3>
            <RecentPost recentPostDate={articlesData}/>
            {/* <hr/>
            <RecentPost/>
            <hr/>
            <RecentPost/> */}
        </div>
    </>
  )
}

export default RecentPostBlock
