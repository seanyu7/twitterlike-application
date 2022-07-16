import React from "react";
import Post from "./Post";
import "./timeline.css";
import TweetBox from "./TweetBox";

function Timeline() {
  return (
    <div className="timeline">
      {/* header*/}
      <div className="timelineHeader">
        <h2>Home</h2>
      </div>
      {/* Tweetbox*/}
      <TweetBox />
      {/* Post*/}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Timeline;
