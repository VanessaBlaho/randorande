import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DateSearch from "../search/DateSearch";
import ScratchOff from "../search/ScratchOff";
import { RevealedDateDetail } from "../search/RevealedDateDetail";
import NotFound from "../notfound/NotFound";
import Journal from "../myJournal/Journal";

export default function MainContent() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/date-search" element={<DateSearch />} />
                    <Route
                        path="/date-search/results"
                        element={<ScratchOff />}
                    />
                    <Route
                        path="/randes/:rande_id"
                        element={<RevealedDateDetail />}
                    />
                    
                    <Route path="/my-journal/:id" element={<Journal/>} />
                    {/*
                    <Route path="/about-us" element={} />
                    <Route path="/faq" element={} />
                    <Route path="/login" element={} />
                    <Route path="/register" element={} /> */}
                </Routes>
            </main>
        </>
    );
}
