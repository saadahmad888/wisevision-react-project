import React from 'react'
import Header from './header'
import Footer from './footer'
import SimplePostWithDescription from './simplePostWithDescription'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>

        <SimplePostWithDescription/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
