"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { loginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { login } from "@/actions/login";
import { FormInput } from "@/components/auth/form-input";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleSubmit = form.handleSubmit((values) => {
		startTransition(() => {
			login(values)
				.then((data) => {
					if (!data) return;
					if (!data.success) {
						return toast.error(data.error.message);
					}
               data.success && toast.success("Logged In")
               return router.push("/two-factor");
               // return toast.success("Logged In")

				})
				.catch(() => toast.error("Something went wrong."));
		});
	});

	const handleDemoUser = () => {
		form.setValue("email", "shouravatwork@gmail.com");
      form.setValue("password", "adminhere");
		handleSubmit(form.getValues());
	};

	return (
		<CardWrapper
			headerTitle="Login"
			headerDescription="Welcome back! Please fill out the form below before logging in to the website."
			backButtonLabel="Don't have an account? Register"
			backButtonHref="/register"
			showSocial={false}
		>
			<Form {...form}>
				<form
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormInput
							control={form.control}
							name="email"
							label="Email Address"
							type="email"
							placeholder="e.g. johndoe@example.com"
							isPending={isPending}
						/>
						<div>
							<FormInput
								control={form.control}
								name="password"
								label="Password"
								type="password"
								placeholder="******"
								isPending={isPending}
							/>
							<Button
								size="sm"
								variant="link"
								className="-mt-6 p-0 text-xs text-blue-500 w-full justify-end"
								asChild
							>
								<Link href="/reset">Forgot password?</Link>
							</Button>
						</div>
					</div>
					<Button
						type="submit"
						disabled={isPending}
						className="w-full"
                  variant={"destructive"}
					>
						Login
					</Button>
					<Button
						type="button"
						onClick={handleDemoUser}
						className="w-full"
                  variant={"link"}
					>
						Login as Demo User
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
