import { useState } from "react";
import Modal from "react-modal";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { Button } from "@material-ui/core";

function Share(props) {
  const text = props.text;
  const [modalisOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <MdOutlineIosShare
        onClick={openModal}
        className="share_icon"
      ></MdOutlineIosShare>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="icons">
          <FacebookShareButton url="RANDOM URL" quote="Hello There!!">
            <FacebookIcon className="facebook_icon" />
          </FacebookShareButton>
          <WhatsappShareButton url="RANDOM URL" title={text}>
            <WhatsappIcon className="whatsapp_icon"></WhatsappIcon>
          </WhatsappShareButton>
        </div>
        <div className="close_btn">
          <Button onClick={closeModal}>
            <IoMdCloseCircle className="close_icon"></IoMdCloseCircle>
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Share;
