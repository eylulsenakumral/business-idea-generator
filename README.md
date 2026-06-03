# İş Fikirleri - AI Business Idea Generator

Türk pazarına özgü, doğrulanmış iş fikirleri platformu. Türkiye girişimcileri için hazırlandı.

## 🚀 Özellikler

- **20 Doğrulanmış İş Fikri** - Her biri Türk pazarı için analiz edilmiş
- **Filtreleme Sistemi** - Sektör, bütçe ve tecrübe seviyesine göre filtrele
- **Detaylı Analiz** - Her fikir için "Neden Türkiye Şimdi?" ve "İlk 48 Saat" planı
- **Premium Tier** - Ücretsiz ve premium katmanlar
- **Dark Mode** - Karanlık mod desteği
- **Mobile Responsive** - Mobil uyumlu tasarım
- **SEO Optimized** - Türkçe keywords ve meta tags

## 📊 Teknik Stack

- **Next.js 15** - App Router ile
- **TypeScript** - Type-safe kod
- **Tailwind CSS** - Utility-first styling
- **Static Site** - Hızlı yüklenme, veritabanı yok
- **Vercel Deployment** - Zero-config deploy

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini tarayıcıda aç.

## 📁 Proje Yapısı

```
business-idea-generator/
├── app/
│   ├── fikir/[id]/     # Individual idea pages
│   ├── fikirler/        # Ideas listing page
│   ├── premium/         # Premium pricing page
│   └── page.tsx         # Homepage
├── data/
│   └── ideas.json       # Static ideas database
└── public/              # Static assets
```

## 🎯 Hedef Kitle

- Türk teknik girişimciler (22-35 yaş)
- İş fikirleri arayan founders
- Yan projeler peşinde olanlar
- Startup ekosistemi

## 💡 Fikir Verisi

Fikirler `data/ideas.json` dosyasında saklanır. Yeni fikir eklemek için bu dosyayı düzenleyin.

Her fikir şunları içerir:
- `id` - Unique identifier
- `name` - Fikir adı
- `description` - Kısa açıklama
- `industry` - Sektör
- `budget` - Başlangıç bütçesi
- `skillLevel` - Gerekli tecrübe
- `turkeyContext` - Neden Türkiye'de çalıştığı
- `first48Hours` - İlk 48 saat planı

## 🚢 Deploy

### Vercel (Önerilen)

1. Bu repo'yu fork edin
2. [Vercel](https://vercel.com) hesabınızla giriş yapın
3. "Import Project" ile repo'yunuzu ekleyin
4. Framework: "Next.js" olarak seçin
5. Deploy edin

### Alternatifler

- **Netlify** - Next.js destekli
- **Railway** - Docker container
- **Render** - Static site olarak

## 📈 Gelecek Özellikler

- [ ] Premium tier activation (payment integration)
- [ ] User authentication
- [ ] Idea bookmarking
- [ ] Advanced filters (revenue potential, timeline)
- [ ] Idea comparison tool
- [ ] Export to PDF
- [ ] API endpoint
- [ ] Newsletter subscription

## 🎨 Tasarım

- **Renk Paleti**: Zinc (neutral) + Purple/Pink gradient (CTAs)
- **Tipografi**: Geist Sans/Mono (Next.js default)
- **Spacing**: Tailwind default scale
- **Border Radius**: Smooth rounded corners

## 📝 Lisans

MIT License - Free to use, modify, and distribute.

## 🤝 Katkıda Bulunma

1. Repo'yu fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📧 İletişim

Sorular ve öneriler için Issues açabilirsiniz.

---

**Made with ❤️ for Turkish entrepreneurs**
