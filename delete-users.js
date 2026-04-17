const { PrismaClient } = require("./src/generated/prisma");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
require("dotenv").config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("Hata: DATABASE_URL bulunamadı.");
    return;
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    // Önce kaç kişi olduğunu öğrenelim
    const count = await prisma.user.count();
    console.log(`Silinecek toplam kullanıcı sayısı: ${count}`);

    if (count === 0) {
      console.log("Silinecek kullanıcı bulunamadı.");
      return;
    }

    // Kullanıcıları sil (Cascade silme prisma schema'da tanımlı olduğu için Account ve Session'lar da silinir)
    await prisma.user.deleteMany();
    console.log("Bütün kullanıcılar başarıyla silindi.");
    
  } catch (error) {
    console.error("İşlem sırasında bir hata oluştu:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
