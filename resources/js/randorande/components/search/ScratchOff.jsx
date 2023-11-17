import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// below imports search data from DateSearch.jsx component via ResultsContext.js
import { useFiltersContext } from "../../FiltersContext";

export default function ScratchOff() {
    // below uses the filters context to fetch from API
    const { state, dispatch } = useFiltersContext();
    // below is variable for reroute navigation
    // user will be rerouted back to the DateSearch page upon refresh
    const navigate = useNavigate();
    // for retrieving the date idea search results
    const [results, setResults] = useState([]);

    // FETCH CODE BELOW
    // Fetch data from API based on filters
    const fetchRande = async () => {
        try {
            const response = await fetch(
                `/api/date-search/results?budget=${state.budgetFilter}&season=${state.seasonFilter}&locality=${state.localityFilter}`
            );
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRande();
    }, []); // the [] ensures the fetch happens only once

    // BELOW: main useState hook variables
    // for referencing canvases
    const canvasRefs = useRef(Array(results?.length).fill(null));
    // for setting the hint as either a hint or the date name upon 60% scratch
    const [hint, setHint] = useState(null);
    // for setting the relevant button as visible upon 60% scratch
    const [buttonVisible, setButtonVisible] = useState([]); //false earlier
    // for tracking the index of the canvas being scratched
    const [scratchedCanvasIndex, setScratchedCanvasIndex] = useState(null);
    // for tracking the scratch percentage for each canvas
    const [scratchPercentage, setScratchPercentage] = useState(
        Array(results?.length).fill(0)
    );
    // BELOW: for loading the DOC elements in the correct order
    const [scratchableImage, setScratchableImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [canvasesReady, setCanvasesReady] = useState(false);
    // // console.log(results);
    // // console.log(canvasRefs.current.length);

    // canvases are loaded when there is the same number of them
    // as is the number of results, and they all have their own references
    const allCanvasesLoaded =
        canvasRefs.current.length === results?.length &&
        undefined === canvasRefs.current.find((item) => item === null);

    useEffect(() => {
        // // console.log("allCanvasesLoaded", allCanvasesLoaded);
        if (imageLoaded && allCanvasesLoaded) {
            // // console.log("ALL READY, initializeCanvases");
            initializeCanvases();
        }
    }, [imageLoaded, allCanvasesLoaded]); // mounts when scratch texture img and canvases are loaded

    const initializeCanvases = () => {
        // // console.log(scratchableImage);
        // // console.log(canvasRefs.current.length);
        canvasRefs.current.forEach((canvas, index) => {
            if (canvas) {
                const ctx = canvas.getContext("2d");
                const parentWidth = canvas.parentNode.clientWidth;
                const parentHeight = canvas.parentNode.clientHeight;

                // set canvas width and height to match parent element
                canvas.width = parentWidth;
                canvas.height = parentHeight;

                // assuming 'img' is an image element that is to be drawn
                // // console.log("Drawing image", parentWidth, parentHeight);
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
        img.onload = function () {
            // // console.log("Setting image loaded");
            setImageLoaded(true);
        };
        // log an error if image doesn't load
        img.onerror = (error) =>
            console.error("Error loading texture image:", error);

        setScratchableImage(img);
    };

    // useEffect hook will load the textureImage onto the canvas surface when the component mounts
    useEffect(() => {
        // initialize buttonVisible array with false values for each result
        setButtonVisible(Array(results?.length).fill(false));
    }, [results]);

    // pre-load the scratchable image just once
    // this pre-load only once is crucial for saving scratch history
    useEffect(() => {
        // // console.log("Loading one image");
        loadImage();
    }, []);

    // NAVIGATE: The following useEffects will redirect the user back to the DateSearch page if they refresh the page
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Set a flag in localStorage to indicate that the page is being refreshed
            localStorage.setItem("isPageRefreshed", "true");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        // Check if the page is refreshed
        const isPageRefreshed = localStorage.getItem("isPageRefreshed");

        if (isPageRefreshed) {
            // Clear the flag in localStorage
            localStorage.removeItem("isPageRefreshed");

            // Redirect to the search component
            navigate("/date-search");
        }
    }, [navigate]);
    // END OF NAVIGATE CODE

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
        }
    };

    // new useEffect for handling scratchPercentage updates
    useEffect(() => {
        if (scratchPercentage[scratchedCanvasIndex] >= 60) {
            const timeoutId = setTimeout(() => {
                persistScratch(scratchedCanvasIndex)();
            }, 500); // adjust the delay duration as needed

            // cleanup the timeout on component unmount or when the scratch state changes
            return () => clearTimeout(timeoutId);
        }
    }, [scratchedCanvasIndex, scratchPercentage[scratchedCanvasIndex]]);

    // function to handle scratching (mousemove or touchmove event)
    const scratch = (index) => (e) => {
        if (canvasesReady) {
            const canvas = canvasRefs.current[index];
            if (!canvas) {
                // handle the case where canvas is not defined
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
                const radius = 40; // adjust the brush size of the scratch

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
                const totalPixels = pixels.length / 4; // each pixel has 4 values (R, G, B, A)
                const transparentPixels = Array.from(pixels).filter(
                    (pixel, i) => i % 4 === 3 && pixel === 0
                );
                const transparentPercentage =
                    (transparentPixels.length / totalPixels) * 100;

                // update scratch percentage
                setScratchPercentage((prev) => {
                    const newPercentages = [...prev];
                    newPercentages[index] = transparentPercentage;
                    return newPercentages;
                });

                // if the scratch is at 60%, update hint and show "Let's rande!" button
                if (transparentPercentage >= 60) {
                    // update hint content
                    setHint({
                        resultIndex: index,
                        text: results[index].name,
                    });
                    // only show the button if it's not already visible
                    if (!buttonVisible[index]) {
                        // show "Let's rande!" button for the current canvas
                        setButtonVisible((prev) => {
                            const newVisibility = [...prev];
                            newVisibility[index] = true;
                            return newVisibility;
                        });
                    }
                    // set the index of the scratched canvas
                    setScratchedCanvasIndex(index);
                    // // console.log(
                    //     "Transparent Percentage:",
                    //     transparentPercentage
                    // );
                    // // console.log("Button Visible:", buttonVisible[index]);
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
        // console.log("Persisting scratch for index:", index);
        // Set the index of the scratched canvas
        setScratchedCanvasIndex(index);
        // show "Let's rande!" button for the current canvas
        setButtonVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
        });
        // below targets the canvases so that a pointerEvent can be disabled
        const scratchAreas = document.querySelectorAll(".scratch_card__mask");
        // console.log(scratchAreas);
        scratchAreas.forEach((area) => {
            // if the id of the area does not contain the index of the 1 card scratched more than 60%
            // we will disable scratching on them
            if (!area.id.includes(String(index))) {
                // console.log("huy");
                area.style.pointerEvents = "none";
            }
        });
    };

    // render component
    return (
        <>
            <h1 className="results_h1">Your Date Idea Results</h1>
            <p className="scratch_instructions">
                Check the hints and select 1 date to scratch
            </p>
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
                                    onMouseLeave={() => persistScratch(index)}
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
                                <h5 className="scratchOff_container__child-hint">
                                    {hint && hint.resultIndex == index
                                        ? hint.text
                                        : rande.hint_path}
                                </h5>
                            </div>

                            <div className="button_div">
                                {/* below button saves the rande but only appears after a percentage of scratch */}
                                {scratchPercentage[index] >= 60 ? (
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
                                    "" // ...or show an empty string (don't delete this)
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
