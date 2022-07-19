import React from "react";
import Post from "./Post";
import "./timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    /*firebaseのドキュメントにて、順番の並び替えを行うときはfirebaseのドキュメントにて並べ方について
    調べれば教えてくれる。*/
    getDocs(q).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* header*/}
      <div className="timelineHeader">
        <h2>Home</h2>
      </div>
      {/* Tweetbox*/}
      <TweetBox />
      {/* Post*/}

      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
