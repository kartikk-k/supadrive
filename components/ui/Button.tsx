import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "mxcn"

const buttonVariants = cva(
    "px-2 flex items-center justify-center gap-2 rounded-lg duration-300 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                ghost: "hover:bg-gray-200/60",
            },
            size: {
                default: "h-8",
                icon: 'h-8 w-8'
            },
        },
        defaultVariants: {
            variant: "ghost",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
