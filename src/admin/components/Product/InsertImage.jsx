import React, { useState } from "react";
import FileUploaded from "./FileUploader";
function InsertImage() {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
    console.log(formData);
    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploaded onFileSelectSuccess={(file) => setSelectedFile(file)} />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}

export default InsertImage;
