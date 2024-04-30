import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"w-auto text-black rounded-md bg-primary border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold",
				destructive: "bg-destructive text-destructive-foreground shadow-sm ",
				outline: "border border-input bg-background-container shadow-sm",
				secondary: "bg-secondary text-secondary-foreground shadow-sm ",
				ghost: "hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline ",
				success: "bg-success text-white shadow-sm ",
				primary: "bg-primary text-black shadow-sm "
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
	prevIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, prevIcon, loading = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					"hover:opacity-75 active:opacity-95 transition",
					buttonVariants({ variant, size, className }),
					loading ? "opacity-50" : "",
					"relative"
				)}
				ref={ref}
				{...props}
				disabled={loading || props.disabled}
			>
				{prevIcon && <div className="left-2 absolute">{prevIcon}</div>}
				{props.children}
				{loading && <LoaderCircle className="right-2 animate-spin absolute" size={14} />}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
