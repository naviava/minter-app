import { Navbar } from "~/components/navbar";

interface IProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: IProps) {
  return (
    <main className="flex h-full flex-col">
      <div className="absolute left-24 top-44 z-[-1] h-[500px] w-[500px] rounded-full bg-red-600 blur-[14rem]" />
      <div className="absolute right-20 top-12 z-[-1] h-[500px] w-[500px] rounded-full bg-indigo-600 blur-[14rem]" />
      <Navbar />
      {children}
    </main>
  );
}
