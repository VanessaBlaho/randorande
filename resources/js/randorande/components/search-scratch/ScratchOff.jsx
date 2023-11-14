import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import DateSearch from "../search-scratch/DateSearch";

export default function ScratchOff() {
    // useState hook variables
    // array of selected randes from search
    const [selectedRandes, setSelectedRandes] = useState([]);
    // image object for canvas texture
    const [textureImage, setTextureImage] = useState(new Image());

    // useEffect hook will load the textureImage onto the canvas surface when the component mounts
    useEffect(() => {
        // below functions loads the texture image
        const loadImage = () => {
            const img = new Image();
            img.src = "/images/scratchOff/scratchOff_background.png";
            // below sets the texture image when it's loaded
            img.onload = () => setTextureImage(img);
            // log an error if image doesn't load
            img.onerror = (error) =>
                console.error("Error loading texture image:", error);
        };

        // call function
        loadImage();
    }, []);

    // function to start scratching (mousedown or touchstart event)
    const startScratching = (index) => (e) => {
        e.preventDefault();
        // update the selectedRandes state to indicate scratching has started
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: true },
            ...prev.slice(index + 1),
        ]);
    };

    // function to stop scratching (mouseup or touchend event)
    const stopScratching = (index) => () => {
        // updated selectedRandes state to indicate scratching has stopped
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    // function to handle scratching (mousemove or touchmove event)
    const scratch = (index) => (e) => {
        // check if scratching is in progress
        if (selectedRandes[index] && selectedRandes[index].isScratching) {
            // extract coordinates and calculate offset
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            const { left, top } =
                selectedRandes[index].canvas.getBoundingClientRect();
            const offsetX = clientX - left;
            const offsetY = clientY - top;
            const radius = 30; // adjust the brush size of the scratch

            // clear a circular area to reveal the underlying content
            selectedRandes[index].ctx.globalCompositeOperation =
                "destination-out";
            selectedRandes[index].ctx.beginPath();

            // draw the textured image onto the canvas
            selectedRandes[index].ctx.drawImage(
                textureImage,
                offsetX - radius,
                offsetY - radius,
                2 * radius,
                2 * radius
            );

            // code below creates a "jagged" scratch appearance
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const x = offsetX + Math.cos(angle) * radius * Math.random();
                const y = offsetY + Math.sin(angle) * radius * Math.random();
                selectedRandes[index].ctx.lineTo(x, y);
            }

            selectedRandes[index].ctx.fill();
            selectedRandes[index].ctx.globalCompositeOperation = "source-over";

            // check if the scratch is at 90%
            const imageData = selectedRandes[index].ctx.getImageData(
                0,
                0,
                selectedRandes[index].canvas.width,
                selectedRandes[index].canvas.height
            );
            const pixels = imageData.data;
            const totalPixels = pixels.length / 4; // Each pixel has 4 values (R, G, B, A)
            const transparentPixels = Array.from(pixels).filter(
                (pixel, i) => i % 4 === 3 && pixel === 0
            );
            const transparentPercentage =
                (transparentPixels.length / totalPixels) * 100;

            // if the scratch is at 90%, update hint and show "Let's rande!" button
            if (transparentPercentage >= 90) {
                // Update hint and show "Let's rande!" button
                document.querySelector(
                    ".scratchOff_container__child-hint"
                ).innerText = selectedRandes[index].rande.name;
                document.querySelector(".save_rande_btn").style.display =
                    "block";
            }
        }
    };

    // function to handle rande selection
    const handleRandeSelect = (index, rande) => {
        // update the selectedRandes state with the selected rande
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], rande, isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    // render component
    return (
        <div>
            {/* display from randes search */}
            <div className="scratchOff_container__parent">
                {selectedRandes.map((rande, index) => (
                    <div
                        key={rande.id}
                        id={rande.id}
                        className="scratchOff_container__child"
                    >
                        <div className="scratchOff_container__child_scratch-card">
                            <canvas
                                className="scratch_card__mask"
                                onMouseDown={startScratching(index)}
                                onTouchStart={startScratching(index)}
                                onMouseUp={stopScratching(index)}
                                onTouchEnd={stopScratching(index)}
                                onMouseMove={scratch(index)}
                                onTouchMove={scratch(index)}
                                style={{
                                    cursor: selectedRandes[index]?.isScratching
                                        ? "url(/images/cursors/coin-in-hand.png) 0 0, auto"
                                        : "url(/images/cursors/coin-scratch.png) 0 0, auto",
                                }}
                            ></canvas>
                            <img
                                className="scratch_card__reveal-rande-img"
                                src={rande.image_path}
                                alt={rande.name}
                            />
                        </div>
                        <div className="scratchOff_container__child-hint-container">
                            <h1 className="scratchOff_container__child-hint">
                                {rande.hint_path}
                            </h1>
                        </div>
                        <button
                            className="save_rande_btn"
                            onClick={() => handleRandeSelect(index, rande)}
                        >
                            Let's rande!
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
