"use client";

import { useState } from "react";
import Link from "next/link";

interface Idea {
  id: number;
  name: string;
  description: string;
  industry: string;
  budget: string;
  skillLevel: string;
}

export default function IdeasPage() {
  const [filterIndustry, setFilterIndustry] = useState("Tümü");
  const [filterBudget, setFilterBudget] = useState("Tümü");
  const [filterSkill, setFilterSkill] = useState("Tümü");

  // Static data - will be replaced with dynamic import
  const ideas: Idea[] = [
    {
      id: 1,
      name: "Yapay Zeka Destekli ÖDEV Asistanı",
      description: "Türkçe öğrenci ödev ve projeleri için AI destekli rehber platformu.",
      industry: "EdTech",
      budget: "Düşük (50K-100K TL)",
      skillLevel: "Orta"
    },
    {
      id: 2,
      name: "Kurumsal Ekip Yemekleri Platformu",
      description: "İstanbul ve Ankaradaki ofislere yönelik günlük taze yemek catering.",
      industry: "FoodTech",
      budget: "Orta (100K-300K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 3,
      name: "SaaS: Türkçe SMM Planlayıcı",
      description: "Küçük işletmeler için Instagram/TikTok gönderi planlama aracı.",
      industry: "SaaS",
      budget: "Düşük (30K-80K TL)",
      skillLevel: "Orta"
    },
    {
      id: 4,
      name: "İkinci El EV Satış Platformu",
      description: "Türkiye'deki kullanılmış elektrikli araçları için marketplace.",
      industry: "Marketplace",
      budget: "Yüksek (300K-1M TL)",
      skillLevel: "Orta"
    },
    {
      id: 5,
      name: "Kooperatif Lojistik Platformu",
      description: "E-ticaret küçük işletmeler için yük birleştirme servisi.",
      industry: "Logistics",
      budget: "Orta (150K-400K TL)",
      skillLevel: "Yüksek"
    },
    {
      id: 6,
      name: "Uygun Sigorta Karşılaştırma",
      description: "Trafik sigortası, kasko için AI destekli karşılaştırma platformu.",
      industry: "InsurTech",
      budget: "Orta (200K-500K TL)",
      skillLevel: "Orta"
    },
    {
      id: 7,
      name: "SaaS: TCMB Veri Analitiği",
      description: "Finansal analistler için TCMB verileri dashboard.",
      industry: "FinTech",
      budget: "Düşük (50K-120K TL)",
      skillLevel: "Orta"
    },
    {
      id: 8,
      name: "Esnek Ebeveyn İş Platformu",
      description: "Küçük çocuklu ebeveynler için esnek iş ilanları.",
      industry: "HR Tech",
      budget: "Düşük (30K-100K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 9,
      name: "B2B: Yazılım Test Hizmeti",
      description: "Startuplar için QA test outsourcing.",
      industry: "Tech Services",
      budget: "Düşük (20K-80K TL)",
      skillLevel: "Orta"
    },
    {
      id: 10,
      name: "Yerel Tur Rehberi Marketplace",
      description: "Turistler için yerel rehber eşleştirme platformu.",
      industry: "Travel",
      budget: "Düşük (40K-150K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 11,
      name: "SaaS: Müşteri Memnuniyet Takip",
      description: "KOBİ'ler için CSAT/NPS anket aracı.",
      industry: "SaaS",
      budget: "Düşük (40K-100K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 12,
      name: "Özel Ders Platformu (Yetişkin)",
      description: "Yetişkinler için beceri odaklı özel ders platformu.",
      industry: "EdTech",
      budget: "Düşük (30K-90K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 13,
      name: "SaaS: E-fatura Otomasyonu",
      description: "Küçük işletmeler için GIB entegrasyonlu e-fatura.",
      industry: "SaaS",
      budget: "Orta (100K-300K TL)",
      skillLevel: "Orta"
    },
    {
      id: 14,
      name: "Sürdürülebilir Marketplace",
      description: "Eko, fair, vegan markalar için marketplace.",
      industry: "E-commerce",
      budget: "Orta (150K-400K TL)",
      skillLevel: "Orta"
    },
    {
      id: 15,
      name: "B2B: Sosyal Medya İçerik Stüdyosu",
      description: "KOBİ'ler için aylık içerik paketi üretimi.",
      industry: "Creative Services",
      budget: "Düşük (50K-150K TL)",
      skillLevel: "Orta"
    },
    {
      id: 16,
      name: "Kiralık Ekipman Platformu",
      description: "Yerel ekipman kiralama marketplace.",
      industry: "Marketplace",
      budget: "Orta (120K-350K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 17,
      name: "SaaS: Personel Takip Sistemi",
      description: "Küçük şirketler için personel takip aracı.",
      industry: "SaaS",
      budget: "Düşük (40K-120K TL)",
      skillLevel: "Orta"
    },
    {
      id: 18,
      name: "SaaS: WhatsApp CRM",
      description: "KOBİ'ler için WhatsApp tabanlı CRM.",
      industry: "SaaS",
      budget: "Düşük (50K-130K TL)",
      skillLevel: "Orta"
    },
    {
      id: 19,
      name: "Kırsal Turizm Rehberi",
      description: "Kırsal bölgeler için konaklama ve deneyim platformu.",
      industry: "Travel",
      budget: "Düşük (40K-100K TL)",
      skillLevel: "Başlangıç"
    },
    {
      id: 20,
      name: "SaaS: E-ticaret Kargo Entegrasyonu",
      description: "Küçük e-ticaretçiler için kargo entegrasyon dashboard.",
      industry: "SaaS",
      budget: "Düşük (60K-180K TL)",
      skillLevel: "Orta"
    }
  ];

  const industries = ["Tümü", ...Array.from(new Set(ideas.map(i => i.industry)))];
  const budgets = ["Tümü", "Düşük", "Orta", "Yüksek"];
  const skills = ["Tümü", "Başlangıç", "Orta", "Yüksek"];

  const filteredIdeas = ideas.filter(idea => {
    const matchIndustry = filterIndustry === "Tümü" || idea.industry === filterIndustry;
    const matchBudget = filterBudget === "Tümü" || idea.budget.includes(filterBudget);
    const matchSkill = filterSkill === "Tümü" || idea.skillLevel === filterSkill;
    return matchIndustry && matchBudget && matchSkill;
  });

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
            <Link href="/fikirler" className="text-zinc-900 dark:text-zinc-50 font-medium">
              Fikirler
            </Link>
            <Link href="/premium" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition">
              Premium
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            İş Fikirleri
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {filteredIdeas.length} fikir bulundu
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-200 dark:border-zinc-800">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Sektör
              </label>
              <select
                value={filterIndustry}
                onChange={(e) => setFilterIndustry(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
              >
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Bütçe
              </label>
              <select
                value={filterBudget}
                onChange={(e) => setFilterBudget(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
              >
                {budgets.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Tecrübe Seviyesi
              </label>
              <select
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
              >
                {skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map(idea => (
            <Link key={idea.id} href={`/fikir/${idea.id}`}>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-lg transition cursor-pointer h-full">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {idea.industry}
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                    {idea.skillLevel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {idea.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                  {idea.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    💰 {idea.budget}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                    Detay →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              Filtre kriterlerine uygun fikir bulunamadı.
            </p>
          </div>
        )}
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
