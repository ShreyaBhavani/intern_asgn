import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  icon?: React.ReactNode;
}

export const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className,
  titleClassName,
  contentClassName,
  icon,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={cn(
        "border-b border-border",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <button
        className={cn(
          "flex justify-between w-full py-4 px-2 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          titleClassName
        )}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0",
          contentClassName
        )}
        aria-hidden={!isOpen}
      >
        <div className="py-4 px-2">{children}</div>
      </div>
    </div>
  );
};

export interface CustomAccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
}

export const CustomAccordion = ({
  children,
  className,
  type = "single",
}: CustomAccordionProps) => {
  // For type="single", we'd need to manage state to close others, but for now we're keeping it simple
  return (
    <div className={cn("space-y-1 rounded-md", className)}>
      {children}
    </div>
  );
};
