// DON'T DELETE
// FOR TESTING ONLY
// BELOW IS FOR STORING CODE AS BACKUP THAT WON'T BE USED


// import React, { useState, useEffect, useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import ResultsContext from "../../ResultsContext";
// // import DateSearch from "../search-scratch/DateSearch";

// export default function ScratchOff() {
//     // BELOW: useState hook variables
//     const { results, setResults } = useContext(ResultsContext);

//     const canvasRefs = useRef([]);

//     // for setting the hint as either a hint or the date name upon 90% scratch
//     const [hint, setHint] = useState(null);
//     // for setting the button as visible upon 90% scratch
//     const [buttonVisible, setButtonVisible] = useState(false);
//     // image object for canvas texture
//     const [textureImage, setTextureImage] = useState(null);

//     const loadImage = () => {
//         const img = new Image();
//         img.src = "/images/scratchOff/scratchOff_background.png";
//         // below sets the texture image when it's loaded
//         // img.onload = () => setTextureImage(img);
//         img.onload = function () {
//             // Set up the canvas dimensions to match the container
//             // canvas.width = card.clientWidth;
//             // canvas.height = card.clientHeight;
//             // draw the textured image onto the canvas

//             canvasRefs.current.forEach((canvas) => {
//                 const ctx = canvas.getContext("2d");
//                 const width = canvas.parentNode.clientWidth;
//                 const height = canvas.parentNode.clientHeight;
//                 ctx.drawImage(img, 0, 0, width, height);
//             });

//             // const canvas = document.querySelectorAll(".scratch_card__mask");
//             // canvas.forEach((canva) => {
//             //     const ctx = canva.getContext("2d");
//             //     const width = canva.parentNode.clientWidth;
//             //     const height = canva.parentNode.clientHeight;
//             //     // console.log(canva.parentNode);
//             //     console.log(width);
//             //     console.log(height);
//             //     ctx.drawImage(img, 0, 0, width, height);
//             // });

//             // setTextureImage(img);
//         };
//         // log an error if image doesn't load
//         img.onerror = (error) =>
//             console.error("Error loading texture image:", error);

//         console.log(img);
//     };

//     // useEffect hook will load the textureImage onto the canvas surface when the component mounts
//     useEffect(() => {
//         // below functions loads the texture image

//         // call function
//         loadImage();
//     }, [results]);

//     // function to start scratching (mousedown or touchstart event)
//     const startScratching = (index) => (e) => {
//         e.preventDefault();
//         // update the results state to indicate scratching has started
//         setResults((prev) => [
//             ...prev.slice(0, index),
//             { ...prev[index], isScratching: true },
//             ...prev.slice(index + 1),
//         ]);
//     };

//     // function to stop scratching (mouseup or touchend event)
//     const stopScratching = (index) => () => {
//         // updated results state to indicate scratching has stopped
//         setResults((prev) => [
//             ...prev.slice(0, index),
//             { ...prev[index], isScratching: false },
//             ...prev.slice(index + 1),
//         ]);
//     };

//     // function to handle scratching (mousemove or touchmove event)
//     const scratch = (index) => (e) => {
//         const canvas = e.target;
//         const ctx = canvas.getContext("2d");

//         // check if scratching is in progress
//         if (results[index] && results[index].isScratching) {
//             // extract coordinates and calculate offset
//             const { clientX, clientY } = e.touches ? e.touches[0] : e;
//             const { left, top } = canvas.getBoundingClientRect();
//             const offsetX = clientX - left;
//             const offsetY = clientY - top;
//             const radius = 30; // adjust the brush size of the scratch

//             // clear a circular area to reveal the underlying content
//             ctx.globalCompositeOperation = "destination-out";
//             ctx.beginPath();

//             // // draw the textured image onto the canvas
//             // ctx.drawImage(
//             //     textureImage,
//             //     offsetX - radius,
//             //     offsetY - radius,
//             //     2 * radius,
//             //     2 * radius
//             // );

//             // code below creates a "jagged" scratch appearance
//             for (let i = 0; i < 20; i++) {
//                 const angle = Math.random() * 2 * Math.PI;
//                 const x = offsetX + Math.cos(angle) * radius * Math.random();
//                 const y = offsetY + Math.sin(angle) * radius * Math.random();
//                 ctx.lineTo(x, y);
//             }

