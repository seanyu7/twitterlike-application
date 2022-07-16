import React from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar />
          <input type="text" placeholder="what are you up to?" />
        </div>
        <input
          className="tweetBoxImageInput"
          placeholder="Put Your Image URL Here"
          type="text"
        />
      </form>
      <Button className="tweetBoxTweetButton" type="submit">
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;
