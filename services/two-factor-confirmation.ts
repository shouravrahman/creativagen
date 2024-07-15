import prismadb from "@/lib/prismadb.ts";
import { setTokenExpiration } from "@/lib/utils";

export const generateTwoFactorConfirmation = async (userId: string) => {
  const existingTwoFactorConfirmation = await getTwoFactorConfirmationByUserId(
    userId
  );
  if (existingTwoFactorConfirmation) {
    await deleteTwoFactorConfirmationById(existingTwoFactorConfirmation.id);
  }

  const expires = setTokenExpiration(60 * 15); // 15 minutes

  const twoFactorConfirmation = await prismadb.twoFactorConfirmation.create({
    data: {
      userId,
      expires,
    },
  });

  return twoFactorConfirmation;
};

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation =
      await prismadb.twoFactorConfirmation.findUnique({
        where: { userId },
      });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};

export const deleteTwoFactorConfirmationById = async (id: string) => {
  try {
    return await prismadb.twoFactorConfirmation.delete({
      where: { id },
    });
  } catch {
    return null;
  }
};

export const deleteTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    return await prismadb.twoFactorConfirmation.delete({
      where: { userId },
    });
  } catch {
    return null;
  }
};
