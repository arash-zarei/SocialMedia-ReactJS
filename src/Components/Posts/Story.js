import React from "react";

import styled from "styled-components";

//CSS
import "./Story.css";

const Story = ({ src, srcProfile, name }) => {
  const DivStory = styled.div`
    width: 100px;
    height: 200px;
    border-radius: 25px;
    overflow: hidden;
    border: 2px solid #7550db;
    position: relative;
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    cursor: pointer;
  `;

  return (
    <DivStory className="story" src={src}>
      <img src={srcProfile} alt="profile" />
        <p>{name}</p>
    </DivStory>
  );
};

export default Story;
