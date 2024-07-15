// Services for OAuth providers such as Google, Github, etc...
import prismadb from "@/lib/prismadb.ts";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prismadb.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};
