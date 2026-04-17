"use server";

import { prisma } from "@/lib/prisma";
import { verifyTurnstileToken } from "@/lib/turnstile";
import bcrypt from "bcryptjs";

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

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const turnstileToken = formData.get("turnstileToken") as string;

  if (!name || !email || !password || !turnstileToken) {
    return { error: "Lütfen tüm alanları doldurun." };
  }

  if (!email.includes("@")) {
    return { error: "Geçerli bir e-posta adresi giriniz." };
  }

  if (password.length < 6) {
    return { error: "Şifre en az 6 karakter olmalıdır." };
  }

  const isHuman = await verifyTurnstileToken(turnstileToken);
  if (!isHuman) {
    return { error: "Bot doğrulaması başarısız." };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Bu e-posta adresi zaten kullanımda." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("Registration error:", error);
    return { error: "Hesap oluşturulurken bir hata oluştu." };
  }
}
