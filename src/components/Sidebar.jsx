import React from "react";
import "../css/Sidebar.css";
import styled from "styled-components";
import { HiHashtag } from "react-icons/hi";
import { IoMdNotificationsOutline, IoMdHome } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsBookmark, BsListStars } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";
import SidebarOption from "./SidebarOption";
import { ReactComponent as MyLogo } from "../img/logo.svg";
import PostButton from "./PostButton";

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo>
        <MyLogo />
      </Logo>
      <SidebarOption Icon={IoMdHome} text="Home"></SidebarOption>
      <SidebarOption Icon={HiHashtag} text="Explore"></SidebarOption>
      <SidebarOption
        Icon={IoMdNotificationsOutline}
        text="Notifications"
      ></SidebarOption>
      <SidebarOption
        Icon={BiMessageRoundedDetail}
        text="Messages"
      ></SidebarOption>
      <SidebarOption Icon={BsBookmark} text="Bookmarks"></SidebarOption>
      <SidebarOption Icon={BsListStars} text="Lists"></SidebarOption>
      <SidebarOption Icon={CgProfile} text="Profile"></SidebarOption>
      <SidebarOption Icon={CgMoreO} text="More"></SidebarOption>
      <PostButton></PostButton>
    </div>
  );
}

const Logo = styled.div`
  svg {
    border-radius: 100%;
    width: 8rem;
    position: relative;
    left: 35px;
    margin: 15px 0 15px 0;
  }
`;

export default Sidebar;
