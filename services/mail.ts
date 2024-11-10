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
		subject: "[Creativagen] Action Required : Verify Your Email",
		html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
       <h2 style="color: #4CAF50;">Verify Your Email Address</h2>
       <p>Dear User,</p>
       <p>Thank you for registering with Next Dashboard. To complete your registration, please verify your email address by clicking the link below:</p>
       <p>
         <a href="${verifyEmailLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
       </p>
       <p>If you did not create an account, please ignore this email.</p>
       <p>Best regards,<br/>The Next Dashboard Team</p>
     </div>
   `,
  };

  await sendEmail(mailOptions);
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetPasswordLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

  const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: email,
		subject: "[Creativagen] Action Required: Reset Your Password",
		html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
       <h2 style="color: #FF5722;">Reset Your Password</h2>
       <p>Dear User,</p>
       <p>We received a request to reset your password for your Next Dashboard account. Click the link below to reset your password:</p>
       <p>
         <a href="${resetPasswordLink}" style="background-color: #FF5722; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
       </p>
       <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
       <p>Best regards,<br/>The Next Dashboard Team</p>
     </div>
   `,
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
