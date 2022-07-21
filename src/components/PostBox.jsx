import { Button, Avatar } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import "../css/PostBox.css";
import db from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function PostBox() {
  const [postInput, setPostInput] = useState("");
  const [postImageInput, setPostImageInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Ashutosh",
      username: "ashutyagi88",
      verified: true,
      text: postInput,
      avatar: "A",
      image: postImageInput,
      timestamp: serverTimestamp(),
      like: 0,
    });

    setPostImageInput("");
    setPostInput("");
  };

  return (
    <PostBoxStyle className="post_box_input">
      <form>
        <PostBoxInput>
          <Avatar>A</Avatar>
          <input
            onChange={(e) => setPostInput(e.target.value)}
            value={postInput}
            type="text"
            placeholder="What's Happening??"
          />
        </PostBoxInput>
        <PostBoxImage>
          <input
            onChange={(e) => setPostImageInput(e.target.value)}
            value={postImageInput}
            type="text"
            placeholder="Enter Image URL"
          />
        </PostBoxImage>
        <Button
          disabled={!postImageInput && !postInput}
          onClick={sendPost}
          type="submit"
          className="PostIt_btn"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Post It
        </Button>
      </form>
    </PostBoxStyle>
  );
}

const PostBoxStyle = styled.div`
  padding-bottom: 10px;
  border-bottom: 0.5px solid var(--primary-color);
  border-right: 0.5px solid var(--primary-color);
  border-left: 0.5px solid var(--primary-color);
  padding-right: 10px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const PostBoxInput = styled.div`
  display: flex;
  padding: 20px;

  input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const PostBoxImage = styled.div`
  margin-left: 4.5rem;
  input {
    border: none;
    padding: 10px;

    &:focus {
      outline: none;
    }
  }
`;

export default PostBox;
