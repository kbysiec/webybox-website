import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode, cloneElement, isValidElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet-400 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "active:scale-95",
      {
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25":
          variant === "primary",
        "bg-brand-mint-500 text-white hover:bg-brand-mint-500/90 shadow-lg shadow-brand-mint-500/25":
          variant === "secondary",
        "border-2 border-brand-violet-400 text-brand-violet-400 hover:bg-brand-violet-400/10 dark:border-brand-violet-300 dark:text-brand-violet-300":
          variant === "outline",
        "text-brand-ink-950 hover:bg-brand-violet-100 dark:text-neutral-100 dark:hover:bg-brand-violet-950/30":
          variant === "ghost",
        "px-4 py-2 text-sm": size === "sm",
        "px-6 py-3 text-base": size === "md",
        "px-8 py-4 text-lg": size === "lg",
      },
      className
    );

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        className: cn(classes, (children.props as any).className),
      } as any);
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
