import React, { useEffect } from "react";
import { fetchMessages } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

function Greeting() {
  const dispatch = useDispatch();
  const messagesData = useSelector((state) => state.messages.messages);
  const randomMessage = messagesData[Math.floor(Math.random() * messagesData.length)];

  useEffect(() => dispatch(fetchMessages()), [dispatch]);

  return (
    <div>
      {randomMessage && <h3>{randomMessage.content}</h3>}
      <button onClick={() => dispatch(fetchMessages())}>
        Get Message
      </button>
    </div>
  )
}

export default Greeting;
