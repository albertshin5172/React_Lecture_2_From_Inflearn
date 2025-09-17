import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload(props) {
  /*
    1. The user uploads an image.
    2. The uploaded image is received and stored on the server.
    3. The path to the saved image is sent back to the client.
    4. The path is received and stored in the post model.
  */

  const FileUpload = (e) => {
    console.log(e.target.files);

    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((response) => {
      console.log(response.data);
      props.setImage(response.data.filePath);
    });
  };

  return (
    <div>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => FileUpload(e)}
      />
    </div>
  );
}

export default ImageUpload;
