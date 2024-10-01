import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SingleBlogPage = () => {
  const location = useLocation();
  const blog = location.state;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SingleBlogWrapper>
      <div className="container">
        <button onClick={goBack} className="themeButton">Back</button>
        <div className="blog-content">
          <img src={blog.img} alt={blog.title} />
          <div className="blog-body">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
        </div>
      </div>
    </SingleBlogWrapper>
  );
};

const SingleBlogWrapper = styled.div`
  padding-top: 12rem;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;

    .themeButton {
      background-color: #38126d;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    .blog-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
        max-width: 800px;
        height: auto;
        border-radius: 10px;
        margin-bottom: 2rem;
      }

      .blog-body {
        text-align: left;
        padding: 2rem;
        background-color:#38126d;
        border-radius: 10px;

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.8;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
      
      .blog-content {
        img {
          max-width: 100%;
        }

        .blog-body {
          padding: 1rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .container {
      .blog-body {
        h1 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default SingleBlogPage;
