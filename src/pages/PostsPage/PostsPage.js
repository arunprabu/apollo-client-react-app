import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PostsPage = () => {
  return (
    <div className="row">
      <h1>Posts</h1>
      
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">post title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">#1</h6>
            <p className="card-text">post content</p>
            <Link to={`/posts/1`} className="card-link">
              View Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
