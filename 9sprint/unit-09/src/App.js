import './App.css';
import React from 'react';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';
import CommentHook2 from './CommentHook2';
import CommentsListHook from './CommentsListHook';
import Comments2ListHook from './Comments2ListHook';


function App() {
  return (
    <>
      {/* <PlaceholderPostHook /> */}
      <CommentHook />
      <CommentHook2 />
    </>
  );
}

export default App;
