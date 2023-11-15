import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ResultsContext from "../../ResultsContext";
// import DateSearch from "../search-scratch/DateSearch";

export default function ScratchOff() {
    // BELOW: useState hook variables
    const { results, setResults } = useContext(ResultsContext);

    const canvasRefs = useRef(Array(results.length).fill(null));
    // for setting the hint as either a hint or the date name upon 75% scratch
    const [hint, setHint] = useState(null);
    // for setting the button as visible upon 75% scratch
    const [buttonVisible, setButtonVisible] = useState([]); //false earlier
    // THIS Track the index of the canvas being scratched
    const [scratchedCanvasIndex, setScratchedCanvasIndex] = useState(null);
    // Track scratch percentage for each canvas
    const [scratchPercentage, setScratchPercentage] = useState(
        Array(results.length).fill(0)
    );

    const [scratchableImage, setScratchableImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [canvasesReady, setCanvasesReady] = useState(false);
    console.log(results);
    console.log(canvasRefs.current.length);

    // canvases are loaded when there is the same number of them
    // as is the number of results and they all have their references
    const allCanvasesLoaded =
        canvasRefs.current.length === results.length &&
        undefined === canvasRefs.current.find((item) => item === null);

    useEffect(() => {
        console.log("allCanvasesLoaded", allCanvasesLoaded);
        if (imageLoaded && allCanvasesLoaded) {
            console.log("ALL READY, initializeCanvases");
            initializeCanvases();
        }
    }, [imageLoaded, allCanvasesLoaded]);

    const initializeCanvases = () => {
        console.log(scratchableImage);
        console.log(canvasRefs.current.length);
        canvasRefs.current.forEach((canvas, index) => {
            if (canvas) {
                const ctx = canvas.getContext("2d");
                const parentWidth = canvas.parentNode.clientWidth;
                const parentHeight = canvas.parentNode.clientHeight;

                // Set canvas width and height
                canvas.width = parentWidth;
                canvas.height = parentHeight;

                // Assuming 'img' is an image element you want to draw
                console.log("Drawing image", parentWidth, parentHeight);
                ctx.drawImage(
                    scratchableImage,
                    0,
                    0,
                    parentWidth,
                    parentHeight
                );
            } else {
                console.error("Canvas is not defined at index", index);
            }
        });

        setCanvasesReady(true);
    };

    const loadImage = () => {
        const img = new Image();
        img.src = "/images/scratchOff/scratchOff_background.png";
        // below sets the texture image when it's loaded
        // img.onload = () => setTextureImage(img);
        img.onload = function () {
            console.log("Setting image loaded");
            setImageLoaded(true);
            // setTextureImage(img);
        };
        // log an error if image doesn't load
        img.onerror = (error) =>
            console.error("Error loading texture image:", error);

        setScratchableImage(img);
    };

    // useEffect hook will load the textureImage onto the canvas surface when the component mounts
    useEffect(() => {
        //THIS // Initialize buttonVisible array with false values for each result
        setButtonVisible(Array(results.length).fill(false));
    }, [results]);

    // pre-load the scratchabe image just once
    useEffect(() => {
        console.log("Loading one image");
        // below functions loads the texture image
        loadImage();
    }, []);

    // function to start scratching (mousedown or touchstart event)
    const startScratching = (index) => (e) => {
        e.preventDefault();
        if (canvasesReady) {
            setResults((prev) => [
                ...prev.slice(0, index),
                { ...prev[index], isScratching: true },
                ...prev.slice(index + 1),
            ]);
        }
    };

    // function to stop scratching (mouseup or touchend event)
    const stopScratching = (index) => () => {
        if (canvasesReady) {
            // updated results state to indicate scratching has stopped
            setResults((prev) => [
                ...prev.slice(0, index),
                { ...prev[index], isScratching: false },
                ...prev.slice(index + 1),
            ]);
            // Call persistScratch to keep the scratch state
            // Add a delay before calling persistScratch to allow the canvas to update
            // setTimeout(() => {
            //     persistScratch(index)();
            // }, 1000); // adjust the delay duration as needed
        }
    };

    // New useEffect for handling scratchPercentage updates
    useEffect(() => {
        if (scratchPercentage[scratchedCanvasIndex] >= 75) {
            const timeoutId = setTimeout(() => {
                persistScratch(scratchedCanvasIndex)();
            }, 1000); // Adjust the delay duration as needed

            // Cleanup the timeout on component unmount or when the scratch state changes
            return () => clearTimeout(timeoutId);
        }
    }, [scratchedCanvasIndex, scratchPercentage[scratchedCanvasIndex]]);

    // function to handle scratching (mousemove or touchmove event)
    const scratch = (index) => (e) => {
        // EXPERIMENT:
        if (canvasesReady) {
            // THIS
            const canvas = canvasRefs.current[index];
            if (!canvas) {
                // Handle the case where canvas is not defined
                console.error("Canvas is not defined at index", index);
                return;
            }
            const ctx = canvas.getContext("2d");

            // check if scratching is in progress
            if (results[index] && results[index].isScratching) {
                // extract coordinates and calculate offset
                const { clientX, clientY } = e.touches ? e.touches[0] : e;
                const { left, top } = canvas.getBoundingClientRect();
                const offsetX = clientX - left;
                const offsetY = clientY - top;
                const radius = 50; // adjust the brush size of the scratch

                // clear a circular area to reveal the underlying content
                ctx.globalCompositeOperation = "destination-out";
                ctx.beginPath();

                // code below creates a "jagged" scratch appearance
                for (let i = 0; i < 20; i++) {
                    const angle = Math.random() * 2 * Math.PI;
                    const x =
                        offsetX + Math.cos(angle) * radius * Math.random();
                    const y =
                        offsetY + Math.sin(angle) * radius * Math.random();
                    ctx.lineTo(x, y);
                }

                ctx.fill();
                ctx.globalCompositeOperation = "source-over";

                const imageData = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                ctx.canvas.getContext("2d").willReadFrequently = true;

                const pixels = imageData.data;
                const totalPixels = pixels.length / 4; // Each pixel has 4 values (R, G, B, A)
                const transparentPixels = Array.from(pixels).filter(
                    (pixel, i) => i % 4 === 3 && pixel === 0
                );
                const transparentPercentage =
                    (transparentPixels.length / totalPixels) * 100;

                // Update scratch percentage
                setScratchPercentage((prev) => {
                    const newPercentages = [...prev];
                    newPercentages[index] = transparentPercentage;
                    return newPercentages;
                });

                // if the scratch is at 75%, update hint and show "Let's rande!" button
                if (transparentPercentage >= 75) {
                    // update hint content
                    setHint({
                        resultIndex: index,
                        text: results[index].name,
                    });
                    // Only show the button if it's not already visible
                    if (!buttonVisible[index]) {
                        // show "Let's rande!" button for the current canvas
                        setButtonVisible((prev) => {
                            const newVisibility = [...prev];
                            newVisibility[index] = true;
                            return newVisibility;
                        });
                    }
                    // Set the index of the scratched canvas
                    setScratchedCanvasIndex(index);
                    console.log(
                        "Transparent Percentage:",
                        transparentPercentage
                    );
                    console.log("Button Visible:", buttonVisible[index]);
                }
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

    // function to persist the scratch when mouse leaves
    const persistScratch = (index) => () => {
        console.log("Persisting scratch for index:", index);
        // Set the index of the scratched canvas
        setScratchedCanvasIndex(index);
        // show "Let's rande!" button for the current canvas
        setButtonVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
        });
    };

    // render component
    return (
        <>
            {canvasesReady && (
                /* DISPLAY FROM RANDES SEARCH */
                /* below div contains all 3 scratch-offs */
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
                                    id={`scratch-${index}`}
                                    ref={(ref) =>
                                        (canvasRefs.current[index] = ref)
                                    }
                                    className="scratch_card__mask"
                                    onMouseDown={startScratching(index)}
                                    onTouchStart={startScratching(index)}
                                    onMouseUp={stopScratching(index)}
                                    onTouchEnd={stopScratching(index)}
                                    onMouseMove={scratch(index)}
                                    onTouchMove={scratch(index)}
                                    // onMouseLeave={persistScratch(index)}
                                    onMouseLeave={() => persistScratch(index)}
                                    // onTouchCancel={persistScratch(index)}
                                    onTouchCancel={() => persistScratch(index)}
                                    style={{
                                        cursor: results[index]?.isScratching
                                            ? "url(/images/cursors/coin-scratch.png) 0 0, auto"
                                            : "url(/images/cursors/coin-in-hand.png) 0 0, auto",
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
                                <h3 className="scratchOff_container__child-hint">
                                    {hint && hint.resultIndex == index
                                        ? hint.text
                                        : rande.hint_path}
                                </h3>
                            </div>
                            <div className="button_div">
                                {/* below button saves the rande but only appears after a percentage of scratch */}
                                {scratchPercentage[index] >= 75 ? (
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
                                    "" // ...or show an empty string
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
