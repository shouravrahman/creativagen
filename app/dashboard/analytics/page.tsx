"use client";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Cell,
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
};

export default function Analytics() {
	const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
		null
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await fetch("/api/analytics");
				if (!response.ok) {
					throw new Error("Failed to fetch analytics data");
				}
				const data = await response.json();
				setAnalyticsData(data);
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
								{analyticsData?.timeSaved} hours
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<Card className="col-span-1">
						<CardHeader>
							<CardTitle>Content Categorized by Type</CardTitle>
						</CardHeader>
						<CardContent>
							{analyticsData && (
								<BarchartChart
									data={analyticsData.contentByType}
								/>
							)}
						</CardContent>
					</Card>
					<Card className="col-span-1">
						<CardHeader>
							<CardTitle>Content Distribution</CardTitle>
						</CardHeader>
						<CardContent>
							{analyticsData && (
								<PieChartComponent
									data={analyticsData.contentByType}
								/>
							)}
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
// dummy for test
// [
//    {
//       templateSlug: "Blog Post",
//       count: 120,
//    },
//    {
//       templateSlug: "Social Media",
//       count: 80,
//    },
//    {
//       templateSlug: "Email Newsletter",
//       count: 50,
//    },
//    {
//       templateSlug: "Product Description",
//       count: 30,
//    },
//    {
//       templateSlug: "Landing Page",
//       count: 40,
//    },
// ]

function BarchartChart({ data }: { data: ContentByType[] }) {
	return (
		<ChartContainer
			config={{
				count: {
					label: "Count",
					color: "hsl(var(--chart-3))",
				},
			}}
		>
			<BarChart
				data={data}
				width={600}
				height={300}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid vertical={false} />
				<XAxis dataKey="templateSlug" />
				<YAxis />
				<Bar
					dataKey="count"
					fill="hsl(var(--accent))"
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
			</BarChart>
		</ChartContainer>
	);
}

function PieChartComponent({ data }: { data: ContentByType[] }) {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6699"];

	return (
		<ChartContainer config={{}}>
			<PieChart
				width={500}
				height={500}
			>
				<Pie
					data={data}
					dataKey="count"
					nameKey="templateSlug"
					cx="50%"
					cy="50%"
					outerRadius={80}
					fill="#8884d8"
					label
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
			</PieChart>
		</ChartContainer>
	);
}
