import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            💡 İş Fikirleri
          </h1>
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Türkiye İçin İş Fikirleri
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Doğrulanmış, Türk pazarına özgü iş fikirleri. Gerçekçi, uygulanabilir,
            para kazandırıyor. Şimdi başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fikirler"
              className="px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-semibold hover:opacity-90 transition text-lg"
            >
              Fikirleri Keşfet →
            </Link>
            <Link
              href="/premium"
              className="px-8 py-4 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-full font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-lg"
            >
              Premium'a Geç
            </Link>
          </div>
        </div>

        {/* Featured Ideas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            Öne Çıkan Fikirler
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              id={1}
              title="Yapay Zeka Destekli ÖDEV Asistanı"
              description="Türkçe öğrenci ödev ve projeleri için AI destekli rehber platformu."
              industry="EdTech"
              budget="Düşük (50K-100K TL)"
            />
            <FeaturedCard
              id={2}
              title="Kurumsal Ekip Yemekleri Platformu"
              description="İstanbul ve Ankaradaki ofislere yönelik günlük taze yemek catering."
              industry="FoodTech"
              budget="Orta (100K-300K TL)"
            />
            <FeaturedCard
              id={3}
              title="SaaS: Türkçe SMM Planlayıcı"
              description="Küçük işletmeler için Instagram/TikTok gönderi planlama aracı."
              industry="SaaS"
              budget="Düşük (30K-80K TL)"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <StatCard number="20+" label="Doğrulanmış Fikir" />
          <StatCard number="10+" label="Farklı Sektör" />
          <StatCard number="100%" label="Türk Pazarına Özgü" />
        </div>

        {/* Why Section */}
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Neden Bugün Başlamalısın?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Feature
              icon="🎯"
              title="Gerçekçi Fikirler"
              description="Tüm fikirler Türk pazarında doğrulanmış, gerçekçi gelir potansiyeli ile."
            />
            <Feature
              icon="⚡"
              title="48 Saat Başlangıç"
              description="Her fikir için ilk 48 saatde yapılacaklar net olarak tanımlanmış."
            />
            <Feature
              icon="🇹🇷"
              title="Türkiye Context"
              description="Her fikir 'Neden Türkiye Şimdi?' analizi ile pazar fırsatları açıklanmış."
            />
            <Feature
              icon="💰"
              title="Bütçe Bilgisi"
              description="Her fikir için gerçekçi başlangıç bütçesi tahmini verilmiş."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2024 İş Fikirleri. Türkiye girişimcileri için yapıldı.</p>
          <p className="mt-2">
            <Link href="/premium" className="text-purple-600 dark:text-purple-400 hover:underline">
              Premium'a geç →
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeaturedCard({ id, title, description, industry, budget }: {
  id: number;
  title: string;
  description: string;
  industry: string;
  budget: string;
}) {
  return (
    <Link href={`/fikir/${id}`}>
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-lg transition cursor-pointer h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            {industry}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {budget}
          </span>
        </div>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          {title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 text-purple-600 dark:text-purple-400 text-sm font-medium">
          Detaylar →
        </div>
      </div>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
        {number}
      </div>
      <div className="text-zinc-600 dark:text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
          {title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}
