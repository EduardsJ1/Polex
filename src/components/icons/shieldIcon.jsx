import * as React from "react";
import { motion, useInView } from "framer-motion";
const ShieldIcon = (props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  return(
  <motion.svg
    ref={ref}
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="shield">
      <motion.g 
      id="shield-outer"
      animate={isInView ? { scale: [1,1.1,1] } : { scale: 1 }}
          transition={
            isInView
              ? {
                  times: [0, 0.5, 1],
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 2,
                  type: "keyframes",
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
      >
        <path
          id="Vector"
          d="M11.7039 27C13.7039 25.2502 24.2039 19.5 22.7039 6C22.7039 6 15.7039 5 11.7039 1M12.3039 27C10.3039 25.2502 -0.196083 19.5 1.30392 6C1.30392 6 8.30392 5 12.3039 1"
          stroke="black"
        />
      </motion.g>
      <motion.g 
      id="shield-inner"
      animate={isInView ? { scale: [1,1.2,1] } : { scale: 1 }}
          transition={
            isInView
              ? {
                  times: [0, 0.5, 1],
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 2,
                  type: "keyframes",
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
      >
        <path
          id="Vector_2"
          d="M19.8952 8.46154C20.9718 17.8077 13.4355 21.7886 12 23C10.5645 21.7886 3.02824 17.8077 4.10485 8.46154C4.10485 8.46154 9.12904 7.76923 12 5C14.871 7.76923 19.8952 8.46154 19.8952 8.46154Z"
          fill="black"
          stroke="black"
        />
      </motion.g>
    </g>
  </motion.svg>
);
}
export { ShieldIcon as ReactComponent }
