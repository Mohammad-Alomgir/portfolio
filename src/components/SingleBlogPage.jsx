import { Padding } from '@mui/icons-material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SingleBlogPage = () => {
    const location =useLocation()
    const blog = location.state;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return (
    <div className='container' style={{paddingTop: "12rem"}}>
        <button onClick={goBack} className='themeButton' >back</button>
      <div className="div">
        {blog.id},{blog.img}
      </div>
    </div>
  )
}

export default SingleBlogPage
