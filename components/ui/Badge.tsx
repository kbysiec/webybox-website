import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
          {
            "bg-brand-violet-100 text-brand-violet-700 dark:bg-brand-violet-950 dark:text-brand-violet-300":
              variant === "default",
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300":
              variant === "success",
            "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300":
              variant === "warning",
            "border border-brand-violet-300 text-brand-violet-700 dark:border-brand-violet-700 dark:text-brand-violet-300":
              variant === "outline",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
