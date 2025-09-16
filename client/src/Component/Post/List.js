import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";
//import { Button } from "react-bootstrap";

function List(props) {
  //  const [ContentList, setContentList] = useState([]);
  /*
  const [Text, setText] = useState("");

  useEffect(() => {
    // let body = {
    //   text: "hello",
    // };
    // Ask the user for their assigned ID
    axios
      .post("/api/post/list")
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
  */

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
        // Success Handling
        //console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 상태 코드와 응답을 돌려줌
          console.log("Error status:", error.response.status);
          console.log("Error data:", error.response.data);
        } else if (error.request) {
          // 요청은 되었으나 응답이 없음
          console.log("No response received:", error.request);
        } else {
          // 요청 세팅 중 발생한 에러
          console.log("Error message:", error.message);
        }
      });
  }, []);

  return (
    <ListDiv>
      <h3>List!</h3>
      {/* <h3>{Text}</h3> */}
      {PostList.map((post, idx) => {
        return (
          <ListItem key={post._id || idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
      {/* {props.ContentList.map((post, idx) => {
        return (
          <div
          // key={idx}
          // style={{
          //   width: "100%",
          //   marginLeft: "1rem",
          //   textDecoration: "underline",
          // }}
          >
            <p>제목 : {post.title}</p>
            내용 : {post.content}
          </div>
        );
      })} */}
    </ListDiv>
  );
}

export default List;
