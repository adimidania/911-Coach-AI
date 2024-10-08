import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";

const QAMessage = ({ message, isUser }) => {
  const [input, setInput] = useState(message);
  

  return (
    <div
      className={`flex items-start ${isUser ? "justify-end" : "justify-start"} my-2`}
    >
      
      <div
        className={`p-4 rounded-lg ml-2 text-md shadow-md flex w-full gap-14 mb-4 ${isUser ? "bg-[#E4ECEA]" : "bg-[#FFF]"} max-w-4xl`}
      >
        <p fullWidth>
          {message}
        </p>
      </div>
      
    </div>
  );
};

export default QAMessage;