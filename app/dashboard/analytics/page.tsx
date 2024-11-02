"use client";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	BarChart,
	Bar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
	// Add a new field for time series data
	timeSeriesData: {
		date: string;
		totalWords: number;
		totalContent: number;
	}[];
};

export default function Analytics() {
	const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
		null
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await fetch("/api/analytics", {
					cache: "no-store",
				});
				if (!response.ok) {
					throw new Error("Failed to fetch analytics data");
				}
				const data = await response.json();
				// setAnalyticsData(data);
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
							totalWords: 1500,
							totalContent: 7,
						},
						{
							date: "2023-01-03",
							totalWords: 2000,
							totalContent: 10,
						},
						{
							date: "2023-01-04",
							totalWords: 2500,
							totalContent: 12,
						},
						{
							date: "2023-01-05",
							totalWords: 3000,
							totalContent: 15,
						},
						{
							date: "2023-01-06",
							totalWords: 3500,
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
				Loading...
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full min-h-screen">
			<main className="flex-1 grid gap-4 p-4 md:gap-8 md:p-10">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader>
							<CardTitle>Total Credits Used</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-accent">
								{analyticsData?.totalCreditsUsed}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Total Words Generated</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-accent">
								{analyticsData?.totalWordsGenerated}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Total Content Created</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-accent">
								{analyticsData?.totalContentCreated}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Time Saved</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-accent">
								{analyticsData?.timeSaved} min
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-1">
					<Card className="col-span-1">
						<CardHeader>
							<CardTitle>Analytics Over Time</CardTitle>
						</CardHeader>
						<CardContent>
							{analyticsData && (
								<BarChartComponent
                        data={analyticsData.timeSeriesData}
                     />
							)}
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}

function BarChartComponent({
	data,
}: {
	data: { date: string; totalWords: number; totalContent: number }[];
}) {
	return (
		<ChartContainer config={{}}>
			<BarChart
				data={data}
				width={600}
				height={300}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					dataKey="totalWords"
					fill="hsl(var(--accent))"
				/>
				<Bar
					dataKey="totalContent"
					fill="hsl(var(--secondary))"
				/>
			</BarChart>
		</ChartContainer>
	);
}
function LineChartComponent({ data }: { data: { date: string; totalWords: number; totalContent: number }[] }) {
	return (
		<ChartContainer config={{}}>
			<LineChart
				data={data}
				width={600}
				height={300}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="totalWords" stroke="hsl(var(--accent))" />
				<Line type="monotone" dataKey="totalContent" stroke="hsl(var(--secondary))" />
			</LineChart>
		</ChartContainer>
	);
}
function StackedBarChart({ data }: { data: ContentByType[] }) {
	return (
		<ChartContainer config={{}}>
			<BarChart
				data={data}
				width={600}
				height={300}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid vertical={false} />
				<XAxis dataKey="templateSlug" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					dataKey="count"
					fill="hsl(var(--accent))"
				/>
			</BarChart>
		</ChartContainer>
	);
}
