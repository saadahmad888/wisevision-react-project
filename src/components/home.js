import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Header from './header'
import Footer from './footer'
import SimplePostWithDescription from './simplePostWithDescription'
import SimplePostWithoutDescription from './simplePostWithoutDescription'
import HorizontalPostWithDescription from './horizontalPostWithDescription'
import RecentPost from './recentPost'
import RecentPostBlock from './recentPostBlock'
import MostPopularBlock from './mostPopularBlock'
import FollowUsBlock from './followUsBlock'
import SimplePostLightHeading from './simplePostLightHeading'
import { ArticleOutlined } from '@mui/icons-material';

const Home = () => {

  const [articlesData, setArticlesData] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee0eddb17efc47599c4fef608097f150").then((res) => {
            setArticlesData(res.data.articles.slice(1,3))
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // console.log(articlesData)

  return (
    <>
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12'>
              <div className=''>
                <div className='row'>
                  <div className='col-lg-8 col-12'>
                    <SimplePostWithDescription/>
                  </div>
                  <div className='col-lg-4 col-12'>
                    <SimplePostLightHeading simplePostData={articlesData}/>
                  </div>
                </div>
                <hr/>
                <div className='row'>
                  <h3 className='sec-heading'>
                    Highlights
                  </h3>
                    <SimplePostWithoutDescription/>
                  {/* <div className='col-lg-6 col-12'>
                    <SimplePostWithoutDescription/>
                  </div>
                  <div className='col-lg-6 col-12'>
                    <SimplePostWithoutDescription/>
                  </div>
                  <div className='col-lg-6 col-12'>
                    <SimplePostWithoutDescription/>
                  </div>
                  <div className='col-lg-6 col-12'>
                    <SimplePostWithoutDescription/>
                  </div> */}
                </div>
                <hr/>
                <div className='row'>
                  <div className='col-12'>
                  <HorizontalPostWithDescription/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <RecentPostBlock/>
              <MostPopularBlock/>
              <FollowUsBlock/>
            </div>
          </div>
            {/* <div className='row'>
                <div className='col-lg-4 col-md-8 col-12'>

        <SimplePostWithDescription/>
                </div>
                <div className='col-lg-4 col-md-8 col-12'>

        <SimplePostWithoutDescription/>
                </div>
                <div className='col-lg-8 col-md-8 col-12'>

        <HorizontalPostWithDescription/>
                </div>
            </div> */}
        </div>
        <Footer/>
    </>
  )
}

export default Home
