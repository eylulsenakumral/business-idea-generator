import Link from "next/link";

interface Idea {
  id: number;
  name: string;
  description: string;
  industry: string;
  budget: string;
  skillLevel: string;
  turkeyContext: string;
  first48Hours: string;
}

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  // Static data - in production this would come from JSON
  const idea: Idea = {
    id: parseInt(params.id),
    name: "Yapay Zeka Destekli ÖDEV Asistanı",
    description: "Türkçe öğrenci ödev ve projeleri için AI destekli rehber platformu. Lise ve üniversite öğrencilerine tez sunumu, proje özeti, araştırma raporu konusunda uzman destek sağlar.",
    industry: "EdTech",
    budget: "Düşük (50K-100K TL)",
    skillLevel: "Orta",
    turkeyContext: "Türkiye'de 18M+ öğrenci var ve ödev yardım piyasası büyümekte. Öğrencilerin %73'ü internette ödev yardımı arıyor. Ebeveynlerin eğitim harcamaları yıllık 15 milyar TL'yi aşiyor ve bu segmentte ödeme yapmaya istekliler.",
    first48Hours: "Fikir doğrulama: 5 öğrenci ile derinlemesine görüşme. Notion sayfası oluştur ve ilk 3 'tam örneği' hazırla. Instagram öğrenci hesaplarından 100 DM anketi yap."
  };

  // In production, would fetch all ideas and match by ID
  // For now, showing static idea as example

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/fikirler" className="text-purple-600 dark:text-purple-400 hover:underline">
            ← Fikirlere Dön
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 mb-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                {idea.industry}
              </span>
              <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full font-medium">
                {idea.skillLevel}
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
                {idea.budget}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {idea.name}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {idea.description}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Turkey Context */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                🇹🇷 Neden Türkiye Şimdi?
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6">
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {idea.turkeyContext}
                </p>
              </div>
            </div>

            {/* First 48 Hours */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                ⚡ İlk 48 Saat
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {idea.first48Hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Daha Fazla Fikir İstiyorsan
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Premium'a geçiş yap, 50+ doğrulanmış iş fikri, pazar analizi, rakip analizi ve
            detaylı uygulama rehberine eriş.
          </p>
          <Link
            href="/premium"
            className="inline-block px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-zinc-100 transition"
          >
            Premium'a Geç →
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
