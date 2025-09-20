import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

//import { RepleUploadDiv } from "../../Style/RepleCSS.js";

function RepleUpload(props) {
  const [Reple, setReple] = useState("");
  const user = useSelector((state) => state.user);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!Reple) {
      return alert("Please fill in the comment!");
    }
    let body = {
      reple: Reple,
      uid: user.uid,
    };

    axios.post("/api/reple/submit", body).then((response) => {
      if (response.data.success) {
        alert("Your comment has been successfully posted.");
        window.location.reload();
      } else {
        alert("Failed to post comment.");
      }
    });
  };

  return (
    <div>
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
    </div>
  );
  // const [Reple, setReple] = useState("");
  // const user = useSelector((state) => state.user);

  // const SubmitHandler = (e) => {
  //   e.preventDefault();

  //   if (!Reple) {
  //     return alert("Please fill in the comment!");
  //   }
  //   let body = {
  //     reple: Reple,
  //     uid: user.uid,
  //     postId: props.postId,
  //   };

  //   axios.post("/api/reple/submit", body).then((response) => {
  //     if (response.data.success) {
  //       alert("Your comment has been successfully posted.");
  //       window.location.reload();
  //     } else {
  //       alert("Failed to post comment.");
  //     }
  //   });
  // };

  // return (
  //   <RepleUploadDiv>
  //     <form>
  //       <input
  //         type="text"
  //         value={Reple}
  //         onChange={(e) => {
  //           setReple(e.currentTarget.value);
  //         }}
  //       />
  //       <button
  //         onClick={(e) => {
  //           SubmitHandler(e);
  //         }}
  //       >
  //         등록
  //       </button>
  //     </form>
  //   </RepleUploadDiv>
  // );
}

export default RepleUpload;
