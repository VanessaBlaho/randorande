import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import DateSearch from "../search-scratch/DateSearch";

export default function ScratchOff() {
    const [selectedRandes, setSelectedRandes] = useState([]);
    const [randes, setRandes] = useState([]);

    const startScratching = (index) => (e) => {
        e.preventDefault();
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: true },
            ...prev.slice(index + 1),
        ]);
    };

    const stopScratching = (index) => () => {
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    const scratch = (index) => (e) => {
        if (selectedRandes[index] && selectedRandes[index].isScratching) {
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            const { left, top } =
                selectedRandes[index].canvas.getBoundingClientRect();
            const offsetX = clientX - left;
            const offsetY = clientY - top;
            const radius = 30; // Adjust the brush size as needed

            // Clear a circular area to reveal the underlying content
            selectedRandes[index].ctx.globalCompositeOperation =
                "destination-out";
            selectedRandes[index].ctx.beginPath();

            // Code below creates a "jagged" scratch appearance
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const x = offsetX + Math.cos(angle) * radius * Math.random();
                const y = offsetY + Math.sin(angle) * radius * Math.random();
                selectedRandes[index].ctx.lineTo(x, y);
            }

            selectedRandes[index].ctx.fill();
            selectedRandes[index].ctx.globalCompositeOperation = "source-over";

            // Check if the scratch is at 90%
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

    const handleRandeSelect = (index, rande) => {
        setSelectedRandes((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], rande, isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    return (
        <div>
            {/* display randes from search */}
            <div className="scratchOff_container__parent">
                {randes.map((rande, index) => (
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
                            ></canvas>
                            <img
                                className="scratch_card__reveal-rande-img"
                                src={rande.image_path}
                                alt={rande.name}
                            />
                        </div>
                        <div className="scratchOff_container__child-hint-container">
                            <h1 className="scratchOff_container__child-hint">
                                {rande.hint}
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
