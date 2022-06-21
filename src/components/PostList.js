import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const RenderList = ({ posts }) =>
  posts.map((post) => (
    <div className="item" key={post.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UserHeader userId={post.userId} />
      </div>
    </div>
  ));

const PostList = (props) => {
  const { fetchPostsAndUsers, posts } = props;

  useEffect(() => {
    // fetchPosts();
    fetchPostsAndUsers();
  }, []);
  // fetchPosts();

  return (
    <div className="ui relaxed divided list">
      <RenderList posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
