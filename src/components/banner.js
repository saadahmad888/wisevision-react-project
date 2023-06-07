import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';

const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate('/search',{state:{title: searchInput}})

        // navigate('/search')
        // window.location.href="/search"
    }
  return (
    <>
        <div className='main-banner'>
            <div className='container'>
                <div className='main-banner-content'>
                    <h1 className='mb-4'>
                        <span>ARY</span> Digital News
                    </h1>
                    <div className='search-outer-div'>
                            <div className='d-flex'>
                                <input type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='form-control me-3' placeholder='Search Here'/> 
                                <button type='submit' onClick={handleSearch} className='btn btn-primary'>
                                    <SearchIcon/>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
