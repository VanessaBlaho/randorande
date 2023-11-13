import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

export default function MainContent() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element="404: page not found 💔" />
                    {/* <Route path="/date-search" element={} />
                    <Route path="/my-journal" element={} />
                    <Route path="/about-us" element={} />
                    <Route path="/faq" element={} />
                    <Route path="/login" element={} />
                    <Route path="/register" element={} /> */}
                </Routes>
            </main>
        </>
    );
}