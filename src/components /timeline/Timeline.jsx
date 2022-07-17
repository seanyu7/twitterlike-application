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
      <Post
        displayName="Jhon Doe"
        userName="jhondoe"
        verified={true}
        text="Hello, I am a very long tweet that will be truncated"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="http://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
