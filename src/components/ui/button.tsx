import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-110 shadow-premium hover:shadow-card-hover hover:-translate-y-1 relative overflow-hidden after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/20 bg-transparent hover:bg-primary/5 hover:border-primary/40 text-primary shadow-soft",
        secondary: "bg-secondary/80 backdrop-blur-md text-secondary-foreground hover:bg-secondary shadow-soft hover:shadow-premium",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-body tracking-[0.1em] shadow-premium hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 relative before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        warmOutline: "border-2 border-primary/30 text-primary hover:bg-primary hover:text-white rounded-full font-body tracking-wider transition-all duration-500 hover:shadow-premium hover:-translate-y-1 backdrop-blur-sm",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 rounded-full px-4",
        lg: "h-16 rounded-full px-12 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
