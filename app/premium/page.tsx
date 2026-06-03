import Link from "next/link";

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              💡 İş Fikirleri
            </h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition">
              Ana Sayfa
            </Link>
            <Link href="/fikirler" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition">
              Fikirler
            </Link>
            <Link href="/premium" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition">
              Premium
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Çok Yakında
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            İş Fikirleri Premium
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            50+ doğrulanmış iş fikri, detaylı pazar analizi, rakip analizi ve
            adım adım uygulama rehberi. Türkiye girişimcileri için.
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Free */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                Ücretsiz
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Başlamak için yeterli
              </p>
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                0 ₺
                <span className="text-lg font-normal text-zinc-500">/ay</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">20 iş fikri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">Fikir filtreleme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">Türkiye context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">48 saat başlangıç planı</span>
                </li>
              </ul>
              <Link
                href="/fikirler"
                className="block w-full text-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-full font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Ücretsiz Başla
              </Link>
            </div>

            {/* Premium */}
            <div className="border-2 border-purple-500 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  En Popüler
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                Premium
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Ciddi girişimciler için
              </p>
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                199 ₺
                <span className="text-lg font-normal text-zinc-500">/ay</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">50+ iş fikri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">Pazar boyutu analizi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">Rakip analizi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">30-60-90 gün planı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">ROI hesaplaması</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">Yeni fikirler öncelikli</span>
                </li>
              </ul>
              <button
                disabled
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                Çok Yakında
              </button>
            </div>
          </div>

          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
            Herhangi bir zaman iptal edebilirsiniz. Kredi kartı gerekli.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
            Premium Fikirlerde Neler Var?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="📊"
              title="Pazar Analizi"
              description="TAM, SAM, SOM hesaplaması, büyüme tahminleri ve trend analizi."
            />
            <FeatureCard
              icon="🎯"
              title="Rakip Analizi"
              description="Mevcut çözümler, boşluklar ve farklılaşma fırsatları."
            />
            <FeatureCard
              icon="📈"
              title="ROI Hesabı"
              description="Gerçekçi gelir modelleri, maliyet projeksiyonları ve kırılım noktaları."
            />
            <FeatureCard
              icon="🗓️"
              title="90 Gün Planı"
              description="30-60-90 gün kilometre taşları ve öncelikli aksiyonlar."
            />
            <FeatureCard
              icon="⚠️"
              title="Risk Analizi"
              description="Olası tuzaklar, düzenleyici riskler ve azaltma stratejileri."
            />
            <FeatureCard
              icon="🚀"
              title="Lansman Stratejisi"
              description="İlk müşteri bulma, büyüme taktikleri ve ölçekleme yolu."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Hazır mısın?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Ücretsiz planla başla, fikirleri keşfet. Hazır olduğunda Premium'a geçiş yap
            ve detaylı analizlere eriş.
          </p>
          <Link
            href="/fikirler"
            className="inline-block px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold hover:opacity-90 transition"
          >
            Ücretsiz Başla →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2024 İş Fikirleri. Türkiye girişimcileri için yapıldı.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {description}
      </p>
    </div>
  );
}
