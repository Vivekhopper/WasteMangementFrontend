import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/predict/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(res.data.label);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Prediction failed.");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 min-h-screen">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">Upload Image for Prediction</h2>

        <label className="border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500 transition">
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <span className="text-gray-500">Click to select an image</span>
        </label>

        {preview && (
          <div>
            <img src={preview} alt="Preview" className="w-full h-60 object-cover rounded-md border shadow" />
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition"
        >
          Upload & Predict
        </button>

        {prediction && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md text-center shadow-md">
            <strong>Prediction: </strong>{prediction}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
