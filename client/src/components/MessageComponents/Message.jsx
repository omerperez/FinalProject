import React from "react";
import MessageTemplate1 from "./MessageTemplate1";
import MessageTemplate2 from "./MessageTemplate2";
import MessageTemplate3 from "./MessageTemplate3";

export default function Message(){

    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
      fetch("http://localhost:8080/message/")
        .then((response) => response.json())
        .then((data) => setMessages(data));
    }, []);

    if(messages.length <= 0 ) return "";

    return (
      <div>
        {messages.map((message) =>{ 
         return (
           <>
             {message.templateSrc == 'Template 1' ? 
              (
                <MessageTemplate1
                messageName={message.messageName}
                title={message.title}
                textFields={message.textFields}
                images={message.images[0]}
                /> 
              ) : 
              message.templateSrc == 'Template 2' ? 
              (
               <MessageTemplate2
                messageName={message.messageName}
                title={message.title}
                textFields={message.textFields}
                images={message.images[0]}
                />    
              ) : (
              <MessageTemplate3
                messageName={message.messageName}
                title={message.title}
                textFields={message.textFields}
                images={message.images[0]}
                /> 
              )}
           </>
         ); 
         })}
      </div>
    );

}