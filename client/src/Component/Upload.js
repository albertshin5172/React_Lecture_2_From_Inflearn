import React, { useEffect, useState } from "react";

function Upload(props) {
  const [Content, setContent] = useState("");
  //  const [ContentList, setContentList] = useState([]);

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <input
        type="text"
        value={Content}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: "1rem" }}
      >
        SUBMIT!
      </button>
    </div>
  );
}

export default Upload;
