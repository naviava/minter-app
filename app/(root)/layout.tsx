import { Navbar } from "~/components/navbar";

interface IProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: IProps) {
  return (
    <main className="flex h-full flex-col">
      <Navbar />
      {children}
    </main>
  );
}
