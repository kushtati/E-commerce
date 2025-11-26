'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { clearCart } = useCartStore()
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  useEffect(() => {
    if (sessionId && !orderConfirmed) {
      // Clear the cart after successful payment
      clearCart()
      setOrderConfirmed(true)
    }
  }, [sessionId, clearCart, orderConfirmed])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Commande Confirmée !</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Merci pour votre achat. Votre commande a été traitée avec succès.
        </p>

        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Que se passe-t-il ensuite ?</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✉️ Vous recevrez un email de confirmation</li>
            <li>📦 Votre commande sera préparée sous 24h</li>
            <li>🚚 Livraison estimée : 3-5 jours ouvrés</li>
            <li>📧 Vous recevrez un email avec le numéro de suivi</li>
          </ul>
        </div>

        {sessionId && (
          <div className="bg-gray-100 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-600">
              ID de session : <span className="font-mono text-xs">{sessionId}</span>
            </p>
          </div>
        )}

        <div className="space-x-4">
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Continuer mes achats
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
