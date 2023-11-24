import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalWindow from "./ModalWindow";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../UserContext";

Modal.setAppElement("#randorande-app");

export default function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

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

    const handleButtonClick = () => {
        // Toggle the isButtonClicked state
        setIsButtonClicked(!isButtonClicked);
    };

    const homepageStyle = {
        backgroundImage: "url('/images/homepage/rr_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* Additional background properties as needed */
        minHeight: "100vh", // Ensure the container covers the entire viewport height
    };

    const { user, setUser } = useContext(UserContext);
    // setUser("logged");

    return (
        <>
            <div
                className={`homepage ${isModalOpen ? "modal-open" : ""}`}
                style={homepageStyle}
            >
                {!isMobile && (
                    <img
                        className="logo"
                        src="/images/homepage/RR_logo_ALL.svg"
                        alt="RandoRande logo"
                        style={{ display: isModalOpen ? "none" : "block" }}
                    />
                )}

                {isMobile ? (
                    <>
                        <img
                            className="logo"
                            src="/images/homepage/RR_logo_ALL.svg"
                            alt="RandoRande logo"
                            // style={{ display: isModalOpen ? "none" : "block" }}
                        />
                        <button
                            className="modal_btn"
                            onClick={handleButtonClick}
                            // style={{ display: isModalOpen ? "none" : "block" }}
                        >
                            HOW DOES IT WORK?
                        </button>
                        {isButtonClicked && (
                            <>
                                <ul className="button-clicked__text">
                                    <h4 className="how_it_works__headline">
                                        HOW IT WORKS
                                    </h4>
                                    <li>
                                        &#9829; What kind of date are you in the
                                        mood for?
                                    </li>
                                    <li>
                                        &#9829; Choose your search parameters
                                    </li>
                                    <li>
                                        &#9829; Get up to 3 random date ideas
                                        based on your search
                                    </li>
                                    <li>
                                        &#9829; Based on hints, choose which
                                        date you want
                                    </li>
                                    <li>
                                        &#9829; Scratch off to reveal your date
                                    </li>
                                    <li>
                                        &#9829; Go on your date with your
                                        significant other
                                    </li>
                                    <li>
                                        &#9829; Keep track of your dating
                                        journey in your Journal
                                    </li>
                                    <li>&#9829; Make everlasting memories</li>

                                    {!user ? (
                                        <>
                                            <li
                                                style={{
                                                    marginTop: "1rem",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {" "}
                                                <Link
                                                    to="/login"
                                                    className="homepage__instructions-btn-trigger"
                                                >
                                                    GIMME IDEAS!
                                                </Link>{" "}
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li
                                                style={{
                                                    marginTop: "1rem",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Link
                                                    to={"/date-search"}
                                                    className="homepage__instructions-btn-trigger"
                                                >
                                                    GIMME IDEAS!
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <button
                            className="modal_btn"
                            onClick={openModal}
                            style={{ display: isModalOpen ? "none" : "block" }}
                        >
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
