import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

interface IProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: IProps) {
  return (
    <main className="flex h-full flex-col">
      <div className="absolute top-52 z-[-1] h-[250px] w-[250px] rounded-full bg-red-600 blur-[8rem] md:left-24 md:top-44 md:h-[500px] md:w-[500px] md:blur-[14rem]" />
      <div className="absolute right-8 top-20 z-[-1] h-[250px] w-[250px] rounded-full bg-indigo-600 blur-[8rem] md:right-20 md:top-12 md:h-[500px] md:w-[500px] md:blur-[14rem]" />
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </main>
  );
}
