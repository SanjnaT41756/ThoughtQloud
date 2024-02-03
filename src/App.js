import React from "react";
import { Route, Routes } from "react-router-dom";
import Faces from "./Faces.js"; // Adjust the import path based on your file structure
import CloudBackground from "./CloudBackground";

const App = () => {
  const numberOfClouds = 3; // Specify the number of clouds you want
  return (
    <div>
      <Routes>
        <Route path="/" element={<CloudBackground numberOfClouds={numberOfClouds} />} />
        <Route path="/faces" element={<Faces />} />
        {/* Define more routes as needed */}
      </Routes>
    </div>
  );
};

export default App