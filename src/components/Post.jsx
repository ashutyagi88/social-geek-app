import { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/VerifiedUserSharp";
import { BsChat } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import styled from "styled-components";
import "../css/Post.css";
import LikeBtn from "./LikeBtn";
import Share from "./Share";

const Post = forwardRef(
  ({ key, displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <PostStyle ref={ref}>
        <PostAvatar>
          <Avatar>{avatar}</Avatar>
        </PostAvatar>
        <PostBody>
          <PostHeader>
            <HeaderText>
              <h3>
                {displayName}
                <span>
                  {verified && (
                    <VerifiedIcon className="verify_badge"></VerifiedIcon>
                  )}
                  @{username}
                </span>
              </h3>
            </HeaderText>
            <HeaderDesc>
              <p>{text}</p>
            </HeaderDesc>
            <HeaderImg>
              <img src={image} alt="" />
            </HeaderImg>
          </PostHeader>
          <PostFooter>
            <BsChat className="chat_icon"></BsChat>
            <FiRepeat className="repeat_icon"></FiRepeat>
            <LikeBtn></LikeBtn>
            <Share text={text}></Share>
          </PostFooter>
        </PostBody>
      </PostStyle>
    );
  }
);

const PostStyle = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0.5px solid var(--primary-color);
  padding-bottom: 10px;
  border-top: none;
`;

const PostAvatar = styled.div`
  padding: 15px 15px;
`;

const PostBody = styled.div`
  flex: 1;
  padding: 15px 12px 15px 0;
`;

const PostHeader = styled.div`
  padding: 0 5px;
`;

const HeaderText = styled.div`
  h3 {
    font-size: 15px;
    margin-bottom: 8px;
  }
  span {
    font-weight: 600;
    font-size: 12px;
    color: grey;
  }
`;

const HeaderDesc = styled.div`
  margin-bottom: 10px;
  font-size: 17px;

  p {
    inline-size: 35vw;
    overflow-wrap: break-word;
  }
`;

const HeaderImg = styled.div`
  img {
    border-radius: 20px;
    width: 100%;
  }

  @media only screen and (max-width: 1150px) {
    width: 80%;
  }
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  width: 85%;
  margin-top: 30px;
  font-size: 1.2rem;
`;

export default Post;
