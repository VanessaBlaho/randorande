import Modal from "react-modal";
import { Link } from "react-router-dom";

const ModalWindow = ({ isOpen, closeModal }) => {

    const customModalStyles = {
        overlay: {
            backgroundColor: "none",
        },
        content: {
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            maxWidth: "600px",
            height: "fit-content",
            margin: "0 auto",
            padding: "0.3rem 0.6rem",
            borderRadius: "4px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // add a subtle box shadow
            color: "#000",
            border: "none",
            inset: "36px",
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="How It Works Modal"
            style={customModalStyles}
            
        >
            <div className="homepage__instructions">
                <h3 className="homepage__instructions-title">HOW IT WORKS</h3>

                <ul className="homepage__instructions-list">
                    <li className="homepage__instructions-item">
                        &#9829; What kind of date are you in the mood for?
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Choose your search parameters
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Get 3 random date ideas based on your search
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Based on hints, choose which date you want
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Scratch off to reveal your date
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Go on your date with your significant other
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Keep track of your dating journey in your
                        Journal
                    </li>
                    <li className="homepage__instructions-item">
                        &#9829; Make everlasting memories
                    </li>
                </ul>
                {/* <button className="homepage__instructions-btn-trigger"> */}
                <Link
                    to={"/date-search"}
                    className="homepage__instructions-btn-trigger"
                >
                    Gimme ideas!
                </Link>
                {/* </button> */}
            </div>

            <div className="modal_btn__container"><button onClick={closeModal}>X</button></div>
        </Modal>
    );
};

export default ModalWindow;