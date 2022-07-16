import React from "react";
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
    </div>
  );
}

export default Timeline;
