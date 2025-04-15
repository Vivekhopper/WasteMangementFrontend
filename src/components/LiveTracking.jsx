import React from "react";

function LiveTracking() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6 bg-gray-100">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Live Prediction Stream</h2>
        <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden border border-gray-300">
          <img
            src="https://wastemanagementbackend-xt2d.onrender.com/video"
            alt="Live Prediction Stream"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LiveTracking;
