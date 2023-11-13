import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/homepage/MainContent";

export default function App() {
    return (
        <BrowserRouter>
            <>
                <MainContent />
            </>
        </BrowserRouter>
    );
}
