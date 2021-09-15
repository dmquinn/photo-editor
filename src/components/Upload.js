import React from "react";

const Upload = ({ setImage }) => {
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <label htmlFor="upload-button">
        <h1>Upload a Photo</h1>{" "}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default Upload;
