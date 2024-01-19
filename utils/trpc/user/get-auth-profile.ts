import { getServerSession } from "next-auth";

import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getAuthProfile = publicProcedure.query(async () => {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return null;
  return user;
});
