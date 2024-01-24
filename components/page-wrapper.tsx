import { cn } from "~/lib/utils";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: IProps) {
  return (
    <div className={cn("mx-auto mt-6 w-full max-w-5xl px-4", className)}>
      {children}
    </div>
  );
}
