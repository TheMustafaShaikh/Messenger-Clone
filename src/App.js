/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [userName, setUserName] = useState();
  const [inputMessage, setInputMessage] = useState("");
  const [dbmessage, setdbMessage] = useState([]);
  //const [message, sendMessage] = useState([{ name: "Mustafa", value: "Hey!" }]);
  const setInput = () => {
    const getName = document.getElementById("inputVal").value;
    setUserName(getName);
  };

  const setMessage = (e) => {
    e.preventDefault();
    db.collection("Message").add({
      name: userName,
      content: inputMessage,
      timestamp: firebase.firestore.Timestamp.now(),
    });
    setInputMessage("");
  };

  const nameCheck = (string) => {
    if (string === userName) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    db.collection("Message")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setdbMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  dbmessage.forEach((element) => {
    console.log(element.name);
  });
  return (
    <div className="container-messenger">
      <div className="main-container">
        <h1 className="welcome-title"> Welcome to messenger </h1>
        {userName ? (
          <div className="Messages-container">
            <div className="Messages-all">
              {
                dbmessage.map((messages) =>
                  nameCheck(messages.name) ? (
                    <p className="messagebox-send">
                      <strong>{messages.name}</strong>: {messages.content}
                    </p>
                  ) : (
                    <p className="messagebox-rec">
                      <strong>{messages.name}</strong>: {messages.content}
                    </p>
                  )
                )

                // <p className="messagebox-rec">
                //   <strong>{messages.name}</strong>: {messages.value}
                // </p>
              }
              {/* <p className="messagebox-rec">
                <strong> Qazi: </strong>Hello!
              </p>
              <p className="messagebox-send">
                <strong>{userName}</strong>: Hey!{" "}
              </p> */}
            </div>
            <input
              className="message-input"
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value);
              }}
            />
            <button className="SendMessage" onClick={setMessage}>
              Send
            </button>
          </div>
        ) : (
          <div>
            <input className="message-input" value={userName} id="inputVal" />
            <button className="SendMessage" onClick={setInput}>
              Enter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
