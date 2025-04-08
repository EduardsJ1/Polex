import * as React from "react"
const SvgComponent = (props) => (
  <svg
    // width={24}
    // height={28}
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="shield">
      <g id="shield-outer">
        <path
          id="Vector"
          d="M11.7039 27C13.7039 25.2502 24.2039 19.5 22.7039 6C22.7039 6 15.7039 5 11.7039 1M12.3039 27C10.3039 25.2502 -0.196083 19.5 1.30392 6C1.30392 6 8.30392 5 12.3039 1"
          stroke="black"
        />
      </g>
      <g id="shield-inner">
        <path
          id="Vector_2"
          d="M19.8952 8.46154C20.9718 17.8077 13.4355 21.7886 12 23C10.5645 21.7886 3.02824 17.8077 4.10485 8.46154C4.10485 8.46154 9.12904 7.76923 12 5C14.871 7.76923 19.8952 8.46154 19.8952 8.46154Z"
          fill="black"
          stroke="black"
        />
      </g>
    </g>
  </svg>
)
export { SvgComponent as ReactComponent }
