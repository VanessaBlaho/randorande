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
import Login from "../auth/Login";
import EditRandeLog from "../myJournal/EditRandeLog";
import Faq from "../faq/Faq";
import SubpageLayout from "../myJournal/SubPageLayout";
import RandeLog from "../myJournal/RandeLog";

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

                    {/* layout fot my journal page */}
                    <Route path="/" element={<SubpageLayout />}>
                        <Route path="/my-journal" element={<Journal />} />
                        <Route
                            path="/my-journal/entry/:entryId"
                            element={<RandeLog />}
                        />
                        <Route
                            path="/my-journal/edit/:entryId"
                            element={<EditRandeLog />}
                        />
                    </Route>

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/faq" element={<Faq />} />

                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </>
    );
}
