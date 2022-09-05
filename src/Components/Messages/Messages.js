import React, { useRef, useState } from "react";

//CSS
import "./Messages.css";

//Icons
import * as Unicons from "@iconscout/react-unicons";

//Image
import Profile1 from "../../images/2.jpg";
import Profile2 from "../../images/1.jpg";
import Profile3 from "../../images/3.jpg";
import Profile4 from "../../images/4.jpg";
import Profile5 from "../../images/5.jpg";
import Profile6 from "../../images/6.jpg";
import Profile7 from "../../images/7.jpg";

//Components
import Message from "./Message";


const Messages = () => {

  const [value, setValue] = useState('')
  const [userMessages] = useState([
    {
      name: "Abbas Boazar",
      time: "5 minut ago",
      image: Profile1,
    },
    {
      name: "Saeid Soheili",
      time: "59 minut ago",
      image: Profile2,
    },
    {
      name: "Milad Motala",
      time: "12 minut ago",
      image: Profile3,
    },
    {
      name: "Farshad Rezaei",
      time: "36 minut ago",
      image: Profile4,
    },
    {
      name: "Abbas Esmaeili",
      time: "18 minut ago",
      image: Profile5,
    },
    {
      name: "Reza Shekari",
      time: "43 minut ago",
      image: Profile6,
    },
    {
      name: "Sara Rahimi",
      time: "27 minut ago",
      image: Profile7,
    },
  ]);

  const input = useRef(null);

  const valueHandler = e =>{
    setValue(e.target.value)
  }

  const serachMessages = userMessages.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className="Messages">
        <h4>Messages</h4>
      <input ref={input} type="search" placeholder="Search..." value={value} onChange={valueHandler} />
      <div className="category">
        <h5>Primary</h5>
      </div>

      <div className="messagesContainet">
        {serachMessages.map((user) => (
            <Message src={user.image} name={user.name} time={user.time} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
