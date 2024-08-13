
"use client"
import Link from "next/link"
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart, Pie, PieChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Analytics() {
   return (
      <div className="flex  w-full flex-col ">

         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-6">
               <div className="grid md:grid-cols-3 gap-6">
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Credit Usage</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <LinechartChart className="aspect-[4/3]" />
                     </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Content Generated</CardDescription>
                        <CardTitle>12,345</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground">Pieces</p>
                     </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Words Generated</CardDescription>
                        <CardTitle>1,234,567</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground">Words</p>
                     </CardContent>
                  </Card>
               </div>
               <div className="grid md:grid-cols-3 gap-6">
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Characters Generated</CardDescription>
                        <CardTitle>12,345,678</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground">Characters</p>
                     </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Top Content Types</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <PiechartcustomChart className="aspect-[4/3]" />
                     </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                     <CardHeader>
                        <CardDescription>Content Quality</CardDescription>
                     </CardHeader>
                     <CardContent className="grid gap-4">
                        <div className="flex items-center">
                           <div>Sentiment Score</div>
                           <div className="font-semibold ml-auto">8.2</div>
                        </div>
                        <div className="flex items-center">
                           <div>Readability Score</div>
                           <div className="font-semibold ml-auto">85%</div>
                        </div>
                        <div className="flex items-center">
                           <div>Uniqueness Score</div>
                           <div className="font-semibold ml-auto">92%</div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </main>
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


function Package2Icon(props) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
         <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
         <path d="M12 3v6" />
      </svg>
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
