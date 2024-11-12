"use client";
import React from "react";
import {
	LineChart,
	Line,
   BarChart,
   Bar,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
   ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ArrowUpRight, Clock, FileText, CreditCard } from "lucide-react";

type ContentByType = {
	templateSlug: string;
	count: number;
};

type AnalyticsData = {
	totalCreditsUsed: number;
	totalWordsGenerated: number;
	totalContentCreated: number;
	contentByType: ContentByType[];
   timeSaved: number;
	timeSeriesData: {
		date: string;
		totalWords: number;
		totalContent: number;
	}[];
};

const StatCard = ({ title, value, icon, suffix = "" }: { title: string, value: number, icon: any, suffix?: string }) => (
   <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
         <CardTitle className="text-sm font-medium">{title}</CardTitle>
         {icon}
      </CardHeader>
      <CardContent>
         <div className="text-2xl font-bold">
            {value.toLocaleString()}
            {suffix}
         </div>
         <p className="text-xs text-muted-foreground">
            +20.1% from last month
         </p>
      </CardContent>
   </Card>
);

export function Analytics() {
   const [analyticsData, setAnalyticsData] =
      React.useState<AnalyticsData | null>(null);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await fetch("/api/analytics", {
					cache: "no-store",
				});
				if (!response.ok) {
					throw new Error("Failed to fetch analytics data");
				}
            const data = await response.json();
				setAnalyticsData({
					totalCreditsUsed: 10,
					totalWordsGenerated: 5000,
					totalContentCreated: 20,
					contentByType: [],
					timeSaved: 125,
					timeSeriesData: [
						{
							date: "2023-01-01",
							totalWords: 1000,
							totalContent: 5,
						},
						{
							date: "2023-01-02",
                     totalWords: 500,
							totalContent: 7,
						},
						{
							date: "2023-01-03",
							totalWords: 2000,
							totalContent: 10,
						},
						{
							date: "2023-01-04",
                     totalWords: 1500,
							totalContent: 12,
						},
						{
							date: "2023-01-05",
                     totalWords: 700,
							totalContent: 15,
						},
						{
							date: "2023-01-06",
                     totalWords: 1300,
							totalContent: 18,
						},
						{
							date: "2023-01-07",
							totalWords: 4000,
							totalContent: 20,
						},
					],
				});
			} catch (error) {
				console.error("Failed to fetch analytics data", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAnalyticsData();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
			</div>
		);
	}

   if (!analyticsData) return null;

	return (
      <div className="flex flex-col w-full space-y-4 p-4 md:p-8">
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
               title="Total Credits Used"
               value={analyticsData.totalCreditsUsed}
               icon={
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
               }
            />
            <StatCard
               title="Words Generated"
               value={analyticsData.totalWordsGenerated}
               icon={
                  <FileText className="h-4 w-4 text-muted-foreground" />
               }
            />
            <StatCard
               title="Content Created"
               value={analyticsData.totalContentCreated}
               icon={
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
               }
            />
            <StatCard
               title="Time Saved"
               value={analyticsData.timeSaved}
               suffix=" min"
               icon={<Clock className="h-4 w-4 text-muted-foreground" />}
            />
         </div>

         <div className="grid gap-4 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <CardTitle>Words Generated Over Time</CardTitle>
               </CardHeader>
               <CardContent className="h-[400px]">
                  <ResponsiveContainer
                     width="100%"
                     height="100%"
                  >
                     <LineChart data={analyticsData.timeSeriesData}>
                        <CartesianGrid
                           strokeDasharray="3 3"
                           className="stroke-muted"
                        />
                        <XAxis
                           dataKey="date"
                           className="text-xs"
                           tickFormatter={(date) =>
                              new Date(date).toLocaleDateString()
                           }
                        />
                        <YAxis className="text-xs" />
                        <Tooltip
                           contentStyle={{
                              backgroundColor:
                                 "hsl(var(--background))",
                              border: "1px solid hsl(var(--border))",
                           }}
                        />
                        <Legend />
                        <Line
                           type="monotone"
                           dataKey="totalWords"
                           name="Words"
                           stroke="hsl(var(--accent))"
                           strokeWidth={2}
                           dot={false}
                        />
                     </LineChart>
                  </ResponsiveContainer>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Contents Generated Per Day</CardTitle>
               </CardHeader>
               <CardContent className="h-[400px]">
                  <ResponsiveContainer
                     width="100%"
                     height="100%"
                  >
                     <BarChart data={analyticsData.timeSeriesData}>
                        <CartesianGrid
                           strokeDasharray="3 3"
                           className="stroke-muted"
                        />
                        <XAxis
                           dataKey="date"
                           className="text-xs"
                           tickFormatter={(date) =>
                              new Date(date).toLocaleDateString()
                           }
                        />
                        <YAxis className="text-xs" />
                        <Tooltip
                           contentStyle={{
                              backgroundColor:
                                 "hsl(var(--background))",
                              border: "1px solid hsl(var(--border))",
                           }}
                        />
                        <Legend />
                        <Bar
                           dataKey="totalContent"
                           name="Content"
                           fill="hsl(var(--accent))"
                           className="hover:bg-black"
                           radius={[4, 4, 0, 0]}
                        />
                     </BarChart>
                  </ResponsiveContainer>
               </CardContent>
            </Card>
         </div>
      </div>
	);
}

export default Analytics;
