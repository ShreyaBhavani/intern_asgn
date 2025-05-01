
import type { Meta, StoryObj } from "@storybook/react";
import { CustomTooltip } from "./custom-tooltip";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof CustomTooltip> = {
  title: "Design System/Data Display/Tooltip",
  component: CustomTooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tooltip component that displays additional information when hovering over an element."
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof CustomTooltip>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <CustomTooltip content="This is a helpful tooltip">
        <Button variant="outline">Hover Me</Button>
      </CustomTooltip>
    </div>
  )
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <CustomTooltip content="This tooltip appears on top" position="top">
        <Button variant="outline" className="w-full">Top Position</Button>
      </CustomTooltip>
      
      <CustomTooltip content="This tooltip appears on the right" position="right">
        <Button variant="outline" className="w-full">Right Position</Button>
      </CustomTooltip>
      
      <CustomTooltip content="This tooltip appears on the bottom" position="bottom">
        <Button variant="outline" className="w-full">Bottom Position</Button>
      </CustomTooltip>
      
      <CustomTooltip content="This tooltip appears on the left" position="left">
        <Button variant="outline" className="w-full">Left Position</Button>
      </CustomTooltip>
    </div>
  )
};

export const WithDelay: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <CustomTooltip 
        content="This tooltip has a custom delay of 1000ms" 
        delay={1000}
      >
        <Button variant="outline">Delayed Tooltip (1000ms)</Button>
      </CustomTooltip>
    </div>
  )
};

export const RichContent: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <CustomTooltip 
        content={
          <div>
            <h4 className="font-medium mb-1">Rich Tooltip Content</h4>
            <p className="text-sm text-gray-400">
              Tooltips can contain styled content and multiple elements.
            </p>
          </div>
        }
      >
        <Button variant="outline">Rich Content Tooltip</Button>
      </CustomTooltip>
    </div>
  )
};
