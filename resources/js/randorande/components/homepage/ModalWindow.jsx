import Modal from "react-modal";
import { Link } from "react-router-dom";

const ModalWindow = ({ isOpen, closeModal }) => {

    const customModalStyles = {
        overlay: {
            backgroundColor: "rgba(32, 31, 30, 0.8)",
        },
        content: {
            width: "fit-content", 
            height: "fit-content",
            margin: "0 auto", 
            padding: "0",
            borderRadius: "4px", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // add a subtle box shadow
            background: "rgba(255, 255, 255, 0.9)",
            color: "#000",
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
                <h3 className="homepage__instructions-title">How it works</h3>

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
                {/* <button className="homepage__instructions-btn-trigger"> */}
                    <Link
                        to={"/date-search"}
                        className="homepage__instructions-btn-trigger"
                    >
                        Gimme ideas!
                    </Link>
                {/* </button> */}
            </div>

            <button onClick={closeModal}>x</button>
        </Modal>
    );
};

export default ModalWindow;