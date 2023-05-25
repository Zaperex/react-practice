import React from "react";
import Alert from "./Alert";

interface Prop {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: (label: string) => void;
}

function Button({ children, color = "primary", onClick }: Prop) {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => onClick("Have Fun!")}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
