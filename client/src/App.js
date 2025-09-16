//import logo from "./logo.svg";
//import "./App.css";
//import Test from "./Test";
import { Route, Routes } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
//import React, { useState } from "react";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";

function App() {
  //const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/"
          element={<List />}
          // element={
          //   <List ContentList={ContentList} setContentList={setContentList} />
          // }
        />
        <Route
          path="/upload"
          element={<Upload />}
          // element={
          //   <Upload ContentList={ContentList} setContentList={setContentList} />
          // }
        />
        <Route
          path="/post/:postNum"
          element={<Detail />}
          // element={
          //   <Detail ContentList={ContentList} setContentList={setContentList} />
          // }
        />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </>
  );
  // 1. Conditional statements: if-else, switch
  // 2. Loop statements: for // map

  //let Flag = false;
  //let Arr = [1, 2, 3, 4, 5];

  // function checkFlag(flag) {
  //   if (Flag) {
  //     return "It's true.";
  //   } else {
  //     return "It's False";
  //   }
  // }

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1>Hello, React!</h1>
  //     {/*{checkFlag(Flag)}
  //     {Flag ? "It's true." : "It's false."}
  //     <br />
  //     {Arr.map((a, b) => {
  //       return (
  //         <div key={b}>
  //           <p>{a}</p>
  //         </div>
  //       );
  //     })} */}
  //     <Test />
  //   </div>
  // );
}

export default App;
