
import type { Meta, StoryObj } from "@storybook/react";
import { CustomTabs, TabPanel } from "./custom-tabs";

const meta: Meta<typeof CustomTabs> = {
  title: "Design System/Navigation/Tabs",
  component: CustomTabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tabs component that allows users to switch between different views within the same context."
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof CustomTabs>;

export const Default: Story = {
  render: () => (
    <CustomTabs 
      defaultValue="tab1"
      tabs={[
        { label: "Account", value: "tab1" },
        { label: "Password", value: "tab2" },
        { label: "Settings", value: "tab3" },
      ]}
    >
      <TabPanel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Account Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Manage your account details and personal information.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Password Settings</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Update your password and security preferences.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">General Settings</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Configure application settings and preferences.
          </p>
        </div>
      </TabPanel>
    </CustomTabs>
  )
};

export const UnderlineStyle: Story = {
  render: () => (
    <CustomTabs 
      defaultValue="tab1"
      variant="underline"
      tabs={[
        { label: "Dashboard", value: "tab1" },
        { label: "Analytics", value: "tab2" },
        { label: "Reports", value: "tab3" },
      ]}
    >
      <TabPanel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Dashboard Overview</h3>
          <p className="text-gray-700 dark:text-gray-300">
            View your main dashboard with key metrics and information.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Analytics Data</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Detailed analytics and performance data for your account.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Generated Reports</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Access and download your generated reports and documents.
          </p>
        </div>
      </TabPanel>
    </CustomTabs>
  )
};

export const WithIcons: Story = {
  render: () => (
    <CustomTabs 
      defaultValue="tab1"
      variant="pills"
      tabs={[
        { 
          label: "Products", 
          value: "tab1",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
        },
        { 
          label: "Customers", 
          value: "tab2",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        },
        { 
          label: "Analytics", 
          value: "tab3",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        },
      ]}
    >
      <TabPanel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Product List</h3>
          <p className="text-gray-700 dark:text-gray-300">
            View and manage your product inventory.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Customer Directory</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Browse your customer database and contact information.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Performance Analytics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Review performance metrics and business insights.
          </p>
        </div>
      </TabPanel>
    </CustomTabs>
  )
};
