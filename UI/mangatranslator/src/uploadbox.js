import { useRef } from "react";
import "./uploadbox.css";
import UploadIconA from "./UploadIcon2Arrow.png";
import UploadIconB from "./UploadIcon2Box.png";

function UploadBox() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log(file); // learning checkpoint
  };

  return (
    <div className="UBox" onClick={handleClick}>
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div className="Upload-icon">
        <img src={UploadIconA} className="UPIA" alt="Upload arrow" />
        <img src={UploadIconB} className="UPIB" alt="Upload box" />
      </div>

      <h2>Select File</h2>
      <p>PDF is supported</p>
    </div>
  );
}

export default UploadBox;
