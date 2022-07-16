import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from '@mui/icons-material/Publish';

function Post() {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeadertText">
            <h3>
                programming tutorial
            <span className="postHeaderSepecial">
              <VerifiedUserIcon className="postBadge" />
              @SeanYuTakaki
            </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>
              Making a twitterlike web application for learning codes and the
              system of backend.
            </p>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random"
          alt="Randopm Photo from Unsplash"
        />
        <div className="postFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
