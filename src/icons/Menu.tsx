import React from "react";

function Menu({ color = "#71BB90" }: Readonly<{ color?: string }>) {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H16.2V1.8H0V0ZM0 6.3H16.2V8.1H0V6.3ZM0 12.6H16.2V14.4H0V12.6Z"
        fill={color}
      />
    </svg>
  );
}

export default Menu;
