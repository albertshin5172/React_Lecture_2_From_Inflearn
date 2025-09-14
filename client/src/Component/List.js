import React, { useState } from "react";

function List(props) {
  //  const [ContentList, setContentList] = useState([]);

  return (
    <div>
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
