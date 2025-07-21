// App.js
import React from 'react';
import PostFetcher from './components/PostFetcher';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>📰 Cached API with useMemo</h1>

      {/* All posts */}
      <PostFetcher />

      {/* Posts filtered by userId */}
      <PostFetcher userId={1} />
    </div>
  );
};

export default App;
