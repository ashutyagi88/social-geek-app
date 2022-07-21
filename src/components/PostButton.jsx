import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import "../css/PostButton.css";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
import PostBox from "./PostBox";
import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";

function PostButton() {
  const [modalisOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "45px",
    },
  };

  useEffect(() => {
    if (modalisOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [modalisOpen]);

  return (
    <div className="post_button">
      <Button
        onClick={openModal}
        variant="outlined"
        className="sidebar-btn"
        fullWidth
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Post It
      </Button>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseBtn>
          <Button onClick={closeModal}>
            <IoMdCloseCircle className="close_icon"></IoMdCloseCircle>
          </Button>
        </CloseBtn>
        <PostBox className="post_btn_postbox"></PostBox>
      </Modal>
    </div>
  );
}

const CloseBtn = styled.div`
  svg {
    font-size: 1rem;

    &.hover {
      background: none !important;
    }
  }
`;
export default PostButton;
