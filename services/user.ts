import prismadb from "@/lib/prismadb.ts";
import { registerSchema } from "@/schemas";
import { Prisma } from "@prisma/client";
import { z } from "zod";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prismadb.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prismadb.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const createUser = async (payload: z.infer<typeof registerSchema>) => {
  try {
    return await prismadb.user.create({
      data: payload,
    });
  } catch {
    return null;
  }
};

type UpdateUserType = Prisma.Args<typeof prismadb.user, "update">["data"];
export const updateUserById = async (id: string, payload: UpdateUserType) => {
  try {
    return await prismadb.user.update({
      where: { id },
      data: payload,
    });
  } catch {
    return null;
  }
};
