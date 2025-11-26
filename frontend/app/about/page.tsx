export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">À Propos de Nous</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Bienvenue sur notre boutique en ligne, votre destination pour des produits de qualité à des prix compétitifs.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-gray-700">
              Nous nous engageons à fournir à nos clients une expérience d'achat exceptionnelle avec une sélection 
              soigneusement choisie de produits de haute qualité. Notre objectif est de rendre le shopping en ligne 
              simple, sûr et agréable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nos Valeurs</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Qualité garantie sur tous nos produits</li>
              <li>Service client réactif et à l'écoute</li>
              <li>Livraison rapide et sécurisée</li>
              <li>Prix compétitifs et transparents</li>
              <li>Satisfaction client au cœur de nos priorités</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi Nous Choisir ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Large Sélection</h3>
                <p className="text-gray-600">
                  Des milliers de produits dans diverses catégories pour répondre à tous vos besoins.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Paiement Sécurisé</h3>
                <p className="text-gray-600">
                  Transactions 100% sécurisées avec Stripe, leader mondial du paiement en ligne.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Livraison Rapide</h3>
                <p className="text-gray-600">
                  Livraison gratuite dès 50€ d'achat et expédition sous 24-48h.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Support Client</h3>
                <p className="text-gray-600">
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
