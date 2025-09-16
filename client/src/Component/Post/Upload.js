import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from "../../Style/UploadCSS.js";
import axios from "axios";

function Upload(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  let navigate = useNavigate();
  //  const [ContentList, setContentList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (Title === "" || Content === "") {
      return alert("Please fill in all fields!");
    }

    let body = {
      title: Title,
      content: Content,
    };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("The writing has been completed.");
          navigate("/");
        } else {
          alert("Failed to write the post.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
  const onSubmit = () => {
    //alert(Content);
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    setContent("");
  };

  useEffect(() => {
    //Code to be executed when the component recovers
    //alert("Please upload the component.");
    console.log("Content Changed");
    return () => {
      //Code to be executed when the component dies
      //alert("A lot of components have been uploaded.");
    };
  }, [Content]);
*/
  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">Title</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setTitle(e.currentTarget.value);
          }}
        />
        <label htmlFor="Content">Content</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            SUBMIT!
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     width: "100%",
    //     marginTop: "1rem",
    //   }}
    // >
    //   <input
    //     type="text"
    //     value={Content}
    //     onChange={(e) => {
    //       console.log(e.currentTarget.value);
    //       setContent(e.currentTarget.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       onSubmit();
    //     }}
    //     // style={{ marginTop: "1rem" }}
    //   >
    //     SUBMIT!
    //   </button>
    // </div>
  );
}

export default Upload;
