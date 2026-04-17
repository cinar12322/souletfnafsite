"use server";

import { prisma } from "@/lib/prisma";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { error: "Geçerli bir e-posta adresi giriniz." };
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
