import React from "react";
import { Route, Routes } from "react-router-dom";
import Faces from "./Faces.js"; // Adjust the import path based on your file structure

import SimplePage from "./SimplePage";

import PageList from "./PageList";
import CloudBackground from "./CloudBackground";

const App = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <CloudBackground numberOfClouds={2} type={"initial"} />
                    }
                />
                <Route
                    path="/queer"
                    element={
                        <CloudBackground numberOfClouds={3} type={"queer"} />
                    }
                />
                <Route
                    path="/why"
                    element={
                        <CloudBackground numberOfClouds={4} type={"why"} />
                    }
                />
                <Route
                    path="/ashamed"
                    element={
                        <CloudBackground numberOfClouds={3} type={"ashamed"} />
                    }
                />
                <Route
                    path="/religion"
                    element={
                        <CloudBackground numberOfClouds={3} type={"religion"} />
                    }
                />
                <Route
                    path="/deceit"
                    element={
                        <CloudBackground numberOfClouds={3} type={"deceit"} />
                    }
                />
                <Route
                    path="/dissapointment"
                    element={
                        <CloudBackground
                            numberOfClouds={3}
                            type={"dissapointment"}
                        />
                    }
                />
                <Route
                    path="/queerKnowledge"
                    element={
                        <CloudBackground
                            numberOfClouds={2}
                            type={"queerKnowledge"}
                        />
                    }
                />
                <Route
                    path="/yes"
                    element={
                        <CloudBackground numberOfClouds={1} type={"yes"} />
                    }
                />
                <Route
                    path="/no"
                    element={<CloudBackground numberOfClouds={1} type={"no"} />}
                />
                <Route
                    path="/learnMore"
                    element={
                        <CloudBackground
                            numberOfClouds={1}
                            type={"learnMore"}
                        />
                    }
                />
                <Route
                    path="/sure"
                    element={
                        <CloudBackground numberOfClouds={1} type={"sure"} />
                    }
                />
                <Route
                    path="/notSure"
                    element={
                        <CloudBackground numberOfClouds={1} type={"notSure"} />
                    }
                />

                <Route
                    path="/dummy"
                    element={
                        <CloudBackground numberOfClouds={1} type={"dummy"} />
                    }
                />

                <Route path="/faces" element={<Faces />} />
                <Route
                    path="/middleFace"
                    element={
                        <CloudBackground
                            numberOfClouds={3}
                            type={"middleFace"}
                        />
                    }
                />

                {/* Define more routes as needed */}
            </Routes>
        </div>
    );
};

export default App;
