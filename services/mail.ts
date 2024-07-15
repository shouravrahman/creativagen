import { sendEmail } from "@/lib/email.ts";

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const verifyEmailLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

//   await resend.emails.send({
//     from: process.env.EMAIL_FROM as string,
//     to: email,
//     subject: "[Next Dashboard] Action required: Verify your email",
//     html: `<p>Click <a href="${verifyEmailLink}">Here</a> to verify your email.</p>`,
//   });
// };

// export const sendResetPasswordEmail = async (email: string, token: string) => {
//   const resetPasswordLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

//   await resend.emails.send({
//     from: process.env.EMAIL_FROM as string,
//     to: email,
//     subject: "[Next Dashboard] Action required: Reset your password",
//     html: `<p>Click <a href="${resetPasswordLink}">Here</a> to reset your password.</p>`,
//   });
// };

// export const sendTwoFactorEmail = async (email: string, token: string) => {
//   await resend.emails.send({
//     from: process.env.EMAIL_FROM as string,
//     to: email,
//     subject: "[Next Dashboard] Action required: Confirm Two-Factor Authentication",
//     html: `<p>${token} is your authentication Code.</p>`,
//   });
// };
export const sendVerificationEmail = async (email: string, token: string) => {
  const verifyEmailLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "[Next Dashboard] Action required: Verify your email",
    html: `<p>Click <a href="${verifyEmailLink}">Here</a> to verify your email.</p>`,
  };

  await sendEmail(mailOptions);
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetPasswordLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "[Next Dashboard] Action required: Reset your password",
    html: `<p>Click <a href="${resetPasswordLink}">Here</a> to reset your password.</p>`,
  };

  await sendEmail(mailOptions);
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject:
      "[Next Dashboard] Action required: Confirm Two-Factor Authentication",
    html: `<p>${token} is your authentication Code.</p>`,
  };

  await sendEmail(mailOptions);
};
