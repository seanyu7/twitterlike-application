import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar}/>
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeadertText">
            <h3>
                {displayName}
            <span className="postHeaderSepecial">
              <VerifiedUserIcon className="postBadge" />
              @{userName}
            </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>
             {text}
            </p>
          </div>
        </div>
        <img
          src={image}
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