//             ctx.fill();
//             ctx.globalCompositeOperation = "source-over";

//             // check if the scratch is at 90%
//             const imageData = ctx.getImageData(
//                 0,
//                 0,
//                 canvas.width,
//                 canvas.height
//             );
//             const pixels = imageData.data;
//             const totalPixels = pixels.length / 4; // Each pixel has 4 values (R, G, B, A)
//             const transparentPixels = Array.from(pixels).filter(
//                 (pixel, i) => i % 4 === 3 && pixel === 0
//             );
//             const transparentPercentage =
//                 (transparentPixels.length / totalPixels) * 100;

//             // if the scratch is at 90%, update hint and show "Let's rande!" button
//             if (transparentPercentage >= 90) {
//                 // update hint content
//                 setHint({
//                     resultIndex: index,
//                     text: results[index].name,
//                 });
//                 // show "Let's rande!" button
//                 setButtonVisible(true);
//             }
//         }
//     };

//     // function to handle rande selection
//     const handleRandeSelect = (index, rande) => {
//         // update the results state with the selected rande
//         setResults((prev) => [
//             ...prev.slice(0, index),
//             { ...prev[index], rande, isScratching: false },
//             ...prev.slice(index + 1),
//         ]);
//     };

//     // render component
//     return (
//         <>
//             {/* DISPLAY FROM RANDES SEARCH */}
//             {/* below div contains all 3 scratch-offs */}
//             <div className="scratchOff_container__parent">
//                 {results.map((rande, index) => (
//                     // below div contains 1 scratch-off
//                     <div
//                         key={rande.id}
//                         id={rande.id}
//                         className="scratchOff_container__child"
//                     >
//                         {/* below div contains just the scratch card with scratch area and reveal image */}
//                         <div className="scratchOff_container__child_scratch-card">
//                             {/* below canvas is actual scratch area */}
//                             <canvas
//                                 ref={(ref) => (canvasRefs.current[index] = ref)}
//                                 className="scratch_card__mask"
//                                 onMouseDown={startScratching(index)}
//                                 onTouchStart={startScratching(index)}
//                                 onMouseUp={stopScratching(index)}
//                                 onTouchEnd={stopScratching(index)}
//                                 onMouseMove={scratch(index)}
//                                 onTouchMove={scratch(index)}
//                                 style={{
//                                     cursor: results[index]?.isScratching
//                                         ? "url(/images/cursors/coin-scratch.png) 0 0, auto"
//                                         : "url(/images/cursors/coin-in-hand.png) 0 0, auto",
//                                 }}
//                             ></canvas>
//                             {/* below img is revealed under mask */}
//                             <img
//                                 className="scratch_card__reveal-rande-img"
//                                 src={rande.image_path}
//                                 alt={rande.name}
//                             />
//                         </div>
//                         {/* below div contains hint / hint will be h1 text for now but later an icon image */}
//                         <div className="scratchOff_container__child-hint-container">
//                             <h1 className="scratchOff_container__child-hint">
//                                 {hint && hint.resultIndex == index
//                                     ? hint.text
//                                     : rande.hint_path}
//                             </h1>
//                         </div>
//                         {/* below button saves the rande but only appears after a percentage of scratch */}
//                         {buttonVisible ? (
//                             // display button...
//                             <Link to={`/randes/${rande.id}`}>
//                                 <button
//                                     className="save_rande_btn"
//                                     onClick={() =>
//                                         handleRandeSelect(index, rande)
//                                     }
//                                 >
//                                     Let's rande!
//                                 </button>
//                             </Link>
//                         ) : (
//                             "" // ...or show empty string
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }



// // VERSION 2

import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ResultsContext from "../../ResultsContext";

