import React, { useState } from "react";
import api from "../api/api";
import Navbar from "./Navbar";

function Upload({ setRefresh }) {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("/api/upload", formData);
      alert("File uploaded successfully!");
      setFile(null);
      setRefresh((prev) => !prev);
      document.getElementById("fileInput").value = "";
    } catch (err) {
      console.log(err);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-6">
        <h2 className="text-3xl font-bold text-center mb-6">Upload File</h2>

        <label
          htmlFor="fileInput"
          className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-xl h-48 cursor-pointer hover:bg-blue-50 transition"
        >
          <span className="text-5xl">📂</span>
          <p className="mt-3 text-lg font-medium">Click to choose a file</p>

          <p className="text-gray-500 text-sm mt-2">
            Allowed: PDF, JPG, PNG, TXT
          </p>

          {file && (
            <p className="mt-4 text-green-600 font-semibold">{file.name}</p>
          )}
        </label>

        <input
          id="fileInput"
          type="file"
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png,.txt"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadFile}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default Upload;
