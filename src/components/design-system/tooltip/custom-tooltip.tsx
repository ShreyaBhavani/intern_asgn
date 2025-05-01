
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  delay?: number;
  maxWidth?: string;
  className?: string;
  arrow?: boolean;
}

export const CustomTooltip = ({
  content,
  children,
  position = "top",
  delay = 300,
  maxWidth = "14rem",
  className,
  arrow = true,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  const arrowClasses = {
    top: "bottom-[-5px] left-1/2 -translate-x-1/2 border-t-black border-l-transparent border-r-transparent border-b-transparent",
    right: "left-[-5px] top-1/2 -translate-y-1/2 border-r-black border-t-transparent border-b-transparent border-l-transparent",
    bottom: "top-[-5px] left-1/2 -translate-x-1/2 border-b-black border-l-transparent border-r-transparent border-t-transparent",
    left: "right-[-5px] top-1/2 -translate-y-1/2 border-l-black border-t-transparent border-b-transparent border-r-transparent",
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div className="inline-flex">{children}</div>
      {isVisible && (
        <div
          role="tooltip"
          style={{ maxWidth }}
          className={cn(
            "absolute z-50 px-3 py-2 text-sm font-medium text-white bg-black rounded shadow-lg animate-fade-in",
            positionClasses[position],
            className
          )}
        >
          {content}
          {arrow && (
            <span
              className={cn(
                "absolute w-0 h-0 border-4",
                arrowClasses[position]
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};
