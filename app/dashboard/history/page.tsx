"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { ListOrderedIcon } from "lucide-react";
import { useSession } from "next-auth/react";

interface GeneratedContent {
	id: string;
	formValues: any;
	aiResponse: string;
	templateSlug: string;
	createdAt: string;
}

export default function History() {
	const { data: session } = useSession();
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState({ key: "createdAt", order: "desc" });
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [content, setContent] = useState<GeneratedContent[]>([]);

	useEffect(() => {
		const fetchContent = async () => {
			if (session?.user) {
				const response = await fetch("/api/generate/history");
				if (response.ok) {
					const data = await response.json();
					setContent(data);
				}
			}
		};
		fetchContent();
	}, [session]);
	const filteredContent = useMemo(() => {
		return content
			.filter((item) => {
				const searchValue = search.toLowerCase();
				return (
					item.templateSlug.toLowerCase().includes(searchValue) ||
					item.formValues.title
						?.toLowerCase()
						.includes(searchValue) ||
					item.formValues.author?.toLowerCase().includes(searchValue)
				);
			})
			.sort((a, b) => {
				if (sort.order === "asc") {
					return a[sort.key] > b[sort.key] ? 1 : -1;
				} else {
					return a[sort.key] < b[sort.key] ? 1 : -1;
				}
			})
			.slice((page - 1) * pageSize, page * pageSize);
	}, [search, sort, page, pageSize, content]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
	const handleSort = (key: string) => {
		if (sort.key === key) {
			setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
		} else {
			setSort({ key, order: "asc" });
		}
	};
	const handlePageChange = (page: number) => setPage(page);
	const handlePageSizeChange = (size: number) => setPageSize(size);
	return (
		<div className="flex flex-col gap-4 mt-10">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold my-2">Content History</h1>
				<div className="flex items-center gap-2">
					<Input
						type="search"
						placeholder="Search content..."
						value={search}
						onChange={handleSearch}
						className=" px-4 py-2 rounded-lg"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="px-4 py-2 rounded-lg"
							>
								<ListOrderedIcon className="w-4 h-4 mr-2" />
								Sort by: {sort.key}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="w-48 bg-background"
						>
							<DropdownMenuRadioGroup
								value={sort.key}
								onValueChange={handleSort}
							>
								<DropdownMenuRadioItem value="createdAt">
									Date Created
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="title">
									Title
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="type">
									Content Type
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<div className="overflow-x-auto border border-border">
				<Table>
					<TableHeader className="bg-accent text-accent-foreground">
						<TableRow>
							<TableHead>Content Type</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Created At</TableHead>
							<TableHead>Details</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredContent.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.templateSlug}</TableCell>
								<TableCell>
									{item.aiResponse.slice(0, 100)}
								</TableCell>
								<TableCell>
									{new Date(
										item.createdAt
									).toLocaleDateString()}
								</TableCell>
								<TableCell>
									<Button
										variant="outline"
										size="sm"
									>
										View Details
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-between">
				<div className="text-sm text-foreground w-full">
					Showing {(page - 1) * pageSize + 1} to{" "}
					{Math.min(page * pageSize, filteredContent.length)} of{" "}
					{filteredContent.length} results
				</div>
				<Pagination
					className="w-full self-end"
					currentPage={page}
					totalPages={Math.ceil(filteredContent.length / pageSize)}
					onPageChange={handlePageChange}
					onPageSizeChange={handlePageSizeChange}
				>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								onClick={() => handlePageChange(page - 1)}
								aria-disabled={page === 1}
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								onClick={() => handlePageChange(page + 1)}
								aria-disabled={
									page ===
									Math.ceil(filteredContent.length / pageSize)
								}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
