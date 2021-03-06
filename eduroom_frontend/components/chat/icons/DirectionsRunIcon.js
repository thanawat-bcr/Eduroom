import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width={(() => {
          if (props.style.width) {
            return props.style.width + ""
          } else {
            return "18"
          }
        })()}
        height={(() => {
          if (props.style.height) {
            return props.style.height + ""
          } else {
            return "20"
          }
        })()}
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          d="M10.5342 3.34884C11.6273 3.34884 12.5217 2.59535 12.5217 1.67442C12.5217 0.753488 11.6273 0 10.5342 0C9.44099 0 8.54658 0.753488 8.54658 1.67442C8.54658 2.59535 9.44099 3.34884 10.5342 3.34884ZM6.95652 14.986L7.95031 11.3023L10.0373 12.9767V18H12.0248V11.7209L9.93789 10.0465L10.5342 7.53488C11.8261 8.7907 13.8137 9.62791 16 9.62791V7.95349C14.1118 7.95349 12.5217 7.11628 11.7267 5.94419L10.7329 4.60465C10.3354 4.10233 9.73913 3.76744 9.04348 3.76744C8.74534 3.76744 8.54658 3.85116 8.24845 3.85116L3.08074 5.69302V9.62791H5.06832V6.7814L6.85714 6.19535L5.26708 12.9767L0.397515 12.1395L0 13.814L6.95652 14.986Z"
          fill={(() => {
						if (props.style.color) {
							return props.style.color + ""
						} else {
							return "#828282"
						}
					})()}
        />
      </svg>
    </>
  );
}
