import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Banner = () => {
  return (
    <>
        <div className='main-banner'>
            <div className='container'>
                <div className='main-banner-content'>
                    <h1 className='mb-4'>
                        <span>ARY</span> Digital News
                    </h1>
                    <div className='search-outer-div'>
                        <form>
                            <div className='d-flex'>
                                <input type='text' className='form-control me-3' placeholder='Search Here'/> 
                                <button type='submit' className='btn btn-primary'>
                                    <SearchIcon/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
