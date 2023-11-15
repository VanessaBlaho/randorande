import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ResultsContext from "./ResultsContext";
import MainContent from "./components/layout/MainContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
    const [results, setResults] = useState([]);

    return (
        <ResultsContext.Provider value={{ results, setResults }}>
            <BrowserRouter>
                <>
                    <Header />
                    <MainContent />
                    <Footer />
                </>
            </BrowserRouter>
        </ResultsContext.Provider>
    );
}
