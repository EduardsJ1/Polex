import * as React from "react";
import { motion, useInView } from "framer-motion";
const DropletIcon = (props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  return (
  <motion.svg
    ref={ref}
    viewBox="0 0 39 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="droplet">
      <g id="base">
        <rect
          id="Rectangle 2"
          x={0.5}
          y={26.5}
          width={37}
          height={5}
          fill="white"
          stroke="black"
        />
        <line
          id="Line 6"
          x1={32.4287}
          y1={26.2572}
          x2={29.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 7"
          x1={36.4287}
          y1={26.2572}
          x2={33.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 8"
          x1={28.4287}
          y1={26.2572}
          x2={25.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 9"
          x1={24.4287}
          y1={26.2572}
          x2={21.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 10"
          x1={20.4287}
          y1={26.2572}
          x2={17.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 11"
          x1={16.4287}
          y1={26.2572}
          x2={13.4287}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 12"
          x1={12.4287}
          y1={26.2572}
          x2={9.42875}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 13"
          x1={8.42875}
          y1={26.2572}
          x2={5.42875}
          y2={31.2572}
          stroke="black"
        />
        <line
          id="Line 14"
          x1={4.42875}
          y1={26.2572}
          x2={1.42875}
          y2={31.2572}
          stroke="black"
        />
      </g>
      <motion.g 
        id="drop"
        animate={isInView ? { 
          y: [-15, 3], 
          scale: [1, 0.5],
          opacity: [0, 0.8, 1, 1, 0.5, 0] 
          // opacity: [1, 1, 0.8, 0.7, 0.5, 0] 
        } : { y: 0 }}
          transition={
            isInView
              ? {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeIn",
                  times: [0, 0.4, 0.5, 0.7, 1]
                }
              : { duration: 0 }
          }
        >
        <g id="Ellipse 1">
          <mask id="path-11-inside-1_146_66" fill="white">
            <path d="M26 13C26 16.866 22.866 20 19 20C15.134 20 12 16.866 12 13C12 9.13401 15.5 5 19 0C23 5 26 9.13401 26 13Z" />
          </mask>
          <path
            d="M26 13C26 16.866 22.866 20 19 20C15.134 20 12 16.866 12 13C12 9.13401 15.5 5 19 0C23 5 26 9.13401 26 13Z"
            fill="white"
            stroke="black"
            strokeWidth={2}
            mask="url(#path-11-inside-1_146_66)"
          />
        </g>
      </motion.g>
      <g 
        id="arrow">
        <path
          id="Line 15"
          d="M1 16L1.57848 21.7444L6.26408 18.3712L1 16ZM38 16C37.5528 15.7764 37.5529 15.7761 37.553 15.7759C37.553 15.7759 37.5531 15.7757 37.5531 15.7757C37.5532 15.7756 37.5532 15.7756 37.5531 15.7758C37.5529 15.7761 37.5525 15.777 37.5518 15.7784C37.5503 15.7812 37.5478 15.7861 37.5441 15.7931C37.5368 15.807 37.525 15.8291 37.5085 15.8589C37.4755 15.9184 37.424 16.0085 37.3524 16.1248C37.2094 16.3574 36.9867 16.6945 36.6739 17.1016C36.0482 17.9157 35.0628 19.0083 33.6335 20.1031C30.7813 22.2877 26.1376 24.5 19 24.5V25.5C26.3624 25.5 31.2187 23.2123 34.2415 20.8969C35.7497 19.7417 36.7956 18.5843 37.4668 17.7109C37.8024 17.2742 38.0445 16.9083 38.2042 16.6487C38.2841 16.5189 38.3433 16.4156 38.3833 16.3433C38.4034 16.3071 38.4186 16.2787 38.4292 16.2586C38.4345 16.2485 38.4386 16.2405 38.4416 16.2347C38.4431 16.2317 38.4443 16.2294 38.4452 16.2275C38.4457 16.2266 38.4461 16.2258 38.4464 16.2251C38.4466 16.2248 38.4468 16.2244 38.4469 16.2243C38.4471 16.2239 38.4472 16.2236 38 16ZM19 24.5C10.9653 24.5 6.4145 21.6972 3.98038 19.2962L3.27814 20.0082C5.90034 22.5946 10.7038 25.5 19 25.5V24.5Z"
          fill="black"
        />
      </g>
    </g>
  </motion.svg>
  );
};
export { DropletIcon as ReactComponent }
