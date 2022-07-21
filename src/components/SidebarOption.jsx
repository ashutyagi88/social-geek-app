import React from "react";
import styled from "styled-components";
import "../App.css";
import { NavLink } from "react-router-dom";

function SidebarOption({ text, Icon }) {
  return (
    // <IconNav>
    <IconStyle>
      <Icon></Icon>
      <h3>{text}</h3>
    </IconStyle>
    // </IconNav>
  );
}

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    padding: 20px;
    font-size: 1.5rem;
  }

  h3 {
    font-size: 20px;
    font-weight: 900;
    margin-right: 20px;
    width: 100%;
  }

  &:hover {
    background-color: var(--primary-background);
    border-radius: 30px;
    color: var(--primary-color);
    transition: color 100ms ease-out;
    width: 100%;
  }
`;

const IconNav = styled(NavLink)`
  &.active {
    color: var(--twitter-color);
  }
`;

export default SidebarOption;
