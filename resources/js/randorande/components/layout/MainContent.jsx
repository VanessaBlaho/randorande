import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DateSearch from "../search/DateSearch";
import ScratchOff from "../search/ScratchOff";
import AboutUs from "../about-us/AboutUs";
import { RevealedDateDetail } from "../search/RevealedDateDetail";
import NotFound from "../notfound/NotFound";
import Journal from "../myJournal/Journal";
import Registration from "../auth/Registration";
import EditRandeLog from "../myJournal/EditRandeLog";

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
                    <Route path="/about-us" element={<AboutUs />} />

                    <Route path="/my-journal" element={<Journal />} />
                    <Route path="/register" element={<Registration />} />
                    <Route
                        path="/my-journal/entries/edit"
                        element={<EditRandeLog />}
                    />

                    {/*
                    <Route path="/faq" element={} />
                    <Route path="/login" element={} /> */}
                </Routes>
            </main>
        </>
    );
}
