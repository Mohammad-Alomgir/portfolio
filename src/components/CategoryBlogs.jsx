import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryBlogs = () => {
  const [relatedCategory, setRelatedCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const location = useLocation();
  const posts = location.state.blog;
  const blogId = location.state.blogId;
  const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  useEffect(() => {
    let relatedCategory = [];
    posts &&
      posts.filter((post) => {
        if (post.id !== blogId) {
          relatedCategory.push(post);
        } else if (post.id === blogId) {
          setSelectedCategory(post);
        }
      });
    setRelatedCategory(relatedCategory);
  },[posts,blogId])

  console.log(relatedCategory && relatedCategory);
  console.log(selectedCategory && selectedCategory);
  return (
    <CategoryBlogWrapper>
      <div className="container">
      <button onClick={goBack} className="themeButton">back</button>
        <div className="posts">
          {selectedCategory &&
            selectedCategory.posts &&
            selectedCategory.posts.map((blog) => (
              <div key={blog.id} className="blog">
                <img src={blog.img} alt={blog.img} />
                <div className="blog-body">
                  <h1>{blog.title}</h1>
                  <Link to="/singleBlogPage" className="themeButton" state={blog}
                 >Show All</Link>
                </div>
              </div>
            ))}
        </div>
        <div className="related-category">
          <div className="section-heading">
           <h1 className="element">May you interested</h1>
          </div>
         <div className="posts">
          {
            relatedCategory && relatedCategory.map((relatedCategory) => <div key={relatedCategory.id} className="blog">
            <img src={relatedCategory.img} alt={relatedCategory.img} />
            <div className="blog-body">
              <h1>{relatedCategory.title}</h1>
              <Link to="/categoryblogs" className="themeButton" blogId={relatedCategory.id} state={{
                    blogId: relatedCategory.id,
                    blog: posts
                  }}>Show All</Link>
            </div>
          </div>)
          }
        </div>
        </div>
      </div>
    </CategoryBlogWrapper>
  );
};
const CategoryBlogWrapper = styled.div`
  padding: 12rem 0 12rem 0;
  .container {
    .posts {
      margin-top: 8rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
      .blog {
        background-image: linear-gradient(
          #130428 7%,
          #251043 34%,
          #38126d 57%,
          #261045,
          85%,
          #190634 100%
        );
        /* padding: 10px 15px 50px 15px; */
        border-radius: 30px;
        position: relative;
        transition: 0.9s;
        img {
          height: 100%;
          background-color: ${({ theme }) => theme.colors.textSecoundary};
          border-radius: 30px;
        }
        &:hover .blog-body {
          display: block;
          bottom: 0;
          transition: 0.8s;
        }
        .blog-body {
          position: absolute;
          background-color: #38126d;
          display: block;
          left: 50%;
          padding: 15px;
          bottom: -113px;
          transform: translateX(-50%);
          width: 100%;
          display: none;
          transition: 1s;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;

          h1 {
            font-size: 2rem;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
export default CategoryBlogs;
