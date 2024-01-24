import { redirect } from "next/navigation";
import { serverClient } from "~/app/_trpc/server-client";

interface IProps {
  children: React.ReactNode;
}

export default async function MySpaceLayout({ children }: IProps) {
  const user = await serverClient.user.getAuthProfile();
  if (!user) return redirect("/explore");
  return <>{children}</>;
}
