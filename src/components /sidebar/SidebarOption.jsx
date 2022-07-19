import React from "react";
import "./sidebarOption.css";
function SidebarOption({text, Icon, active}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOptionActive"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
