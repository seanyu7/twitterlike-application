import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "@mui/material";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*downloading twitter icon from material UI */}
      <TwitterIcon className="twitterIcon" />

      {/*making side bar options here */}
      <SidebarOption text="Home" Icon={HomeIcon} />
      <SidebarOption text="Topics" Icon={SearchIcon} />
      <SidebarOption text="Notification" Icon={AddAlertIcon} />
      <SidebarOption text="Message" Icon={ChatBubbleOutlineIcon} />
      <SidebarOption text="BookMark" Icon={BookmarkIcon} />
      <SidebarOption text="list" Icon={FormatListBulletedIcon} />
      <SidebarOption text="Profile" Icon={AccountBoxIcon} />
      <SidebarOption text="More..." Icon={MoreHorizIcon} />

      {/*making tweet button */}
      <Button variant="outlined" className="sidebarTweet">ADD Tweet</Button>
    </div>
  );
}

export default Sidebar;
