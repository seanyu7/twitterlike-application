import React from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMesage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    /*firebaseにデータにデータを追加する。*/
    e.preventDefault(); /*TWEETボタンを押してもページをリロードしない*/
    
    addDoc(collection(db, "posts"), {
      displayName: "John Doe",
      userName: "@johndoe",
      verified: true,
      text: tweetMesage,
      avatar: "https:/shincode.com/images/avatar/avatar-1.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar />
          <input
            type="text"
            placeholder="what are you up to?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBoxImageInput"
          placeholder="Put Your Image URL Here"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
      </form>
      <Button className="tweetBoxTweetButton" type="submit" onClick={sendTweet}>
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;
