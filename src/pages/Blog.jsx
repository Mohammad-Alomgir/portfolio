import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Service from "../components/GlobalService";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  console.log(blogs && blogs, "alomgir blogs");
  return (
    <BlogWrapper id="Blog">
      <div className="container">
        <div className="section-heading">
          <h1 className="element">Blog</h1>
        </div>
        <div className="blogs">
          {blogs &&
            blogs.map((blog) => (
              <div key={blog.id} className="blog">
                <img src={blog.img} alt={blog.img} />
                <div className="blog-body">
                  <h1>{blog.title}</h1>
                  <Link
                    to="/categoryblogs"
                    className="themeButton"
                    blogId={blog.id}
                    state={{
                      blogId: blog.id,
                      blog: blogs,
                    }}
                  >
                    Show All
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </BlogWrapper>
  );
};
const BlogWrapper = styled.div`
  padding: 8rem 0;
  
  .container {
    .blogs {
      margin-top: 8rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; // Default for larger screens
      gap: 3rem;
      transition: 0.9s;

      .blog {
        background-image: linear-gradient(
          #130428 7%,
          #251043 34%,
          #38126d 57%,
          #261045,
          85%,
          #190634 100%
        );
        border-radius: 30px;
        position: relative;
        transition: 0.9s;
        overflow: hidden;

        img {
          height: 100%;
          background-color: ${({ theme }) => theme.colors.textSecoundary};
          border-radius: 30px;
          transition: 0.9s;
        }

        &:hover .blog-body {
          opacity: 0.8;
          visibility: visible;
          bottom: 0;
          transition: 0.9s;
        }

        .blog-body {
          position: absolute;
          background-color: #38126d;
          left: 50%;
          padding: 15px;
          bottom: -113px;
          transform: translateX(-50%);
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transition: 1s;

          h1 {
            font-size: 2rem;
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 570px) {
    .container{
      .blogs {
      margin-top: 8rem;
      display: grid;
      grid-template-columns: 1fr; // Single column for mobile
      gap: 3rem;
      transition: 0.9s;
    }
    }
  }
`;

export default Blog;
