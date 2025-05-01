
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorPalette } from "@/components/design-system/color-system/color-swatch";
import { CustomAccordion, AccordionItem } from "@/components/design-system/accordion/custom-accordion";
import { CustomTooltip } from "@/components/design-system/tooltip/custom-tooltip";
import { SidebarNav, SidebarNavItem } from "@/components/design-system/sidebar-nav/sidebar-nav";
import { CustomTabs, TabPanel } from "@/components/design-system/tabs/custom-tabs";
import { AlertCircle, Code, Home, Info, Layers, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("colors");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Enterprise Design System</h1>
        <ThemeToggle />
      </header>
      
      <main className="container py-8 px-4 md:px-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="colors">Color System</TabsTrigger>
            <TabsTrigger value="data-display">Data Display</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="colors" className="animate-fade-in">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Color System</h2>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  Our enterprise color system provides a comprehensive set of colors with semantic meaning,
                  ensuring consistency across the application while maintaining accessibility standards.
                </p>
              </div>
              
              <ColorPalette
                title="Primary Colors"
                colors={[
                  { name: "Primary", value: "hsl(var(--primary))" },
                  { name: "Secondary", value: "hsl(var(--secondary))" },
                  { name: "Tertiary", value: "hsl(var(--tertiary))" },
                ]}
                className="mb-12"
              />
              
              <ColorPalette
                title="Semantic Colors"
                colors={[
                  { name: "Success", value: "hsl(var(--success))" },
                  { name: "Warning", value: "hsl(var(--warning))" },
                  { name: "Destructive", value: "hsl(var(--destructive))" },
                  { name: "Info", value: "hsl(var(--info))" },
                ]}
                className="mb-12"
              />
              
              <ColorPalette
                title="Neutral Colors"
                colors={[
                  { name: "Background", value: "hsl(var(--background))" },
                  { name: "Foreground", value: "hsl(var(--foreground))" },
                  { name: "Card", value: "hsl(var(--card))" },
                  { name: "Muted", value: "hsl(var(--muted))" },
                  { name: "Border", value: "hsl(var(--border))" },
                ]}
                className="mb-12"
              />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Shades</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <div key={shade} className="flex flex-col items-center">
                      <div 
                        className="h-12 w-12 rounded-md mb-2"
                        style={{ 
                          backgroundColor: `hsl(var(--primary-${shade}))` 
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{shade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="data-display" className="animate-fade-in">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Data Display Components</h2>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  These components help present information in a structured, accessible way.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Accordion</h3>
                <div className="bg-card border border-border rounded-lg p-6 max-w-2xl">
                  <CustomAccordion>
                    <AccordionItem title="What is a design system?" defaultOpen>
                      <p>
                        A design system is a collection of reusable components, guided by clear standards,
                        that can be assembled to build any number of applications.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="Why use a design system?">
                      <p>
                        Design systems promote consistency, improve developer productivity,
                        make design decisions easier, and create a shared language between designers and developers.
                      </p>
                    </AccordionItem>
                    <AccordionItem 
                      title="Can I customize these components?" 
                      icon={<Info className="h-4 w-4 text-info" />}
                    >
                      <p>
                        Yes! All components are built with customization in mind.
                        You can override styles, extend functionality, or compose them with other components.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="This item is disabled" disabled>
                      <p>You should not see this content because the item is disabled.</p>
                    </AccordionItem>
                  </CustomAccordion>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Tooltip</h3>
                <div className="bg-card border border-border rounded-lg p-6 flex flex-wrap gap-8 items-center">
                  <CustomTooltip content="This is a tooltip!">
                    <Button variant="outline">Hover me</Button>
                  </CustomTooltip>
                  
                  <CustomTooltip content="Right positioned tooltip" position="right">
                    <Button variant="outline">Tooltip right</Button>
                  </CustomTooltip>
                  
                  <CustomTooltip 
                    content={
                      <div className="text-center">
                        <p className="font-semibold">Rich tooltip</p>
                        <p className="text-xs mt-1">With multiple lines of content</p>
                      </div>
                    } 
                    position="bottom"
                  >
                    <Button variant="outline">Rich tooltip</Button>
                  </CustomTooltip>
                  
                  <CustomTooltip
                    content="No arrow tooltip"
                    position="left"
                    arrow={false}
                  >
                    <Button variant="outline">No arrow</Button>
                  </CustomTooltip>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="navigation" className="animate-fade-in">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Navigation Components</h2>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  These components help users move through the application efficiently.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Tabs</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Default Tabs</h4>
                    <CustomTabs 
                      tabs={[
                        { label: "Account", value: "account" },
                        { label: "Password", value: "password" },
                        { label: "Settings", value: "settings" },
                        { label: "Disabled", value: "disabled", disabled: true },
                      ]}
                      defaultValue="account"
                    >
                      <TabPanel value="account">
                        <div className="p-4 bg-muted rounded-md">Account information tab content</div>
                      </TabPanel>
                      <TabPanel value="password">
                        <div className="p-4 bg-muted rounded-md">Password settings tab content</div>
                      </TabPanel>
                      <TabPanel value="settings">
                        <div className="p-4 bg-muted rounded-md">Settings tab content</div>
                      </TabPanel>
                    </CustomTabs>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Pills Variant</h4>
                    <CustomTabs 
                      variant="pills"
                      tabs={[
                        { label: "All", value: "all" },
                        { label: "Active", value: "active" },
                        { label: "Archived", value: "archived" },
                      ]}
                      defaultValue="all"
                    >
                      <TabPanel value="all">
                        <div className="p-4 bg-muted rounded-md">All items content</div>
                      </TabPanel>
                      <TabPanel value="active">
                        <div className="p-4 bg-muted rounded-md">Active items content</div>
                      </TabPanel>
                      <TabPanel value="archived">
                        <div className="p-4 bg-muted rounded-md">Archived items content</div>
                      </TabPanel>
                    </CustomTabs>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Tabs with Icons</h4>
                    <CustomTabs 
                      variant="boxed"
                      tabs={[
                        { label: "Code", value: "code", icon: <Code className="h-4 w-4" /> },
                        { label: "Settings", value: "settings", icon: <Settings className="h-4 w-4" /> },
                        { label: "Users", value: "users", icon: <Users className="h-4 w-4" /> },
                      ]}
                      defaultValue="code"
                    >
                      <TabPanel value="code">
                        <div className="p-4 bg-muted rounded-md">Code editor tab content</div>
                      </TabPanel>
                      <TabPanel value="settings">
                        <div className="p-4 bg-muted rounded-md">Settings tab content</div>
                      </TabPanel>
                      <TabPanel value="users">
                        <div className="p-4 bg-muted rounded-md">Users management tab content</div>
                      </TabPanel>
                    </CustomTabs>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Sidebar Navigation</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="h-96 flex border border-border rounded-md overflow-hidden">
                    <SidebarNav 
                      header={<span className="font-semibold">Company Name</span>}
                      footer={
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-sm font-medium">JD</span>
                          </div>
                          <div className="text-sm">John Doe</div>
                        </div>
                      }
                    >
                      <SidebarNavItem 
                        icon={<Home className="h-4 w-4" />}
                        label="Dashboard"
                        active
                        href="#"
                      />
                      <SidebarNavItem 
                        icon={<Layers className="h-4 w-4" />}
                        label="Projects"
                        href="#"
                      >
                        <SidebarNavItem label="Web Design" href="#" />
                        <SidebarNavItem label="Mobile App" href="#" />
                        <SidebarNavItem label="Backend API" href="#" />
                      </SidebarNavItem>
                      <SidebarNavItem 
                        icon={<AlertCircle className="h-4 w-4" />}
                        label="Issues"
                        href="#"
                      />
                      <SidebarNavItem 
                        icon={<Users className="h-4 w-4" />}
                        label="Team"
                        href="#"
                      />
                      <SidebarNavItem 
                        icon={<Settings className="h-4 w-4" />}
                        label="Settings"
                        href="#"
                      />
                    </SidebarNav>
                    <div className="flex-1 p-6">
                      <h4 className="text-xl font-medium">Dashboard</h4>
                      <p className="text-muted-foreground mt-2">
                        This is the main content area. The sidebar can be collapsed using the button in the header.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
