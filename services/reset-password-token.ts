import prismadb from "@/lib/prismadb.ts";
import { setTokenExpiration } from "@/lib/utils";
import { v4 as uuid } from "uuid";

export const generateResetPasswordToken = async (email: string) => {
  const existingToken = await getResetPasswordTokenByEmail(email);
  if (existingToken) {
    await deleteResetPasswordTokenById(existingToken.id);
  }

  const token = uuid();
  const expires = setTokenExpiration();

  const resetPasswordToken = await prismadb.resetPasswordToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return resetPasswordToken;
};

export const getResetPasswordToken = async (token: string) => {
  try {
    const resetPasswordToken = await prismadb.resetPasswordToken.findUnique({
      where: { token },
    });

    return resetPasswordToken;
  } catch {
    return null;
  }
};

export const getResetPasswordTokenByEmail = async (email: string) => {
  try {
    const resetPasswordToken = await prismadb.resetPasswordToken.findFirst({
      where: { email },
    });

    return resetPasswordToken;
  } catch {
    return null;
  }
};

export const deleteResetPasswordTokenById = async (id: string) => {
  try {
    return await prismadb.resetPasswordToken.delete({
      where: { id },
    });
  } catch {
    return null;
  }
};
