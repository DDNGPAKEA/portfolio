import React, { useState } from 'react'
import { 
  Wrench, 
  Package, 
  Camera, 
  FileSignature, 
  Smartphone, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowUpRight,
  Database,
  Code2,
  Cpu
} from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [photoError, setPhotoError] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dadangsubiantoro36@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-900">
      
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
              DS
            </span>
            <span className="font-bold text-slate-900 tracking-tight text-base">
              Dadang Subiantoro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#tentang" className="hover:text-brand-600 transition-colors">Tentang</a>
            <a href="#proyek" className="hover:text-brand-600 transition-colors">Proyek</a>
            <a href="#inventaris" className="hover:text-brand-600 transition-colors">Modul</a>
            <a href="#keahlian" className="hover:text-brand-600 transition-colors">Keahlian</a>
            <a href="#pengalaman" className="hover:text-brand-600 transition-colors">Pengalaman</a>
            <a href="#kontak" className="hover:text-brand-600 transition-colors">Kontak</a>
          </nav>

          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/6282172608920?text=Halo%20Dadang,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi...  "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Tentang</a>
            <a href="#proyek" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Proyek</a>
            <a href="#inventaris" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Modul</a>
            <a href="#keahlian" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Keahlian</a>
            <a href="#pengalaman" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Pengalaman</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-slate-600 hover:text-brand-600">Kontak</a>
            <div className="pt-2">
              <a
                href="https://wa.me/6282172608920"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block py-2 rounded-lg bg-brand-600 text-white text-xs font-semibold"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ================= HERO ================= */}
        <section id="hero" className="py-16 sm:py-24 border-b border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                Full-Stack Web Developer
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Membangun Aplikasi Web Operasional yang Bersih & Praktis.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Halo, saya <span className="font-semibold text-slate-900">Dadang Subiantoro</span>. Saya mengembangkan sistem informasi operasional untuk kebutuhan industri dan perkebunan — mencakup manajemen inventaris alat, pelacakan mutasi barang, serta alur kerja digital menggunakan <span className="text-brand-600 font-semibold">Laravel, React, Tailwind CSS, dan PWA</span>.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#proyek"
                  className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  Lihat Proyek Utama
                </a>
                <a
                  href="https://wa.me/6282172608920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors"
                >
                  WhatsApp: 0821-7260-8920
                </a>
              </div>
            </div>

            {/* Right: Formal Photo Frame */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="w-64 sm:w-72">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200">
                    
                    {!photoError ? (
                      <img
                        src="/assets/profile.jpg"
                        alt="Foto Formal Dadang Subiantoro"
                        className="w-full h-full object-cover object-top"
                        onError={() => setPhotoError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                          <span className="font-bold text-lg">DS</span>
                        </div>
                        <p className="font-bold text-slate-800 text-sm">Foto Formal Anda</p>
                        <p className="text-xs text-brand-600 font-mono mt-1">public/assets/profile.jpg</p>
                        <p className="text-[11px] text-slate-500 mt-2">
                          Letakkan file foto Anda di folder <br />
                          <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700">portfolio/public/assets/profile.jpg</span>
                        </p>
                      </div>
                    )}

                  </div>

                  <div className="pt-3 pb-1 text-center">
                    <h3 className="font-bold text-slate-900 text-sm">Dadang Subiantoro</h3>
                    <p className="text-xs text-slate-500">Binjai, Sumatera Utara</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= TENTANG ================= */}
        <section id="tentang" className="py-14 border-b border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">Tentang Saya</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Pengalaman Teknis & Praktik Lapangan</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saya berlatar belakang pendidikan Rekayasa Perangkat Lunak (SMKN 1 Binjai, 2024). Di lingkungan kerja, saya memegang tanggung jawab teknis dalam digitalisasi operasional: merancang arsitektur database, membangun antarmuka web yang mudah digunakan oleh staf non-teknis, serta memastikan pencatatan barang berlangsung akurat.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Pendekatan saya sederhana: <strong>sistem harus menyelesaikan masalah nyata tanpa memperumit pengguna di lapangan</strong>. Karena itu, aplikasi yang saya kembangkan berfokus pada kecepatan akses, kemudahan input dari ponsel, dan validasi data yang ketat.
            </p>
          </div>
        </section>

        {/* ================= PROYEK UTAMA ================= */}
        <section id="proyek" className="py-16 border-b border-slate-100">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Proyek Unggulan</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              WMS (Warehouse Management System)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Aplikasi web terintegrasi untuk mendigitalkan seluruh pergerakan barang, peminjaman alat kerja, dan pelaporan operasional perkebunan secara terpusat.
            </p>
          </div>

          {/* Preview Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>Preview Sistem Antarmuka</span>
                    <span className="font-mono text-brand-600 font-semibold">wms-gudangg2.up.railway.app</span>
                  </div>
                  <img
                    src="/assets/wms-preview.png"
                    alt="Preview WMS Gudang G2"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-brand-100 text-brand-800">
                  Full-Stack • Production Ready
                </span>
                <h3 className="text-xl font-bold text-slate-900">Peran & Tanggung Jawab</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Merancang dan membangun sistem dari awal (solo developer) untuk menggantikan pencatatan berbasis kertas. Berhasil menyederhanakan alur kerja tim gudang dan lapangan.
                </p>

                <div className="pt-2">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Teknologi Utama:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['PHP 8.4', 'Laravel 13', 'React', 'PostgreSQL', 'Tailwind CSS', 'Alpine.js', 'PWA', 'WebAuthn'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded bg-white border border-slate-200 text-slate-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2 PILAR: INVENTARIS ALAT & MATERIAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="inventaris">
            
            {/* Pilar 1: INVENTARIS ALAT */}
            <div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm hover:border-brand-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4">
                <Wrench size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Sistem Inventaris Alat & Perlengkapan</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Modul khusus untuk mengontrol peredaran alat kerja sipil, perlengkapan acara kantor, dan peralatan operasional:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Peminjaman & Pengembalian:</strong> Pencatatan siapa peminjam, tanggal jatuh tempo, dan riwayat pemakaian alat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Inspeksi Kondisi Fisik:</strong> Pencatatan berkala status fisik barang (Kondisi Baik, Rusak Ringan, Rusak Berat).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Pencarian Visual Kamera (AI Vision):</strong> Identifikasi nama dan tipe alat secara cepat cukup dengan memotret barang dari ponsel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Tanda Tangan Digital:</strong> Bukti serah terima alat langsung di layar smartphone menggunakan tanda tangan canvas touch.</span>
                </li>
              </ul>
            </div>

            {/* Pilar 2: MATERIAL & MUTASI */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold mb-4">
                <Package size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Manajemen Stok & Material Fisik</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Pengendalian arus barang masuk dan keluar untuk material perkebunan (pupuk, karung, palet):
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Alokasi Batch FIFO:</strong> Pengeluaran barang otomatis mengutamakan stok paling awal masuk untuk menjaga mutu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Pelacakan Palet:</strong> Pemantauan posisi dan kapasitas stok per palet secara transparan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Penerimaan Karung (PKP):</strong> Rekonsiliasi pengembalian karung bekas pakai dari blok kerja mandor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold shrink-0">•</span>
                  <span><strong>Akses Lapangan (PWA):</strong> Sistem tetap dapat diakses di area kebun yang minim sinyal internet.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ================= KEAHLIAN TEKNIS ================= */}
        <section id="keahlian" className="py-14 border-b border-slate-100">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Keahlian</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Tools & Teknologi Utama</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-brand-700 font-bold text-sm">
                <Database size={16} />
                <span>Backend & Database</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">PHP 8.4 & Laravel</li>
                <li>PostgreSQL & MySQL</li>
                <li>SQLite (Testing/Lokal)</li>
                <li>RESTful API & Webhooks</li>
                <li>Logika FIFO & Ledger Mutasi</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-brand-700 font-bold text-sm">
                <Code2 size={16} />
                <span>Frontend & Mobile</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">React & Tailwind CSS</li>
                <li>Alpine.js & JavaScript</li>
                <li>PWA (Service Worker)</li>
                <li>WebAuthn (Login Sidik Jari)</li>
                <li>Blade Templates & Responsive UI</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-brand-700 font-bold text-sm">
                <Cpu size={16} />
                <span>Integrasi & DevOps</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">Docker & Linux Server</li>
                <li>Railway Cloud Deployment</li>
                <li>Git & GitHub</li>
                <li>Google Gemini Vision API</li>
                <li>Integrasi WhatsApp & Sheets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PENGALAMAN ================= */}
        <section id="pengalaman" className="py-14 border-b border-slate-100">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Riwayat</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Pengalaman & Pendidikan</h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-base">IT System Developer & Warehouse Specialist</h3>
                <p className="text-xs font-medium text-slate-600 mt-0.5">PT CIPTA FUTURA </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Membangun sistem informasi WMS & inventaris internal, menangani digitalisasi peminjaman alat dan mutasi barang harian secara terpadu.
                </p>
              </div>
              <span className="text-xs font-mono text-brand-700 font-semibold shrink-0 mt-2 sm:mt-0">Juni 2024 – Sekarang</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base">SMKN 1 Binjai</h3>
                <p className="text-xs font-medium text-slate-600 mt-0.5">Jurusan Rekayasa Perangkat Lunak (RPL)</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Mempelajari dasar pemrograman terstruktur, pengembangan web, basis data, dan algoritma.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 shrink-0 mt-2 sm:mt-0">Lulus 2024</span>
            </div>
          </div>
        </section>

        {/* ================= KONTAK ================= */}
        <section id="kontak" className="py-16">
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">Tertarik Berdiskusi atau Kerja Sama?</h2>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
              Silakan hubungi saya untuk kebutuhan pengembangan aplikasi web, sistem inventaris, atau peluang kerja.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <a
                href="https://wa.me/6282172608920?text=Halo%20Dadang,%20saya%20tertarik%20berdiskusi..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                WhatsApp: 0821-7260-8920
              </a>
              
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors inline-flex items-center justify-center gap-1.5"
              >
                {emailCopied ? (
                  <>
                    <Check size={16} className="text-brand-600" />
                    <span className="text-brand-600">Email Berhasil Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Salin Email (dadangsubiantoro36@gmail.com)</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-6 font-mono">
              Lokasi: Binjai, Sumatera Utara, Indonesia
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Dadang Subiantoro.</p>
      </footer>

    </div>
  )
}
