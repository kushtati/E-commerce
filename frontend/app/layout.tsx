/**
 * Kushtati E-Commerce Frontend Layout
 * 
 * @author Kushtati
 * @copyright 2025 Kushtati
 * @license MIT
 * @see https://github.com/kushtati/e-commerce
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kushtati E-Commerce - Boutique en ligne',
  description: 'Kushtati E-Commerce - Découvrez notre collection de produits de qualité',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
