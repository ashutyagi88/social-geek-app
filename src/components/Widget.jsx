import styled from "styled-components";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { FiSearch } from "react-icons/fi";
import "../css/Widget.css";

function Widget() {
  return (
    <WidgetStyle>
      <WidgetInput>
        <FiSearch className="search_icon"></FiSearch>
        <input type="text" placeholder="Search Social Geek" />
      </WidgetInput>
      <WidgetContainer>
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1539830621907963904"></TwitterTweetEmbed>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Forbes"
          options={{ height: 300 }}
        ></TwitterTimelineEmbed>
        <TwitterShareButton
          url={"https://www.facebook.com/forbes/"}
          options={{ text: "ReactJs is Awesome", via: "ashutyagi88" }}
        ></TwitterShareButton>
      </WidgetContainer>
    </WidgetStyle>
  );
}

const WidgetStyle = styled.div`
  flex: 0.3;
  border-left: 0.5px solid var(--primary-color);

  @media only screen and (min-width: 800) {
    display: none;
  }
`;

const WidgetInput = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--primary-background);
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;

  input {
    border: none;
    background-color: var(--primary-background);
    padding: 0 10px;
    color: var(--primary-color);
    font-size: 15px;
    font-family: "Montserrat", sans-serif;

    &:focus {
      outline: none;
    }
  }
`;

const WidgetContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: var(--primary-background);
  border-radius: 20px;

  h2 {
    font-size: 18px;
    font-weight: 800;
  }
`;

export default Widget;
