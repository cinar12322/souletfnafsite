"use server";

import { prisma } from "@/lib/prisma";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;
  const turnstileToken = formData.get("turnstileToken") as string;

  if (!email || !email.includes("@")) {
    return { error: "Geçerli bir e-posta adresi giriniz." };
  }

  if (!turnstileToken) {
    return { error: "Bot doğrulaması eksik." };
  }

  const isHuman = await verifyTurnstileToken(turnstileToken);
  if (!isHuman) {
    return { error: "Bot doğrulaması başarısız." };
  }

  try {
    await prisma.waitlist.create({
      data: { email },
    });
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "Bu e-posta zaten waitlist'e kayıtlı." };
    }
    return { error: "Bir hata oluştu, lütfen tekrar deneyin." };
  }
}
