import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./FiltersContext";
import MainContent from "./components/layout/MainContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


export default function App() {

    return (
        <BrowserRouter>
            <FiltersProvider>
                <>
                    <Header />
                    <MainContent />
                    <Footer />
                    
                </>
            </FiltersProvider>
        </BrowserRouter>
    );
}
