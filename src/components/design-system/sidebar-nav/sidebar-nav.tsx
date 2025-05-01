
import React, { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SidebarNavItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  label,
  active = false,
  disabled = false,
  href,
  onClick,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasChildren = React.Children.count(children) > 0;
  
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  const Component = href ? "a" : "button";
  
  return (
    <li>
      <Component
        href={href}
        onClick={handleClick}
        className={cn(
          "flex items-center w-full py-2 px-3 rounded-md text-sm transition-colors",
          active ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          hasChildren ? "justify-between" : "justify-start"
        )}
        disabled={disabled}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="truncate">{label}</span>
        </div>
        
        {hasChildren && (
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-90"
            )}
          />
        )}
      </Component>
      
      {hasChildren && isExpanded && (
        <ul className="pl-6 mt-1 space-y-1">{children}</ul>
      )}
    </li>
  );
};

export interface SidebarNavProps {
  children?: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  children,
  className,
  collapsible = true,
  defaultCollapsed = false,
  header,
  footer,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  
  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between h-14 px-4 border-b border-border">
        {!collapsed && header}
        {collapsible && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-muted"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <Menu className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {React.Children.map(children, child => {
            if (!React.isValidElement(child)) return null;
            
            // If sidebar is collapsed, we don't render children items
            if (collapsed) {
              return React.cloneElement(child, {
                ...child.props,
                children: undefined,
              });
            }
            
            return child;
          })}
        </ul>
      </div>
      
      {!collapsed && footer && (
        <div className="h-14 border-t border-border flex items-center px-4">
          {footer}
        </div>
      )}
    </div>
  );
};
