"use client";
import React, { useEffect, useState } from "react";
import { Zap, Sparkles, Crown } from "lucide-react";
import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { getApiLimitCount } from "@/lib/api-limit";

const CircularProgress = ({
	value,
	apiLimitCount,
}: {
	value: number;
	apiLimitCount: number;
}) => {
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (value / 100) * circumference;

	return (
		<div className="relative w-32 h-32">
			{/* Background circle */}
			<svg className="w-full h-full transform -rotate-90">
				<circle
					cx="64"
					cy="64"
					r={radius}
					className="fill-none stroke-primary/10"
					strokeWidth="8"
				/>
				{/* Progress circle */}
				<circle
					cx="64"
					cy="64"
					r={radius}
					className="fill-none stroke-primary transition-all duration-500 ease-out"
					strokeWidth="8"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</svg>
			{/* Center content */}
			<div className="absolute inset-0  p-1 flex flex-col items-center justify-center">
				<span className="text-2xl font-bold text-accent">
					{MAX_FREE_COUNTS - apiLimitCount}
				</span>
				<span className="text-xs text-muted-foreground">remaining</span>
			</div>
		</div>
	);
};

export const CreditCounter = ({
	isPro = false,
	apiLimitCount = 0,
}: {
	isPro: boolean;
	apiLimitCount: number;
}) => {
	const [mounted, setMounted] = useState(false);
	const proModal = useProModal();
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if (isPro) {
		return (
			<div className="px-1">
				<Card className="bg-gradient-to-br from-amber-100 to-amber-50 border-0">
					<CardContent className="py-6">
						<div className="flex items-center justify-center space-x-2">
							<Crown className="w-5 h-5 text-amber-600" />
							<span className="text-sm font-medium text-amber-800">
								Pro Plan
							</span>
						</div>
						<div className="text-center mt-2">
							<span className="text-xs text-amber-600/80">
								Unlimited Access
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	const percentage = (apiLimitCount / MAX_FREE_COUNTS) * 100;
	const creditsLeft = MAX_FREE_COUNTS - apiLimitCount;

	return (
		<div className="px-3">
			<Card className="bg-card border-0 overflow-hidden">
				<CardContent className="py-6">
					<div className="flex flex-col items-center">
						<div className="mb-4">
							<CircularProgress
								value={percentage}
								apiLimitCount={apiLimitCount}
							/>
						</div>

						<div className="text-center space-y-2 mb-4">
							<div className="flex items-center justify-center space-x-1">
								<Sparkles className="w-4 h-4 text-primary" />
								<span className="text-sm text-muted-foreground">
									Free Credits
								</span>
							</div>
							<div className="text-xs text-muted-foreground">
								{creditsLeft === 0 ? (
									<span className="text-red-400">
										No credits remaining
									</span>
								) : (
									<span>
										Use them to create amazing content!
									</span>
								)}
							</div>
						</div>

						<Button
							onClick={proModal.onOpen}
							variant="destructive"
							className={`
                w-full px-1
                hover:opacity-90 transition-all duration-300
                ${isHovered ? "shadow-lg scale-105" : "shadow-md"}
              `}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<span className="flex items-center">
								Upgrade to Pro
								<Zap
									className={`
                  w-4 h-4 ml-2 fill-white
                  ${isHovered ? "animate-bounce" : ""}
                `}
								/>
							</span>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default CreditCounter;
