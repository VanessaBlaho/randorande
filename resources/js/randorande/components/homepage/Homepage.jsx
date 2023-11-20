import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalWindow from "./ModalWindow";
import { useState, useEffect } from "react";

Modal.setAppElement("#randorande-app");

export default function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Update the state based on the window width
            setIsMobile(window.innerWidth <= 767);
        };

        // Initial check and add event listener for window resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const homepageStyle = {
        backgroundImage: "url('/images/homepage/rr_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* Additional background properties as needed */
        minHeight: "100vh", // Ensure the container covers the entire viewport height
    };

    return (
        <>
            <div className="homepage" style={homepageStyle}>
                <img
                    className="logo"
                    src="/images/homepage/RR_logo_ALL.svg"
                    alt=""
                />
                {isMobile ? (
                    <button className="modal_btn">HOW DOES IT WORK?</button>
                ) : (
                    <>
                        <button className="modal_btn" onClick={openModal}>
                            HOW DOES IT WORK?
                        </button>
                        <ModalWindow
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    </>
                )}
            </div>
        </>
    );
}

{
    /* <div className="homepage__instructions">
                    <h1 className="homepage__instructions-title">
                        How it works
                    </h1>

                    <ul className="homepage__instructions-list">
                        <li className="homepage__instructions-item">
                            What kind of date are you in the mood for?
                        </li>
                        <li className="homepage__instructions-item">
                            Choose your search parameters
                        </li>
                        <li className="homepage__instructions-item">
                            Get 3 random date ideas based on your search
                        </li>
                        <li className="homepage__instructions-item">
                            Based on hints, choose which date you want
                        </li>
                        <li className="homepage__instructions-item">
                            Scratch off to reveal your date
                        </li>
                        <li className="homepage__instructions-item">
                            Go on your date with your significant other
                        </li>
                        <li className="homepage__instructions-item">
                            Keep track of your dating journey in your Journal
                        </li>
                        <li className="homepage__instructions-item">
                            Make everlasting memories
                        </li>
                    </ul>
                    <button className="homepage__instructions-btn-trigger">
                        <Link to={"/date-search"}>Gimme ideas!</Link>
                    </button>
                </div> */
}
