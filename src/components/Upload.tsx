import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setImage: Dispatch<SetStateAction<string>>
}
const Upload:React.FC<Props> = ({ setImage }) => {
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
