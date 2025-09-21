import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../../Style/UserCSS.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();

  const SingInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && PW)) {
      return alert("Please fill in all values.");
    }

    try {
      //await firebase.auth().signInWithEmailAndPassword(Email, PW);
      await signInWithEmailAndPassword(auth, Email, PW);
      //await updateProfile(createdUser.user, { displayName: Name });
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setErrorMsg("This email address does not exist.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("Password does not match.");
      } else {
        setErrorMsg("Password does not match.");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [ErrorMsg]);

  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={PW}
          required
          onChange={(e) => setPW(e.currentTarget.value)}
        />
        {ErrorMsg !== "" && <p>{ErrorMsg}</p>}
        <button onClick={(e) => SingInFunc(e)}>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
  // const [Email, setEmail] = useState("");
  // const [PW, setPW] = useState("");
  // let navigate = useNavigate();

  // return (
  //   <LoginDiv>
  //     <form>
  //       <label>이메일</label>
  //       <input
  //         type="email"
  //         value={Email}
  //         required
  //         onChange={(e) => setEmail(e.currentTarget.value)}
  //       />
  //       <input
  //         type="password"
  //         value={PW}
  //         required
  //         onChange={(e) => setPW(e.currentTarget.value)}
  //       />
  //       <button>로그인</button>
  //       <button
  //         onClick={(e) => {
  //           e.preventDefault();
  //           navigate("/register");
  //         }}
  //       >
  //         회원가입
  //       </button>
  //     </form>
  //   </LoginDiv>
  // );
}

export default Login;
