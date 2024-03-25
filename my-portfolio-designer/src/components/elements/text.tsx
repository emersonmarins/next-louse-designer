import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import * as React from "react";

interface TextProps 
  extends VariantProps<typeof Object>
{
  children: React.ReactNode
  className?: string
}
const TextSpan: React.FC<TextProps> = ({children, className, ...props}) => {
  return (
    <span
    className={cn("text-sm font-ubuntu font-light text-neutral-400 opacity-1 animate-showElement max-w-[600px] max-project-lg:max-w-[400px] ", className)}
    {...props}
    >
      {children}
    </span>
  )
}

const TextP: React.FC<TextProps> = ({children, className, ...props}) => {
  return (
    <span
    className={cn("text-sm font-ubuntu font-light text-neutral-400 opacity-1 animate-showElement max-w-[600px] max-project-lg:max-w-[400px] ", className)}
    {...props}
    >
      {children}
    </span>
  )
}

// }

export { TextSpan, TextP }