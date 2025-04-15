import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LiveTracking from "./components/LiveTracking";
import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <nav className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">AI Predictor</h1>
            <ul className="flex gap-4 text-sm md:text-base">
              <li>
                <Link to="/live" className="text-gray-700 hover:text-indigo-500 transition">
                  Live Prediction
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-700 hover:text-indigo-500 transition">
                  Image Upload
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/upload" element={<ImageUploader />} />
          <Route path="/live" element={<LiveTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
