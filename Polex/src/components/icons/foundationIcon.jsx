import * as React from "react"
const FoundationIcon = (props) => (
  <svg
    viewBox="0 0 36 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="foundation-icon">
      <g id="base">
        <path id="Vector 15" d="M5 15V26" stroke="black" />
        <path id="Vector 16" d="M31 15V26" stroke="black" />
        <rect
          id="Rectangle 14"
          x={4}
          y={26}
          width={28}
          height={7}
          fill="black"
        />
      </g>
      <g id="roof">
        <path
          id="Vector 14"
          d="M17.3861 1.47751L2.3006 13.2106C1.54901 13.7952 1.96238 15 2.91454 15H5.66937C5.88407 15 6.09308 14.9309 6.26547 14.8029L17.4039 6.53347C17.7579 6.27068 18.2421 6.27068 18.5961 6.53347L29.7345 14.8029C29.9069 14.9309 30.1159 15 30.3306 15H33.0855C34.0376 15 34.451 13.7952 33.6994 13.2106L18.6139 1.47751C18.2528 1.19665 17.7472 1.19665 17.3861 1.47751Z"
          stroke="black"
        />
        <path
          id="Vector 18"
          d="M30 10.5V4C30 3.44772 29.5523 3 29 3H28C27.4477 3 27 3.44772 27 4V8"
          stroke="black"
        />
      </g>
      <g id="foam">
        <line
          id="Line 20"
          x1={32.5}
          y1={26}
          x2={32.5}
          y2={33}
          stroke="#727272"
        />
        <line id="Line 21" x1={3.5} y1={26} x2={3.5} y2={33} stroke="#727272" />
      </g>
    </g>
  </svg>
)
export { FoundationIcon as ReactComponent }
