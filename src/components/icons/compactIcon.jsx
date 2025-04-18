import * as React from "react"
import { motion, useInView } from "framer-motion";
const CompactIcon = (props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  return (
  <motion.svg
    ref={ref}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="compact">
      <motion.g 
      id="base"
      animate={isInView ? { scaleX: [1, 0.5, 1] } : { scaleX: 1 }}
          transition={
            isInView
              ? {
                  times: [0, 0.5, 1],
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  type: "keyframes",
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
      >
        <rect
          id="Rectangle 7"
          x={16}
          y={0.5}
          width={4}
          height={35}
          rx={0.5}
          stroke="black"
        />
      </motion.g>
      <motion.g 
        id="arrow-right"
        animate={isInView ? { x: [0, -3, 0] } : { x: 0 }}
        transition={
          isInView
            ? {
                times: [0, 0.5, 1],
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                type: "keyframes",
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
      >
        <path
          id="Line 18"
          d="M21.6464 17.6464C21.4512 17.8417 21.4512 18.1583 21.6464 18.3536L24.8284 21.5355C25.0237 21.7308 25.3403 21.7308 25.5355 21.5355C25.7308 21.3403 25.7308 21.0237 25.5355 20.8284L22.7071 18L25.5355 15.1716C25.7308 14.9763 25.7308 14.6597 25.5355 14.4645C25.3403 14.2692 25.0237 14.2692 24.8284 14.4645L21.6464 17.6464ZM36 17.5H22V18.5H36V17.5Z"
          fill="black"
        />
      </motion.g>
      <motion.g 
        id="arrow-left"
        animate={isInView ? { x: [0, 3, 0] } : { x: 0 }}
        transition={
          isInView
            ? {
                times: [0, 0.5, 1],
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                type: "keyframes",
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
      >
        <path
          id="Line 19"
          d="M14.3536 17.6464C14.5488 17.8417 14.5488 18.1583 14.3536 18.3536L11.1716 21.5355C10.9763 21.7308 10.6597 21.7308 10.4645 21.5355C10.2692 21.3403 10.2692 21.0237 10.4645 20.8284L13.2929 18L10.4645 15.1716C10.2692 14.9763 10.2692 14.6597 10.4645 14.4645C10.6597 14.2692 10.9763 14.2692 11.1716 14.4645L14.3536 17.6464ZM0 17.5H14V18.5H0L0 17.5Z"
          fill="black"
        />
      </motion.g>
    </g>
  </motion.svg>
);
};
export { CompactIcon as ReactComponent }
