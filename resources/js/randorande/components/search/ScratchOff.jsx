import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ResultsContext from "../../ResultsContext";
// import DateSearch from "../search-scratch/DateSearch";

export default function ScratchOff() {
    // BELOW: useState hook variables
    const { results, setResults } = useContext(ResultsContext);

    // for setting the hint as either a hint or the date name upon 90% scratch
    const [hint, setHint] = useState(null);
    // for setting the button as visible upon 90% scratch
    const [buttonVisible, setButtonVisible] = useState(false);
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
        // update the results state to indicate scratching has started
        setResults((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: true },
            ...prev.slice(index + 1),
        ]);
    };

    // function to stop scratching (mouseup or touchend event)
    const stopScratching = (index) => () => {
        // updated results state to indicate scratching has stopped
        setResults((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    // function to handle scratching (mousemove or touchmove event)
    const scratch = (index) => (e) => {
        // check if scratching is in progress
        if (results[index] && results[index].isScratching) {
            // extract coordinates and calculate offset
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            const { left, top } = results[index].canvas.getBoundingClientRect();
            const offsetX = clientX - left;
            const offsetY = clientY - top;
            const radius = 30; // adjust the brush size of the scratch

            // clear a circular area to reveal the underlying content
            results[index].ctx.globalCompositeOperation = "destination-out";
            results[index].ctx.beginPath();

            // draw the textured image onto the canvas
            results[index].ctx.drawImage(
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
                results[index].ctx.lineTo(x, y);
            }

            results[index].ctx.fill();
            results[index].ctx.globalCompositeOperation = "source-over";

            // check if the scratch is at 90%
            const imageData = results[index].ctx.getImageData(
                0,
                0,
                results[index].canvas.width,
                results[index].canvas.height
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
                // update hint content
                setHint({
                    resultIndex: index,
                    text: results[index].rande.name,
                });
                // show "Let's rande!" button
                setButtonVisible(true);
            }
        }
    };

    // function to handle rande selection
    const handleRandeSelect = (index, rande) => {
        // update the results state with the selected rande
        setResults((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], rande, isScratching: false },
            ...prev.slice(index + 1),
        ]);
    };

    // render component
    return (
        <>
            {/* DISPLAY FROM RANDES SEARCH */}
            {/* below div contains all 3 scratch-offs */}
            <div className="scratchOff_container__parent">
                {results.map((rande, index) => (
                    // below div contains 1 scratch-off
                    <div
                        key={rande.id}
                        id={rande.id}
                        className="scratchOff_container__child"
                    >
                        {/* below div contains just the scratch card with scratch area and reveal image */}
                        <div className="scratchOff_container__child_scratch-card">
                            {/* below canvas is actual scratch area */}
                            <canvas
                                className="scratch_card__mask"
                                onMouseDown={startScratching(index)}
                                onTouchStart={startScratching(index)}
                                onMouseUp={stopScratching(index)}
                                onTouchEnd={stopScratching(index)}
                                onMouseMove={scratch(index)}
                                onTouchMove={scratch(index)}
                                style={{
                                    cursor: results[index]?.isScratching
                                        ? "url(/images/cursors/coin-in-hand.png) 0 0, auto"
                                        : "url(/images/cursors/coin-scratch.png) 0 0, auto",
                                }}
                            ></canvas>
                            {/* below img is revealed under mask */}
                            <img
                                className="scratch_card__reveal-rande-img"
                                src={rande.image_path}
                                alt={rande.name}
                            />
                        </div>
                        {/* below div contains hint / hint will be h1 text for now but later an icon image */}
                        <div className="scratchOff_container__child-hint-container">
                            <h1 className="scratchOff_container__child-hint">
                                {hint && hint.resultIndex == index
                                    ? hint.text
                                    : rande.hint_path}
                            </h1>
                        </div>
                        {/* below button saves the rande but only appears after a percentage of scratch */}
                        {buttonVisible ? (
                            // display button...
                            <Link to={`/randes/${rande.id}`}>
                                <button
                                    className="save_rande_btn"
                                    onClick={() =>
                                        handleRandeSelect(index, rande)
                                    }
                                >
                                    Let's rande!
                                </button>
                            </Link>
                        ) : (
                            "" // ...or show empty string
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
