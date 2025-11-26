import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample products
  const products = [
    {
      name: 'Laptop Premium XPS 15',
      description: 'Ordinateur portable haute performance avec écran 4K, processeur Intel i7, 16GB RAM, 512GB SSD. Idéal pour le travail et le multimédia.',
      price: 1299.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Laptop',
      category: 'Électronique',
      stock: 15
    },
    {
      name: 'Smartphone Galaxy Pro',
      description: 'Smartphone Android dernière génération avec appareil photo 108MP, 5G, écran AMOLED 6.7", batterie longue durée.',
      price: 899.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Smartphone',
      category: 'Électronique',
      stock: 25
    },
    {
      name: 'Casque Audio Sans Fil',
      description: 'Casque Bluetooth avec réduction de bruit active, autonomie 30h, son Hi-Fi premium, confortable pour toute la journée.',
      price: 199.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Headphones',
      category: 'Audio',
      stock: 40
    },
    {
      name: 'Montre Connectée Sport',
      description: 'Montre intelligente avec suivi GPS, moniteur cardiaque, étanche 50m, notifications smartphone, autonomie 7 jours.',
      price: 249.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Smartwatch',
      category: 'Électronique',
      stock: 30
    },
    {
      name: 'Tablette Pro 11"',
      description: 'Tablette haute résolution avec stylet inclus, processeur rapide, parfaite pour le dessin et la productivité.',
      price: 699.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Tablet',
      category: 'Électronique',
      stock: 20
    },
    {
      name: 'Appareil Photo Reflex',
      description: 'Appareil photo numérique 24MP, objectif 18-55mm, vidéo 4K, écran tactile orientable, WiFi intégré.',
      price: 799.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Camera',
      category: 'Photo',
      stock: 12
    },
    {
      name: 'Clavier Mécanique RGB',
      description: 'Clavier gaming mécanique avec switches Cherry MX, rétroéclairage RGB personnalisable, repose-poignet inclus.',
      price: 129.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Keyboard',
      category: 'Accessoires',
      stock: 50
    },
    {
      name: 'Souris Gaming Pro',
      description: 'Souris gaming haute précision 16000 DPI, 8 boutons programmables, éclairage RGB, ergonomique.',
      price: 79.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Mouse',
      category: 'Accessoires',
      stock: 60
    },
    {
      name: 'Écran 4K UHD 27"',
      description: 'Moniteur 4K IPS 27 pouces, 144Hz, HDR, temps de réponse 1ms, parfait pour gaming et création de contenu.',
      price: 449.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Monitor',
      category: 'Électronique',
      stock: 18
    },
    {
      name: 'Chaise Gaming Ergonomique',
      description: 'Fauteuil gaming avec support lombaire, accoudoirs réglables, inclinaison 180°, revêtement cuir PU premium.',
      price: 299.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Chair',
      category: 'Mobilier',
      stock: 22
    },
    {
      name: 'SSD Externe 1TB',
      description: 'Disque SSD portable ultra-rapide, USB-C 3.2, vitesse lecture 1050 MB/s, compact et résistant.',
      price: 149.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=SSD',
      category: 'Stockage',
      stock: 35
    },
    {
      name: 'Webcam Full HD 1080p',
      description: 'Caméra web professionnelle avec microphone stéréo, autofocus, correction lumière faible, idéale télétravail.',
      price: 89.99,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Webcam',
      category: 'Accessoires',
      stock: 45
    }
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: products.indexOf(product) + 1 },
      update: {},
      create: product
    })
  }

  // Create a sample admin user
  const bcrypt = require('bcryptjs')
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  await prisma.user.upsert({
    where: { email: 'admin@ecommerce.com' },
    update: {},
    create: {
      email: 'admin@ecommerce.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN'
    }
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
