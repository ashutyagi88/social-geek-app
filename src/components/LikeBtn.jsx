import { useState, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase";
import styled from "styled-components";
import { FiTarget } from "react-icons/fi";

function LikeBtn() {
  const [likecount, setLikeCount] = useState(0);

  const likeCountFuc = (e) => {
    e.preventDefault();
    setLikeCount(likecount + 1);
    updateDoc(collection(db, "posts"), {
      like: likecount,
    });
  };

  return (
    <LikeStyle>
      {likecount === 0 && (
        <MdFavoriteBorder
          onClick={likeCountFuc}
          className="fav_icon"
        ></MdFavoriteBorder>
      )}
      {likecount > 0 && (
        <MdFavorite
          onClick={likeCountFuc}
          style={{ color: "red" }}
        ></MdFavorite>
      )}
      <h6>{likecount}</h6>
    </LikeStyle>
  );
}

const LikeStyle = styled.div`
  display: flex;

  h6 {
    font-size: 0.9rem;
    padding-left: 2px;
    padding-top: 1.2px;
  }
`;

export default LikeBtn;
