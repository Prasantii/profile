import React from "react";
import { cn } from "../../../lib/utils";
// import { cn } from "/lib/utils.ts";

const IconButton = ({ icon, onClick, className, style }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-lg border border-primary p-2 bg-secondary/25",
        className
      )}
      style={style}
    >
      <div>{icon}</div>
    </div>
  );
};

export default IconButton;
