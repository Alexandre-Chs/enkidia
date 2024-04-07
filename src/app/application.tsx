const { ipcRenderer } = window.require("electron");
import React from "react";
import { marked } from "marked";

const Application = () => {
  const [message, setMessage] = React.useState<string>("");
  const [response, setResponse] = React.useState<any>([]);
  const [reset, setReset] = React.useState<boolean>(false);

  function callOpenAIAPI() {
    ipcRenderer.invoke("get-chat-completion", message).then((res) => {
      const responseAI = res.choices[0].message.content;
      setResponse([...response, responseAI]);
    });
  }

  return (
    <div className="bg-[#191A1A] h-screen w-full text-white relative">
      <div>{response}</div>
      <div className="flex justify-center items-center w-full absolute bottom-0">
        <div>
          <textarea
            cols={50}
            rows={10}
            name={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-[60px] resize-y border rounded-md text-black p-2"
          />
        </div>
        <div>
          <button onClick={callOpenAIAPI} className="pl-4">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
