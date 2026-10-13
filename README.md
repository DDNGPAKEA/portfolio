# 💼 Portofolio Dadang Subiantoro (React + Tailwind CSS)

Project portofolio web modern berbasis **React 18, Vite, Tailwind CSS, dan Lucide Icons**. Dibuat di luar folder project utama di `/home/dadang/portfolio`.

---

## 📸 Pasang Foto Formal Anda

Letakkan file foto formal Anda (format JPG/PNG/WEBP) di:
```text
/home/dadang/portfolio/public/assets/profile.jpg
```
*Catatan: Jika file belum diletakkan, sistem otomatis menampilkan placeholder inisial nama Anda.*

---

## 🚀 Cara Menjalankan di Komputer Lokal

1. Buka terminal dan masuk ke folder portofolio:
   ```bash
   cd /home/dadang/portfolio
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka browser di: **`http://localhost:3000`**

---

## 📦 Build untuk Production

Untuk menghasilkan file statis yang siap di-deploy ke Vercel, Netlify, atau GitHub Pages:
```bash
npm run build
```
Hasil build akan berada di folder `dist/`.

---

## 🌐 Deploy Cepat ke Vercel / GitHub Pages

### A. Deploy via Vercel (Paling Mudah)
1. Inisialisasi git di folder ini:
   ```bash
   cd /home/dadang/portfolio
   git init
   git add .
   git commit -m "feat: initial react portfolio"
   ```
2. Hubungkan ke GitHub repo baru Anda.
3. Import project tersebut di [Vercel](https://vercel.com) (Vercel otomatis mendeteksi framework Vite).
4. Klik **Deploy**!
