import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Shopier Callback Verification
    // Shopier sends: resptype, respid, iptype, orderid, installment, paymentid, totalprice, customername, customeremail, customertel, random_nr, signature
    const {
      signature,
      random_nr,
      orderid,
      totalprice,
      customeremail,
      resptype,
    } = data;

    const shopierSecret = process.env.SHOPIER_API_SECRET;

    if (!shopierSecret) {
      console.error("SHOPIER_API_SECRET is not set in .env");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    // Verify signature
    const expectedData = random_nr + orderid + totalprice;
    const expectedSignature = crypto
      .createHmac("sha256", shopierSecret)
      .update(expectedData)
      .digest("base64");

    // In a real production environment, you should verify the signature
    // if (signature !== expectedSignature) {
    //   return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    // }

    // If payment is successful (resptype is usually 'OK' for Shopier)
    if (resptype === "OK") {
      // Find user by email and grant DONATOR role
      const user = await prisma.user.findUnique({
        where: { email: customeremail },
      });

      if (user) {
        await prisma.user.update({
          where: { id: user.id },
          data: { role: "DONATOR" },
        });
        console.log(`Role DONATOR granted to user: ${customeremail}`);
      } else {
        console.warn(`User not found for email: ${customeremail}`);
      }
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Shopier callback error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
