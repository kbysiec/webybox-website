import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300",
          "dark:border-neutral-800 dark:bg-[#242128]",
          hover &&
            "hover:shadow-xl hover:shadow-brand-violet-400/10 hover:-translate-y-1 hover:border-brand-violet-300 dark:hover:border-brand-violet-700 dark:hover:shadow-brand-violet-900/30",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
