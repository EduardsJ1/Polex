import * as React from "react";
import { motion } from "motion/react";
const soundIconSvg = (props) => (
  <svg
    // width={18}
    // height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="sound_icon">
      <g id="sound_base">
        <path
          id="Rectangle 1"
          d="M1 6C1 5.44772 1.44772 5 2 5H5V13H2C1.44772 13 1 12.5523 1 12V6Z"
          fill="black"
        />
        <path
          id="Vector 1"
          d="M7.23178 2.12186L4.23178 5.72187C4.08202 5.90158 4 6.12811 4 6.36205V11.6379C4 11.8719 4.08202 12.0984 4.23178 12.2781L7.23178 15.8781C7.83054 16.5966 9 16.1732 9 15.238V2.76205C9 1.82675 7.83054 1.40335 7.23178 2.12186Z"
          fill="black"
        />
      </g>
      <motion.g 
        id="sound_waves"
        animate={{ x: [0,1,0] }}
        transition={{
            times:[0, 0.5, 1],
            duration: 2,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }}
      >
        <path
          id="Line 1"
          d="M15 2C15 2 17 4 17 9.5C17 15 15 17 15 17"
          stroke="black"
          strokeLinecap="round"
        />
        <path
          id="Line 2"
          d="M12 4C12 4 14 5.46667 14 9.5C14 13.5333 12 15 12 15"
          stroke="black"
          strokeLinecap="round"
        />
        <path
          id="Line 3"
          d="M10 7C10 7 11 7.66667 11 9.5C11 11.3333 10 12 10 12"
          stroke="black"
          strokeLinecap="round"
        />
      </motion.g>
      <motion.g 
        id="bar"
        animate={{ scale: [1, 0, 1] }}
        transition={{
            times:[0, 0.5, 1],
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
            type: "keyframes",
            ease: "easeInOut",
        }}
      >
        <path
          id="Line 4"
          d="M1.35355 0.646446L17.3536 16.6464"
          stroke="#5F5F5F"
          strokeLinecap="round"
        />
      </motion.g>
    </g>
  </svg>
)
export { soundIconSvg as ReactComponent }
