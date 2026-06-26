import React, { useEffect, useState } from "react";
import api from "../api/api";

function Files({ refresh }) {
  const [files, setFiles] = useState([]);

  const getFiles = async () => {
    try {
      const res = await api.get("/api/allfiles");
      setFiles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFiles();
  }, [refresh]);

  const deleteFile = async (id) => {
    try {
      await api.delete(`/api/delete/${id}`);
      getFiles();
    } catch (err) {
      console.log(err);
    }
  };
  const downloadFile = async (id, fileName) => {
    try {
      const res = await api.get(`/api/getfile/${id}`, {
        responseType: "blob",
      });

      const url = URL.createObjectURL(res.data);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName; // Name of downloaded file

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
      alert("Download failed!");
    }
  };

  const viewFile = async (id) => {
    try {
      const res = await api.get(`/api/getfile/${id}`, {
        responseType: "blob",
      });

      const url = URL.createObjectURL(res.data);
      window.open(url, "_blank");
    } catch (err) {
      console.log(err);
      alert("Unable to view file.");
    }
  };

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-5">My Files</h2>

      {files.length === 0 ? (
        <p className="text-gray-500 text-center">No files uploaded yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">File Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{file.fileName}</td>

                <td className="p-3">{file.fileType}</td>

                <td className="p-3 flex justify-center gap-3">
                  <button
                    onClick={() => viewFile(file.id)}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => downloadFile(file.id, file.fileName)}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => deleteFile(file.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Files;
