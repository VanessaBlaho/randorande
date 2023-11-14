import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/layout/MainContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { RevealedDateDetail } from "./components/RevealedDateDetail";

export default function App() {
    return (
        <BrowserRouter>
            <>
                <Header />
                <MainContent />
                <Footer />
            </>
        </BrowserRouter>
    );
}
