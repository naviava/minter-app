interface IProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: IProps) {
  return <div className="mx-auto mt-6 w-full max-w-7xl px-4">{children}</div>;
}
