import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";


export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        onClick(expression)
    }


    return (
        <div className="detect">
            <div className="detect-header">
                <h2>{expression}</h2>
                <p>Allow camera access to analyze your mood</p>
            </div>
            
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    playsInline
                />
                {/* Decorative border elements */}
                <div className="scan-corner top-left"></div>
                <div className="scan-corner top-right"></div>
                <div className="scan-corner bottom-left"></div>
                <div className="scan-corner bottom-right"></div>
            </div>

            <button className="button button--large" onClick={handleClick}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Scan My Mood
            </button>
        </div>
    );
}