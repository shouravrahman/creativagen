// app/lib/rate-limiter.ts
type RequestLog = {
	timestamps: number[];
};

class RateLimiter {
	private requests: Map<string, RequestLog>;
	private readonly requestsPerMinute: number;
	private readonly windowMs: number;

	constructor(requestsPerMinute: number = 2) {
		this.requests = new Map();
		this.requestsPerMinute = requestsPerMinute;
		this.windowMs = 60 * 1000; // 1 minute in milliseconds
	}

	isAllowed(identifier: string): boolean {
		const now = Date.now();
		const requestLog = this.requests.get(identifier) || { timestamps: [] };

		// Remove timestamps outside the current window
		requestLog.timestamps = requestLog.timestamps.filter(
			(timestamp) => now - timestamp < this.windowMs
		);

		// Check if user has exceeded rate limit
		if (requestLog.timestamps.length >= this.requestsPerMinute) {
			return false;
		}

		// Add new timestamp
		requestLog.timestamps.push(now);
		this.requests.set(identifier, requestLog);

		return true;
	}

	getRemainingTime(identifier: string): number {
		const requestLog = this.requests.get(identifier);
		if (!requestLog || requestLog.timestamps.length === 0) {
			return 0;
		}

		const oldestTimestamp = requestLog.timestamps[0];
		const now = Date.now();
		return Math.max(0, this.windowMs - (now - oldestTimestamp));
	}

	getRemainingRequests(identifier: string): number {
		const now = Date.now();
		const requestLog = this.requests.get(identifier) || { timestamps: [] };
		const validTimestamps = requestLog.timestamps.filter(
			(timestamp) => now - timestamp < this.windowMs
		);
		return Math.max(0, this.requestsPerMinute - validTimestamps.length);
	}
}

// Create a singleton instance
const rateLimiter = new RateLimiter(2); // 2 requests per minute
export default rateLimiter;
