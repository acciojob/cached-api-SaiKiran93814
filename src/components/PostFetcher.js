// PostFetcher.jsx
import React, { useState, useEffect, useMemo } from 'react';

const PostFetcher = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Memoize fetch function based on userId
  const fetchPosts = useMemo(() => {
    return async () => {
      setLoading(true);
      try {
        const url = userId
          ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
          : `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
      <h2>📦 Posts {userId && `(User ID: ${userId})`}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostFetcher;