export default function ScratchOff() {
    // BELOW: useState hook variables
    const { results, setResults } = useContext(ResultsContext);

    const canvasRefs = useRef([]);

    // for setting the hint as either a hint or the date name upon 90% scratch
    const [hint, setHint] = useState(null);
    // for setting the button as visible upon 90% scratch
    const [buttonVisible, setButtonVisible] = useState(false);
    // image object for canvas texture
    const [textureImage, setTextureImage] = useState(null);

    const loadImage = () => {
        const img = new Image();
        img.src = "/images/scratchOff/scratchOff_background.png";
        // below sets the texture image when it's loaded
        // img.onload = () => setTextureImage(img);
        img.onload = function () {
            // Set up the canvas dimensions to match the container
            // canvas.width = card.clientWidth;
            // canvas.height = card.clientHeight;
            // draw the textured image onto the canvas

            canvasRefs.current.forEach((canvas) => {
                const ctx = canvas.getContext("2d", {
                    willReadFrequently: true,
                });
                const width = canvas.parentNode.clientWidth;
                const height = canvas.parentNode.clientHeight;

                // Set canvas dimensions to match the container
                canvas.width = width;
                canvas.height = height;

                // Draw the textured image onto the canvas
                ctx.drawImage(img, 0, 0, width, height);
            });
        };
        // log an error if image doesn't load
        img.onerror = (error) =>
            console.error("Error loading texture image:", error);
    };

    // useEffect hook will load the textureImage onto the canvas surface when the component mounts
    useEffect(() => {
        // below functions loads the texture image

        // call function
        loadImage();
    }, [results]);

    // function to start scratching (mousedown or touchstart event)
    const startScratching = (index) => (e) => {
        e.preventDefault();
        const canvas = canvasRefs.current[index];
        const ctx = canvas.getContext("2d");

        // Store the current state of the canvas before scratching
        const initialData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // update the results state to indicate scratching has started
        setResults((prev) => [
            ...prev.slice(0, index),
            { ...prev[index], isScratching: true, initialData }, // save the initial state
            ...prev.slice(index + 1),
        ]);
    };

    // function to stop scratching (mouseup or touchend event)
    const stopScratching = (index) => () => {
        const canvas = canvasRefs.current[index];
        const ctx = canvas.getContext("2d");

        // Store the scratched data in the state
        const scratchedData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // updated results state to indicate scratching has stopped
        setResults((prev) => [
            ...prev.slice(0, index),
            {
                ...prev[index],
                isScratching: false,
                initialData: null, // clear the initial state,
                scratchedData,
                // Store the scratched data in the state
                // scratchedData: ctx.getImageData(
                //     0,
                //     0,
                //     canvas.width,
                //     canvas.height
                // ),
            },
            ...prev.slice(index + 1),
        ]);

        // Clear the scratch effect on the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // function to handle scratching (mousemove or touchmove event)
    const scratch = (index) => (e) => {
        const canvas = e.target;
        const ctx = canvas.getContext("2d");

        // check if scratching is in progress
        if (results[index] && results[index].isScratching) {
            // Apply the initial state if available
            if (results[index].initialData instanceof ImageData) {
                ctx.putImageData(results[index].initialData, 0, 0);
            }

            // extract coordinates and calculate offset
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            const { left, top } = canvas.getBoundingClientRect();
            const offsetX = clientX - left;
            const offsetY = clientY - top;
            const radius = 30; // adjust the brush size of the scratch

            // clear a circular area to reveal the underlying content
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();

            // code below creates a "jagged" scratch appearance
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const x = offsetX + Math.cos(angle) * radius * Math.random();
                const y = offsetY + Math.sin(angle) * radius * Math.random();
                ctx.lineTo(x, y);
            }

            ctx.fill();
            ctx.globalCompositeOperation = "source-over";

            // Apply the scratched data if available
            if (results[index].scratchedData instanceof ImageData) {
                ctx.putImageData(results[index].scratchedData, 0, 0);
            }

            // check if the scratch is at 90%
            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
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
                    text: results[index].name,
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
                                ref={(ref) => (canvasRefs.current[index] = ref)}
                                className="scratch_card__mask"
                                onMouseDown={startScratching(index)}
                                onTouchStart={startScratching(index)}
                                onMouseUp={stopScratching(index)}
                                onTouchEnd={stopScratching(index)}
                                onMouseMove={scratch(index)}
                                onTouchMove={scratch(index)}
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

