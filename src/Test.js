import React from "react";

/*
1. The name of a component must begin with an uppercase letter.
2. The component must be exported so that it can be used by other components.
3. If a component wants to use another component, it must import it.
*/
function Test() {
  //JSX
  //1. CamelCase principle: className
  //2. js:{}
  //3. css, style, {{}} + object
  const Temp = 7;

  return (
    // 1. 가정문 : if-else, switch
    // 2. 반복문 : for
    <div>
      <h1 className="test">
        {/* <h1 className="" style={{ color: "red", fontSize: "3rem" }}></h1> */}
        This is a Test Component!
        <br />
        {Temp}
      </h1>
    </div>
  );
}

export default Test;
