const path = require("path");
// .env dosyasını yükle
require("dotenv").config();

const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.user.count();
    console.log(`\nTOPLAM_KULLANICI_SAYISI: ${count}\n`);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
