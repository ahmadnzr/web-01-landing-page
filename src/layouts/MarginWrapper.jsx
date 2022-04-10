import React from "react";

export default function MarginWrapper({ children, styles }) {
  const newStyle = {
    width: "70%",
    margin: "0 15%",
  };

  return (
    <div style={newStyle} className={styles}>
      {children}
    </div>
  );
}
