//import React from "react";
//import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
//import { Spinner } from "react-bootstrap";
//import Avatar from "react-avatar";
//import axios from "axios";

//import moment from "moment";
//import "moment/locale/ko";

import {
  PostDiv,
  SpinnerDiv,
  Post,
  BtnDiv,
} from "../../Style/PostDetailCSS.js";
import { useSelector } from "react-redux";

function Detail(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [PostInfo, setpostInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(params);
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        console.log("response ::: ", response.data);
        if (response.data.success) {
          setpostInfo(response.data.post);
          setFlag(true);
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("postInfo ::: ", PostInfo);
  }, []);

  const DeleteHandler = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("The post has been deleted.");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("Failed to delete post.");
        });
    }
  };

  return (
    <PostDiv>
      {Flag ? (
        <>
          <Post>
            <h1>{props.PostInfo.title}</h1>
            <p className="author">{props.PostInfo.author.displayNmae} </p>
            {props.PostInfo.image ? (
              <img
                // src={`http://localhost:5000/${PostInfo.image}`}
                // src={`${PostInfo.image}`}
                src={props.PostInfo.image}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            ) : null}
            <p>{props.PostInfo.content}</p>
          </Post>
          {user.uid === props.PostInfo.author.uid && (
            <BtnDiv>
              {/* <Link to={`/edit/${PostInfo.postNum}`}> */}
              <Link to={`/edit/${props.PostInfo.postNum}`}>
                <button className="edit">Edit</button>
              </Link>

              <button className="delete" onClick={() => DeleteHandler()}>
                Delete
              </button>
            </BtnDiv>
          )}
        </>
      ) : (
        <SpinnerDiv animation="border" role="state">
          <span className="visulally-hidden">Loaing...</span>
        </SpinnerDiv>
      )}
    </PostDiv>
  );
  // let params = useParams();
  // let navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // const SetTime = (a, b) => {
  //   if (a !== b) {
  //     return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
  //   } else {
  //     return moment(a).format("YYYY년 MMMM Do, hh:mm");
  //   }
  // };

  // return (
  //   <PostDiv>
  //     <Post>
  //       <h1>{props.PostInfo.title}</h1>
  //       <div className="author">
  //         <Avatar
  //           size="40"
  //           round={true}
  //           src={props.PostInfo.author.photoURL}
  //           style={{ border: "1px solid #c6c6c6" }}
  //         />
  //         <p>{props.PostInfo.author.displayName}</p>
  //         <p className="time">
  //           {SetTime(props.PostInfo.createdAt, props.PostInfo.updatedAt)}
  //         </p>
  //       </div>
  //       {props.PostInfo.image ? (
  //         <img
  //           src={props.PostInfo.image}
  //           alt=""
  //           style={{ width: "100%", height: "auto" }}
  //         />
  //       ) : null}
  //       <p>{props.PostInfo.content}</p>
  //     </Post>
  //     {user.uid === props.PostInfo.author.uid && (
  //       <BtnDiv>
  //         <Link to={`/edit/${props.PostInfo.postNum}`}>
  //           <button className="edit">수정</button>
  //         </Link>

  //         <button className="delete" onClick={() => DeleteHandler()}>
  //           삭제
  //         </button>
  //       </BtnDiv>
  //     )}
  //   </PostDiv>
  //);
}

export default Detail;
