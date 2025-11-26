'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, User, Search } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useState } from 'react'

export default function Header() {
  const { items } = useCartStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Kushtati
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Accueil
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 transition">
              Produits
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 transition hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/profile" className="text-gray-700 hover:text-primary-600 transition hidden md:block">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-primary-600 transition">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
                Accueil
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary-600 transition">
                Produits
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
                À propos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
                Contact
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-primary-600 transition">
                Mon compte
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
