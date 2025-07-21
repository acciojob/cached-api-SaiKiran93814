import React from 'react';
import PostFetcher from './components/PostFetcher';

const App = () => {
  return (
    <div>
      <PostFetcher /> {/* Optionally pass userId={1} */}
    </div>
  );
};

export default App;
