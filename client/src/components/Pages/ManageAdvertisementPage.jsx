import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../Layout/PageTitle";
import MessageCard from "../MessageComponents/MessageCard";


export default function ManageAdvertisementPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/message/")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

      if (messages == null) return ""; 

  return (
    <>
      <PageTitle page={"Manage Advertisement"} />
      <div className="cars-grid pr-1 pl-1">
        {messages.map((message, key) => {
          return (
            <MessageCard
              image={message.images.length > 0 ? message.images[0] : '/car.png'}
              title={message.title}
              id={message._id}
            />
          );
        })}
      </div>
    </>
  );
}
