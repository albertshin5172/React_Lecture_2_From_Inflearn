import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function List(props) {
  //  const [ContentList, setContentList] = useState([]);
  const [Text, setText] = useState("");

  useEffect(() => {
    // let body = {
    //   text: "hello",
    // };
    // Ask the user for their assigned ID
    axios
      .post("/api/test")
      .then((response) => {
        // Success Handling
        console.log(response);
        //alert("Request Success");
        setText(response.data.text);
      })
      .catch((error) => {
        // Error Handling
        console.log(error);
        alert("Request Fail");
      });
  }, []);

  return (
    <div>
      <h3>List!</h3>
      <h3>{Text}</h3>
      {props.ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "100%",
              marginLeft: "1rem",
              textDecoration: "underline",
            }}
          >
            내용 : {content}
          </div>
        );
      })}
    </div>
  );
}

export default List;
