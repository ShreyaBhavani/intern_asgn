
import type { Meta, StoryObj } from "@storybook/react";
import { CustomAccordion, AccordionItem } from "./custom-accordion";

const meta: Meta<typeof CustomAccordion> = {
  title: "Design System/Data Display/Accordion",
  component: CustomAccordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Accordion component that allows users to expand and collapse sections of content."
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof CustomAccordion>;

export const Default: Story = {
  render: () => (
    <CustomAccordion>
      <AccordionItem title="What is an Accordion?">
        <p className="text-gray-700 dark:text-gray-300">
          An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, 
          or thumbnail representing a section of content. The headings function as controls that enable users to reveal 
          or hide their associated sections of content.
        </p>
      </AccordionItem>
      <AccordionItem title="When to use Accordions?">
        <p className="text-gray-700 dark:text-gray-300">
          Use accordions when you need to organize related information in a limited amount of space.
          They are particularly useful when users need to focus on specific sections of content without
          being overwhelmed by all the information at once.
        </p>
      </AccordionItem>
      <AccordionItem title="Accessibility Features">
        <p className="text-gray-700 dark:text-gray-300">
          This accordion component follows WAI-ARIA guidelines with proper roles,
          states, and keyboard interactions. It supports keyboard navigation with Tab, Enter, and Space keys.
        </p>
      </AccordionItem>
    </CustomAccordion>
  )
};

export const WithIcons: Story = {
  render: () => (
    <CustomAccordion>
      <AccordionItem 
        title="System Requirements" 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><rect width="8" height="1" x="8" y="2" rx=".5"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>}
      >
        <p className="text-gray-700 dark:text-gray-300">
          Minimum system requirements include 8GB RAM, 4-core CPU, and 1GB of free disk space.
        </p>
      </AccordionItem>
      <AccordionItem 
        title="Installation Guide" 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13"/><path d="m5 10 7 7 7-7"/><path d="M5 21h14"/></svg>}
      >
        <p className="text-gray-700 dark:text-gray-300">
          Follow our step-by-step installation guide to set up the software on your system.
        </p>
      </AccordionItem>
      <AccordionItem 
        title="Troubleshooting" 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>}
      >
        <p className="text-gray-700 dark:text-gray-300">
          Common issues and their solutions to help you troubleshoot problems you might encounter.
        </p>
      </AccordionItem>
    </CustomAccordion>
  )
};
