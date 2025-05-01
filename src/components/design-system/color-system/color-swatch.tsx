
import React from "react";
import { cn } from "@/lib/utils";

export interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  textColor?: string;
  className?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  colorName,
  colorValue,
  textColor = "text-foreground",
  className,
}) => {
  return (
    <div className={cn("rounded-md overflow-hidden shadow-sm", className)}>
      <div 
        className="h-24 w-full"
        style={{ backgroundColor: colorValue }}
      />
      <div className="p-3 bg-card border-t border-border">
        <div className={cn("font-medium", textColor)}>{colorName}</div>
        <div className="text-sm text-muted-foreground mt-1">{colorValue}</div>
      </div>
    </div>
  );
};

export interface ColorPaletteProps {
  title: string;
  colors: Array<{ name: string; value: string; textColor?: string }>;
  className?: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  title,
  colors,
  className,
}) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color) => (
          <ColorSwatch
            key={color.name}
            colorName={color.name}
            colorValue={color.value}
            textColor={color.textColor}
          />
        ))}
      </div>
    </div>
  );
};
