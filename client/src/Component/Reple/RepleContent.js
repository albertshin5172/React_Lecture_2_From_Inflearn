import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
// import Avatar from "react-avatar";

import { RepleContentDiv, RepleUploadDiv } from "../../Style/RepleCSS";

import axios from "axios";
// import moment from "moment";
//import "moment/locale/ko";

function RepleContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [EdifFlag, setEdifFlag] = useState(false);
  const [Reple, setReple] = useState(props.reple.reple);

  const user = useSelector((state) => state.user);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      reple: Reple,
      postId: props.reple.postId,
      repleId: props.reple._id,
    };

    axios.post("/api/reple/edit", body).then((response) => {
      if (response.data.success) {
        alert("Your comment has been successfully edited.");
      } else {
        alert("Comment editing failed.");
      }
      return window.location.reload();
    });
  };

  const DeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete it?")) {
      let body = {
        repleId: props.reple._id,
        postId: props.reple.postId,
      };
      axios
        .post("/api/reple/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("Your comment has been deleted.");
            window.location.reload();
          }
        })
        .catch((err) => {
          alert("Failed to delete comment.");
        });
    }
  };

  return (
    <RepleContentDiv>
      <div
        className="author"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 👈 좌우 끝으로 분리
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Avatar
            size="30"
            round={true}
            src={props.reple.author.photoURL}
            style={{
              border: "1px solid #c6c6c6",
              display: "inline-block",
            }}
          />
          <span>{props.reple.author.displayName}</span>
        </div>
        {props.reple.author.uid === user.uid && (
          <div className="modalControl">
            <span onClick={() => setModalFlag(true)}>···</span>
            {ModalFlag && (
              <div className="modalDiv" ref={ref}>
                <p
                  onClick={() => {
                    setEdifFlag(true);
                    setModalFlag(false);
                  }}
                >
                  Modify
                </p>
                <p className="delete" onClick={(e) => DeleteHandler(e)}>
                  Delete
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {EdifFlag ? (
        <RepleUploadDiv>
          <form>
            <input
              type="text"
              value={Reple}
              onChange={(e) => {
                setReple(e.currentTarget.value);
              }}
            />
            <button
              onClick={(e) => {
                SubmitHandler(e);
              }}
            >
              Register
            </button>
          </form>
          <div className="cancel">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEdifFlag(false);
              }}
            >
              Cencel
            </button>
          </div>
        </RepleUploadDiv>
      ) : (
        <p>{props.reple.reple}</p>
      )}
    </RepleContentDiv>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
export default RepleContent;
