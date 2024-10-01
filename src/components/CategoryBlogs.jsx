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
  };

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
  }, [posts, blogId]);

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
                  <p>{blog.description.slice(1, 200)}</p>
                  <Link to="/singleBlogPage" className="themeButton" state={blog}>Show All</Link>
                </div>
              </div>
            ))}
        </div>
        <div className="related-category">
          <div className="section-heading">
            <h1 className="element">May you be interested</h1>
          </div>
          <div className="related-category-posts">
            {relatedCategory && relatedCategory.map((relatedCategory) => (
              <div key={relatedCategory.id} className="related-category-blog">
                <img src={relatedCategory.img} alt={relatedCategory.img} />
                <div className="related-category-blog-body">
                  <h1>{relatedCategory.title}</h1>
                  <Link to="/categoryblogs" className="themeButton" blogId={relatedCategory.id} state={{ blogId: relatedCategory.id, blog: posts }}>Show All</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CategoryBlogWrapper>
  );
};

const CategoryBlogWrapper = styled.div`
  padding: 9rem 0 12rem 0;

  .container {
    .posts {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;

      .blog {
        background-image: linear-gradient(#130428 7%, #251043 34%, #38126d 57%, #261045, 85%, #190634 100%);
        border-radius: 15px;
        padding: 10px 20px;
        transition: 0.9s;

        img {
          background-color: ${({ theme }) => theme.colors.textSecondary};
          border-radius: 30px;
          transition: 0.8s;
          object-fit: cover;
          height: 300px;
          width: 100%;
        }

        img:hover {
          transform: scale(1.1);
        }

        .blog-body {
          background-color: #38126d;
          padding: 15px;
          transition: 1s;

          h1 {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }

          p {
            margin-bottom: 20px;
          }
        }
      }
    }

    .related-category {
      margin-top: 8rem;

      .related-category-posts {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;

        .related-category-blog {
          background-image: linear-gradient(#130428 7%, #251043 34%, #38126d 57%, #261045, 85%, #190634 100%);
          border-radius: 30px;
          position: relative;
          transition: 0.9s;
          z-index: 999;
          overflow: hidden;

          img {
            background-color: ${({ theme }) => theme.colors.textSecondary};
            border-radius: 30px;
            transition: 0.8s;
            object-fit: cover;
            width: 100%;
          }

          img:hover {
            transform: scale(1.1);
          }

          .related-category-blog-body {
            position: absolute;
            background-color: #38126d;
            padding: 15px;
            bottom: -113px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            opacity: 0;
            visibility: hidden;
            transition: 0.4s;

            h1 {
              font-size: 2rem;
              margin-bottom: 20px;
            }
          }

          &:hover .related-category-blog-body {
            bottom: 0;
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      .posts {
        grid-template-columns: 1fr 1fr;
      }

      .related-category .related-category-posts {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      .posts {
        grid-template-columns: 1fr;
      }

      .related-category .related-category-posts {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default CategoryBlogs;
