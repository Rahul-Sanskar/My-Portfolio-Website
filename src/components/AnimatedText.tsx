import { useEffect, useRef } from "react";
import { splitText } from "./utils/splitText"; // Adjust the import path

const AnimatedText = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            splitText(textRef.current, "chars"); // Split text into characters and animate
        }
    }, []);

    return <div ref={textRef}>Hello, World!</div>;
};

export default AnimatedText;
