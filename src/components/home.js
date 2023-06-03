import React from 'react'
import Header from './header'
import Footer from './footer'
import SimplePostWithDescription from './simplePostWithDescription'
import SimplePostWithoutDescription from './simplePostWithoutDescription'
import HorizontalPostWithDescription from './horizontalPostWithDescription'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-8 col-12'>

        <SimplePostWithDescription/>
                </div>
                <div className='col-lg-4 col-md-8 col-12'>

        <SimplePostWithoutDescription/>
                </div>
                <div className='col-lg-8 col-md-8 col-12'>

        <HorizontalPostWithDescription/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
