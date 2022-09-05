import React from "react";

//Icon
import * as Unicons from "@iconscout/react-unicons";

//Style
import "./Feed.css";

const Feed = ({profile, image, like1, like2, like3, name}) => {
  return (
    <div className="Feed">
      <div className="feed_profile">
        <div className="feed_title">
          <img src={profile} alt="profile" />
          <div>
            <p>{name}</p>
            <p>Germany - 15 MINUTES AGO</p>
          </div>
        </div>
        <Unicons.UilEllipsisV />
      </div>
      <div className="image">
        <img src={image} alt="feed" />
      </div>

      <div className="like_comment_share">
        <div>
          <Unicons.UilHeart />
          <Unicons.UilComment />
          <Unicons.UilShareAlt />
        </div>
        <Unicons.UilBookmark />
      </div>

      <div className="likes">
        <img src={like1} alt="likes" />
        <img src={like2} alt="likes" />
        <img src={like3} alt="likes" />
        <p>liked By <b>Lana Soares</b> and 324 others</p>
      </div>
      
      <div className="title_body">
        <p><b>Lana Rose</b>Lorem ipsum dolor sit amet consectetur. #lifestyle</p>
        <p>View all 243 comments</p>
      </div>
    </div>
  );
};

export default Feed;
