import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/layout/MainContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DateSearch from "./components/DateSearch";

export default function App() {
    return (
        <BrowserRouter>
            <>
                <Header />
                {/* <Header />
                <MainContent />
                <Footer /> */}
                <DateSearch />
            </>
        </BrowserRouter>
    );
}
