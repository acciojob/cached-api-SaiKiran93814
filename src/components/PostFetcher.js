import React, { useState, useEffect, useMemo } from 'react';

const PostFetcher = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useMemo(() => {
    return async () => {
      setLoading(true);
      try {
       const url = userId
  ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  : 'https://jsonplaceholder.typicode.com/posts';

        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📰 Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {posts.map(post => (
            <li key={post.id} style={styles.listItem}>
              <strong>{post.title}</strong>
              <p style={styles.body}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    fontFamily: 'Arial, sans-serif',
    overflowY: 'auto',
    height: '80vh', // scrollable view
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '1.5rem',
  },
  listItem: {
    marginBottom: '1.5rem',
  },
  body: {
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
  },
};

export default PostFetcher;
