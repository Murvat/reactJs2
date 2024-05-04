import './App.css';
import React from 'react';
// import Button from './Button';
import PlaceholderPost from './PlaceholderPost';
import PlaceholderPostHook from './PlaceholderPostHook';
import Comment from './Comment';
import Comment2 from './Comment2';
import CommentHook from './CommentHook';



function App() {
  return (
    <>
      <PlaceholderPostHook />
      <CommentHook />
      <Comment />
      <Comment2 />
    </>
  );
}

export default App;
