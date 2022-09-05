import React from "react";

//CSS
import './Message.css'

const Message = ({src, name, time}) => {
  return (
      <div className="message">
        <img src={src} alt="profile" />
        <div className="name_time">
          <p>{name}</p>
          <p>{time}</p>
        </div>
      </div>
  );
};

export default Message;
