
# Enterprise Design System

A comprehensive design system built with React, TypeScript, and TailwindCSS, documented in Storybook. This project demonstrates the implementation of a scalable component library suitable for enterprise applications.

## Features

- **Comprehensive Color System**: A token-based color system supporting light/dark themes, with semantic colors and proper WCAG contrast ratios
- **Data Display Components**: Includes Accordion and Tooltip components with various states, variants, and accessible implementations
- **Navigation Components**: Features Sidebar navigation and Tabs components with responsive behavior and keyboard navigation
- **Accessibility**: All components follow WAI-ARIA guidelines with proper roles and keyboard interactions
- **Theme Support**: Built-in light and dark theme support via CSS variables
- **TypeScript**: Fully typed component props and interfaces
- **Storybook Documentation**: Detailed documentation for all components with usage examples and best practices

## Tech Stack

- **React**: UI building blocks
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first styling approach
- **Storybook**: Component documentation and development environment
- **Shadcn UI**: Component primitives for accessible foundational elements

## Component Overview

### Color System
- Primary, Secondary, Tertiary colors
- Semantic colors (Success, Info, Warning, Error)
- Neutral colors for backgrounds, text, and borders
- Light/Dark theme support via CSS variables

### Data Display Components
1. **Accordion**
   - Expandable/collapsible sections
   - Support for icons
   - Various states (default, disabled)
   - Keyboard accessibility

2. **Tooltip**
   - Four positioning options (top, right, bottom, left)
   - Customizable delay
   - Support for rich content
   - Arrow customization

### Navigation Components
1. **Sidebar Navigation**
   - Collapsible/expandable behavior
   - Support for nested navigation items
   - Active/hover/disabled states
   - Header and footer sections

2. **Tabs**
   - Multiple variants (default, underline, pills, boxed)
   - Support for icons
   - Responsive design
   - Keyboard navigation

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/enterprise-design-system.git

# Install dependencies
cd enterprise-design-system
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

## Running Storybook

To start the Storybook development server:

```bash
npm run storybook
```

This will launch Storybook on http://localhost:6006 where you can browse and interact with all components.

## Usage

Import components directly:

```jsx
import { CustomAccordion, AccordionItem } from '@/components/design-system/accordion/custom-accordion';

function MyComponent() {
  return (
    <CustomAccordion>
      <AccordionItem title="Section 1">
        <p>Content for section 1</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>Content for section 2</p>
      </AccordionItem>
    </CustomAccordion>
  );
}
```

## Accessibility

This design system prioritizes accessibility by:

- Using semantic HTML
- Implementing proper ARIA roles and attributes
- Supporting keyboard navigation
- Ensuring color contrast meets WCAG standards
- Providing text alternatives for non-text content

## License

MIT

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for component primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach
- [Storybook](https://storybook.js.org/) for component documentation
