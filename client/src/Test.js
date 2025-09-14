import React, { useState } from "react";

/* 5. Component
   6. JSX,
   7. useState(1),
   8. useState(2) */
/*
1. The name of a component must begin with an uppercase letter.
2. The component must be exported so that it can be used by other components.
3. If a component wants to use another component, it must import it.
*/
// function Test() {
//   //JSX
//   //1. CamelCase principle: className
//   //2. js:{}
//   //3. css, style, {{}} + object
//   //const Temp = 7;

//   /*
//     1. First argument: Variable name
//     2. Second argument: Function that changes the state
//     3. UseState function arguments: Initial state type and value

//     There's no need to re-render (refresh) the screen when the state value changes.

//     1. Always use setState when changing the state value!
//     2. Call setState with the on attribute of the HTML tag: function(){}
//   */
//   //const [Temp, setTemp] = useState(0);
//   //const [Temp, setTemp] = useState([]);
//   //const [Number, setNumber] = useState(0);
//   const [Temp, setTemp] = useState(false);
//   return (
//     // 1. 가정문 : if-else, switch
//     // 2. 반복문 : for
//     <div>
//       {/*
//         Temp의 값이 참이면 h1 tag를 보여주고,
//         Temp의 값이 거짓이면, h1 tag 숨겨주는 역할
//         btn 클릭할때마다 temp 값이 !
//       */}
//       {Temp ? <h1 className="test">This is a Test Component!</h1> : null}
//       <button
//         onClick={() => {
//           setTemp(!Temp);
//         }}
//       >
//         {Temp ? "Hide" : "Show"}
//       </button>
//       {/* <h1 className="" style={{ color: "red", fontSize: "3rem" }}></h1> */}

//       {/* <br />
//       {Temp.map((element, idx) => {
//         return <p key={idx}>{element}</p>;
//       })}
//       <button
//         onClick={() => {
//           let arr = [];
//           arr = [...Temp];
//           arr.push(Number);
//           setNumber(Number + 1);
//           setTemp([...arr]);

//           //setTemp(Temp + 1);
//         }}
//       >
//         Increment
//       </button> */}
//     </div>
//   );
// }

/* 
  9. useState(3) 
*/
function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);
  const onSubmit = () => {
    //alert(Content);
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {ContentList.map((content, idx) => {
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
        제출!
      </button>
    </div>
  );
}

export default Test;
