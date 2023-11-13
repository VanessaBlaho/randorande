import React from "react";
import { createRoot } from "react-dom/client";
import App from "./randorande/App";

export default function RandoRandeApp() {
    return <App />;
}

const container = document.getElementById("randorande-app");
const root = createRoot(container);
root.render(<RandoRandeApp />);
