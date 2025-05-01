
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItemProps[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "default" | "underline" | "pills" | "boxed";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
  tabsClassName?: string;
  panelClassName?: string;
  children?: React.ReactNode;
}

export const CustomTabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue,
  onChange,
  variant = "default",
  size = "md",
  orientation = "horizontal",
  className,
  tabsClassName,
  panelClassName,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onChange) onChange(value);
  };
  
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };
  
  const variantClasses = {
    default: "border-b border-border",
    underline: "border-b border-border",
    pills: "space-x-1",
    boxed: "border border-border rounded-md p-1",
  };
  
  const tabVariantClasses = {
    default: (active: boolean) => 
      cn(
        "px-4 py-2 font-medium border-b-2 -mb-px",
        active 
          ? "border-primary text-primary" 
          : "border-transparent hover:border-border text-muted-foreground hover:text-foreground"
      ),
    underline: (active: boolean) => 
      cn(
        "px-4 py-2 font-medium border-b-2 -mb-px transition-colors",
        active 
          ? "border-primary text-primary" 
          : "border-transparent hover:text-foreground text-muted-foreground"
      ),
    pills: (active: boolean) => 
      cn(
        "px-4 py-2 font-medium rounded-full transition-colors",
        active 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-muted text-muted-foreground hover:text-foreground"
      ),
    boxed: (active: boolean) => 
      cn(
        "px-4 py-2 font-medium rounded-md transition-colors",
        active 
          ? "bg-background text-foreground shadow-sm" 
          : "text-muted-foreground hover:text-foreground"
      ),
  };
  
  return (
    <div 
      className={cn(
        "w-full",
        orientation === "vertical" && "flex gap-4",
        className
      )}
    >
      <div 
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          orientation === "horizontal" && variantClasses[variant],
          orientation === "vertical" && "shrink-0",
          sizeClasses[size],
          tabsClassName
        )}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
            aria-controls={`panel-${tab.value}`}
            id={`tab-${tab.value}`}
            disabled={tab.disabled}
            className={cn(
              "flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors",
              tabVariantClasses[variant](activeTab === tab.value),
              tab.disabled && "opacity-50 cursor-not-allowed pointer-events-none"
            )}
            onClick={() => !tab.disabled && handleTabChange(tab.value)}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      
      <div 
        className={cn(
          "mt-4",
          orientation === "vertical" && "mt-0 flex-1",
          panelClassName
        )}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          
          // Check if the child has a value prop that matches the active tab
          if (child.props.value === activeTab) {
            // Use type assertion to help TypeScript understand the props we're passing
            return React.cloneElement(child as React.ReactElement<TabPanelProps>, {
              id: `panel-${child.props.value}`,
              "aria-labelledby": `tab-${child.props.value}`
            });
          }
          
          return null;
        })}
      </div>
    </div>
  );
};

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn("animate-fade-in", className)} 
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  );
};
