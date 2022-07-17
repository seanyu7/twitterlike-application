import Search from "@mui/icons-material/Search";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./widgets.css";
import {Tweet} from "react-twitter-widgets";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <Search className="widgetsSearchIcon" />
        <input type="text" placeholder="Search with Keywords..." />
      </div>
      <div className="widgetsWidgetsContainer">
        <h2>What are you up to? </h2>
        {/*add some library*/}
        

      </div>
    </div>
  );
}

export default Widgets;
