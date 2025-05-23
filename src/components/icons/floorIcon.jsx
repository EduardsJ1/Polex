import * as React from "react"
const FloorIcon = (props) => (
  <svg
    viewBox="0 0 40 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="floor-icon">
      <g id="walls">
        <path
          id="Vector 20"
          d="M1 37 V8.36992 L7 1 H33 L39 8.36992 V37 M7 1 V27.5 M33 1 V27.5"
          stroke="black"
          strokeLinejoin="miter"
        />
      </g>
      <g id="floor-base">
        <path
          id="Vector 21"
          d="M6.68331 37C3.26246 37 1.00003 37 1.00003 37C0.500056 37 7.00003 27.5 7.00003 27.5H12M6.68331 37L12 27.5M6.68331 37C8.70862 37 11.14 37 13.7483 37M12 27.5H16.5M13.7483 37L16.5 27.5M13.7483 37C15.8189 37 18.0011 37 20.1801 37M16.5 27.5H20.1801M20.1801 37V27.5M20.1801 37C22.401 37 24.6188 37 26.7119 37M20.1801 27.5H24M26.7119 37L24 27.5M26.7119 37C28.9335 37 31.0147 37 32.8104 37M24 27.5H28.5M32.8104 37C36.4189 37 38.8745 37 39 37C39.2588 37 37.6425 34.4553 36.0228 32M32.8104 37L28.5 27.5M28.5 27.5H33C33 27.5 34.5129 29.7112 36.0228 32M4 32H36.0228"
          stroke="#000000"
        />
      </g>
    </g>
  </svg>
)
export { FloorIcon as ReactComponent }
