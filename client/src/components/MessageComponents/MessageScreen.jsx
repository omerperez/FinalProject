import React , {useState} from "react";
import MessageTemplate1 from "./MessageTemplate1";
import MessageTemplate2 from "./MessageTemplate2";
import MessageTemplate3 from "./MessageTemplate3";
import PageTitle from "../Layout/PageTitle";

export default function MessageScreen({number}) {
  const [screen, setScreen] = useState([]);
  const [counter, setCounter] = useState(0);

  React.useEffect(() => {
    let count = counter;

    fetch("http://localhost:8080/message/messages/screen" + number)
      .then((response) => response.json())
      .then((data) => setScreen(data));
  }, [number]);

  // const interval = setInterval(() => {
  //   if (count >= screen.length) {
  //     clearInterval(interval);
  //   } else {
  //     setCounter((counter) => counter + 1);
  //     count++;
  //   }
  // }, 500);
  // return () => clearInterval(interval);

  if (screen.length <= 0) return "";

  return (
    <>
      <div
        className="h-100"
        style={
          number == 1
            ? { background: "pink", backgroundSize: "cover" }
            : number == 2
            ? { background: "#90EE90" }
            : { background: "#00CED1" }
        }
      >
        <PageTitle page={"Welcome To Screen " + number} />
        <div className="w-100">
          {screen.map((message) => {
            return (
              <>
                {message.templateSrc == "Template 1" ? (
                  <MessageTemplate1
                    messageName={message.messageName}
                    title={message.title}
                    textFields={message.textFields}
                    images={message.images[0]}
                    id={message._id}
                  />
                ) : message.templateSrc == "Template 2" ? (
                  <MessageTemplate2
                    messageName={message.messageName}
                    title={message.title}
                    textFields={message.textFields}
                    images={message.images[0]}
                    id={message._id}
                  />
                ) : (
                  <MessageTemplate3
                    messageName={message.messageName}
                    title={message.title}
                    textFields={message.textFields}
                    images={message.images[0]}
                    id={message._id}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
