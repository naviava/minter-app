import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import { db } from "~/lib/db";

const t = initTRPC.create();
const middleware = t.middleware;

// Logged in users only middleware.
const isAuthenticated = middleware(async (opts) => {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email)
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Unauthorized action",
    });
  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user || user.disabled)
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Unauthorized action",
    });
  return opts.next({
    ctx: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        disabled: user.disabled,
      },
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuthenticated);
