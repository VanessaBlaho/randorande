import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./FiltersContext";
import MainContent from "./components/layout/MainContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import axios from "axios";
import UserContext from "./UserContext";

export default function App() {
    const [user, setUser] = useState(null); // null - user status unknown
    // false - user not logged in (but we know that)

    const loadUserStatus = async () => {
        try {
            // make the AJAX request
            const response = await axios.get("/api/user");
            // get the (already JSON-parsed) response data
            // const response_data = response.data; // use later for console.log()
            setUser(response.data);
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };

    useEffect(() => {
        if (user === null || user === "logged") {
            // load user status anytime user is null, i.e. we don't know his or her or their status
            loadUserStatus();
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <FiltersProvider>
                    <>
                        <Header />
                        <MainContent />
                        <Footer />
                        
                    </>
                </FiltersProvider>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
