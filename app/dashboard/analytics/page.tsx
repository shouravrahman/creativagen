"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ActivityIcon, ClipboardIcon, ClockIcon, FilePenIcon, LayoutGridIcon, ShareIcon } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from "recharts";



export default function Analytics() {
   return (
      <div className="flex flex-col w-full min-h-screen bg-background">
         {/* <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex flex-row items-center gap-6 text-lg font-medium sm:flex">
               <a className="flex items-center gap-2 text-lg font-semibold" href="#">
                  <BarChart className="w-6 h-6" />
                  <span>Dashboard</span>
               </a>
            </nav>
            <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
               <Button className="ml-auto" variant="outline">
                  Settings
               </Button>
               <Button>Export Data</Button>
            </div>
         </header> */}
         <main className="flex-1 grid gap-4 p-4 md:gap-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                     <CardTitle className="text-sm font-medium">Total Tokens Used</CardTitle>
                     <BarChart className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">1,234,567</div>
                     <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                     <CardTitle className="text-sm font-medium">Words Generated</CardTitle>
                     <LineChart className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">987,654</div>
                     <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                     <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                     <BarChart className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">3,456</div>
                     <p className="text-xs text-muted-foreground">+7.3% from last month</p>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                     <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
                     <LineChart className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">256 hours</div>
                     <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                  </CardContent>
               </Card>
            </div>
            <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
               <Card className="col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                     <CardTitle className="text-sm font-medium">Tokens Used</CardTitle>

                  </CardHeader>
                  <CardContent>
                     <BarchartChart className="w-full" />
                  </CardContent>
               </Card>

               <Card className="col-span-2">
                  <CardHeader className=" flex flex-row items-center justify-between pb-2">
                     <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                     <ClipboardIcon className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <LinechartChart className="w-full" />
                  </CardContent>
               </Card>
            </div>
            <Card>
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
                  <div className="flex items-center gap-2">
                     <ClockIcon className="w-4 h-4 text-muted-foreground" />
                     <Button variant="ghost" size="icon" className="rounded-full">
                        <ShareIcon className="w-4 h-4" />
                        <span className="sr-only">Share</span>
                     </Button>
                  </div>
               </CardHeader>
               <CardContent>
                  <BarchartChart className="" />
               </CardContent>
               <CardFooter>
                  <div className="flex items-center justify-between">
                     <div className="text-sm text-muted-foreground mr-2">
                        You've saved <strong>120 hours</strong> so far.
                     </div>
                     <Button variant="outline" size="sm">
                        View Details
                     </Button>
                  </div>
               </CardFooter>
            </Card>
         </main>
      </div>
   )
}


function BarchartChart(props) {
   return (
      <div {...props}>
         <ChartContainer
            config={{
               desktop: {
                  label: "Desktop",
                  color: "hsl(var(--chart-1))",
               },
            }}
            className=""
         >
            <BarChart
               accessibilityLayer
               data={[
                  { month: "January", desktop: 186 },
                  { month: "February", desktop: 305 },
                  { month: "March", desktop: 237 },
                  { month: "April", desktop: 73 },
                  { month: "May", desktop: 209 },
                  { month: "June", desktop: 214 },
               ]}
            >
               <CartesianGrid vertical={false} />
               <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
               />
               <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
               <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
            </BarChart>
         </ChartContainer>
      </div>
   )
}



function LinechartChart(props) {
   return (
      <div {...props}>
         <ChartContainer
            config={{
               desktop: {
                  label: "Desktop",
                  color: "hsl(var(--chart-1))",
               },
            }}
         >
            <LineChart
               accessibilityLayer
               data={[
                  { month: "January", desktop: 186 },
                  { month: "February", desktop: 305 },
                  { month: "March", desktop: 237 },
                  { month: "April", desktop: 73 },
                  { month: "May", desktop: 209 },
                  { month: "June", desktop: 214 },
               ]}
               margin={{
                  left: 12,
                  right: 12,
               }}
            >
               <CartesianGrid vertical={false} />
               <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
               />
               <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
               <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
            </LineChart>
         </ChartContainer>
      </div>
   )
}



function PiechartcustomChart(props) {
   return (
      <div {...props}>
         <ChartContainer
            config={{
               visitors: {
                  label: "Visitors",
               },
               chrome: {
                  label: "Chrome",
                  color: "hsl(var(--chart-1))",
               },
               safari: {
                  label: "Safari",
                  color: "hsl(var(--chart-2))",
               },
               firefox: {
                  label: "Firefox",
                  color: "hsl(var(--chart-3))",
               },
               edge: {
                  label: "Edge",
                  color: "hsl(var(--chart-4))",
               },
               other: {
                  label: "Other",
                  color: "hsl(var(--chart-5))",
               },
            }}
         >
            <PieChart>
               <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
               <Pie
                  data={[
                     { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                     { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                     { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                     { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                     { browser: "other", visitors: 90, fill: "var(--color-other)" },
                  ]}
                  dataKey="visitors"
                  nameKey="browser"
               />
            </PieChart>
         </ChartContainer>
      </div>
   )
}
