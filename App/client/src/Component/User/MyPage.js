import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import axios from "axios";
import { getAuth, updateProfile } from "firebase/auth";
import { MyPageDiv } from "../../Style/UserCSS.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [CurrentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate("/login");
    } else {
      setCurrentImage(user.photoURL);
    }
  }, [user, navigate]);

  const ImageUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/user/profile/img", formData).then((response) => {
      setCurrentImage(response.data.filePath);
    });
  };

  const SaveProfile = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      alert("You must log in.");
      return;
    }
    try {
      await updateProfile(currentUser, { photoURL: CurrentImage });
      console.log("Firebase updateProfile success");
    } catch (error) {
      console.error("Firebase updateProfile error:", error);
      return alert("Failed to save profile.");
    }
    let body = { photoURL: CurrentImage, uid: user.uid };
    try {
      const response = await axios.post("/api/user/profile/update", body);
      if (response.data.success) {
        alert("Profile saved successfully.");
        window.location.reload();
      } else {
        alert("Failed to save profile.");
      }
    } catch (error) {
      console.error("Profile update API error:", error);
      alert("Failed to save profile.");
    }
  };

  return (
    <MyPageDiv style={{ width: "100vw", height: "100vh" }}>
      <form
        style={{
          width: "50%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => ImageUpload(e)}
          />
          <Avatar
            size="100"
            round={true}
            src={CurrentImage}
            style={{ border: "1px solid #c6c6c6", cursor: "pointer" }}
          />
        </label>
        <button onClick={(e) => SaveProfile(e)}>저장</button>
      </form>
    </MyPageDiv>
  );
}

export default MyPage;
