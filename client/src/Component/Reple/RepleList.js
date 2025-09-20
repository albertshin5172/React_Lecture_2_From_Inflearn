import React, { useState, useEffect } from "react";
import axios from "axios";
import { RepleContentDiv, RepleListDiv } from "../../Style/RepleCSS";
import RepleContent from "./RepleContent";

function RepleList(props) {
  const [repleList, setrepleList] = useState([]);

  useEffect(() => {
    let body = {
      postId: props.postId,
    };
    axios.post("/api/reple/getReple", body).then((response) => {
      console.log(response.data.repleList);
      if (response.data.success) {
        setrepleList([...response.data.repleList]);
      }
    });
  }, []);

  return (
    <RepleListDiv>
      {repleList.map((reple, idx) => {
        return <RepleContent reple={reple} key={idx} />;
      })}
    </RepleListDiv>

    // <div>
    //   {repleList.map((reple, idx) => {
    //     return <div key={idx}>{reple.reple} </div>;
    //   })}
    // </div>
    // <RepleListDiv>
    //   {repleList.map((reple, idx) => {
    //     return (
    //       <RepleContentDiv key={idx}>
    //         <div className="author">
    //           <p>{reple.author.displayName}</p>
    //           <div className="modalControl">
    //             <span>···</span>
    //             <div className="modalDiv">
    //               <p>Modify</p>
    //               <p className="delete">Delete</p>
    //             </div>
    //           </div>
    //         </div>
    //       </RepleContentDiv>
    //     );
    //   })}
    // </RepleListDiv>
  );
}

export default RepleList;
