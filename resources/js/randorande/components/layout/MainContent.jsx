import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DateSearch from "../search/DateSearch";
import ScratchOff from "../search/ScratchOff";
import { RevealedDateDetail } from "../search/RevealedDateDetail";

export default function MainContent() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element="404: page not found 💔" />
                    <Route path="/date-search" element={<DateSearch />} />
                    <Route
                        path="/date-search/results"
                        element={<ScratchOff />}
                    />
                    <Route
                        path="/randes/:id"
                        element={<RevealedDateDetail />}
                    />
                    {/*<Route path="/my-journal" element={} />
                    <Route path="/about-us" element={} />
                    <Route path="/faq" element={} />
                    <Route path="/login" element={} />
                    <Route path="/register" element={} /> */}
                </Routes>
            </main>
        </>
    );
}
