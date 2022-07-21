import { useEffect, useState } from "react";
import styled from "styled-components";
import "../css/Feed.css";
import db from "../firebase";
import Post from "./Post";
import PostBox from "./PostBox";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  console.log(posts);

  return (
    <FeedStyle className="feed">
      <FeedHeader>
        <h2>Home</h2>
      </FeedHeader>
      <PostBox></PostBox>
      <FeedPost>
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            ></Post>
          ))}
        </FlipMove>
      </FeedPost>
    </FeedStyle>
  );
}

const FeedStyle = styled.div`
  flex: 0.6;
  overflow-y: scroll;
`;

const FeedHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10;
  border: 0.5px solid var(--primary-color);
  padding: 10px 20px;

  h2 {
    font-size: 20px;
    font-weight: 800;
  }
`;

const FeedPost = styled.div``;

export default Feed;
