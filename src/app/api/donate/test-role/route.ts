import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  // GÜVENLİK: Sadece geliştirme ortamında veya özel bir key ile çalışsın
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  const secret = searchParams.get('secret');

  // Senin belirleyeceğin gizli bir kelime (Örn: 'soulet-test-123')
  if (secret !== 'soulet-test-123') {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email gerekli" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 404 });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { role: "DONATOR" },
    });

    return NextResponse.json({ 
      success: true, 
      message: `${email} adresli kullanıcıya BAĞIŞÇI rolü başarıyla verildi.`,
      user: { name: user.name, role: "DONATOR" }
    });
  } catch (error) {
    return NextResponse.json({ error: "Hata oluştu" }, { status: 500 });
  }
}
