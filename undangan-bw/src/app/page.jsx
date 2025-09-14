"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import SectionTitle from "@/components/SectionTitle";
import { fadeUp, scaleIn, stagger } from "@/lib/motion";
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), { ssr:false });

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* COVER */}
      <section className="relative h-dvh section">
        <div className="absolute inset-0">
          <Image src="/cover.jpg" alt="Cover" fill priority className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
          <div className="absolute inset-x-0 -top-20 h-60 pointer-events-none"
               style={{background: "radial-gradient(600px 220px at 50% 0%, rgba(255,255,255,.08), rgba(255,255,255,0))"}}/>
        </div>

        <div className="relative z-10 h-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.div variants={stagger(.1, .1)} initial="hidden" animate="show" className="card px-8 py-10">
            <motion.div variants={fadeUp(0)}>
              <span className="tracking-[.35em] text-xs text-white/70 uppercase">Undangan Pernikahan</span>
            </motion.div>
            <motion.h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight" variants={fadeUp(.05)}>
              Intan <span className="text-white/50">&</span> Permana
            </motion.h1>
            <motion.p className="text-white/70 mt-4" variants={fadeUp(.1)}>
              Sabtu, 13 November 2025 • Jakarta
            </motion.p>
            <motion.a
              href="#acara"
              variants={scaleIn(.15)}
              className="inline-block mt-8 rounded-full border border-white/30 px-6 py-3 text-sm tracking-wide
                         hover:bg-white hover:text-black transition shadow-premium"
            >
              Buka Undangan
            </motion.a>
          </motion.div>
        </div>

        <MusicPlayer />
      </section>

      {/* PROFIL */}
      <section id="profil" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle overline="Perkenalan" title="Kedua Mempelai" subtitle="Dengan segala kerendahan hati, kami memohon doa restu." />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { img: "/couple-1.jpg", nama: "Intan", deskripsi: "Putri dari Bapak A & Ibu B" },
              { img: "/couple-2.jpg", nama: "Permana", deskripsi: "Putra dari Bapak C & Ibu D" },
            ].map((p, i) => (
              <AnimateIn key={i} variants={scaleIn(i * .05)} className="card overflow-hidden">
                <div className="relative w-full h-80">
                  <Image src={p.img} alt={p.nama} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{p.nama}</h3>
                  <p className="text-white/70 mt-2">{p.deskripsi}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ACARA */}
      <section id="acara" className="py-20 px-6 section">
        <div className="max-w-6xl mx-auto">
          <SectionTitle overline="Rangkaian" title="Akad & Resepsi" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <AnimateIn variants={fadeUp(.0)} className="card p-8">
              <h3 className="font-display text-2xl">Akad Nikah</h3>
              <p className="text-white/70 mt-2">Sabtu, 13 November 2025 • 08.00 WIB</p>
              <p className="text-white/70">Masjid Al-Ikhlas, Jakarta</p>
              <a className="inline-block mt-6 underline underline-offset-4 text-white/90 hover:text-white" href="https://maps.google.com" target="_blank">Lihat Peta</a>
            </AnimateIn>
            <AnimateIn variants={fadeUp(.05)} className="card p-8">
              <h3 className="font-display text-2xl">Resepsi</h3>
              <p className="text-white/70 mt-2">Sabtu, 13 November 2025 • 11.00–14.00 WIB</p>
              <p className="text-white/70">Gedung Serbaguna, Jakarta</p>
              <a className="inline-block mt-6 underline underline-offset-4 text-white/90 hover:text-white" href="https://maps.google.com" target="_blank">Lihat Peta</a>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-6">
        <div className="max-w-3xl mx-auto card p-8">
          <SectionTitle overline="Konfirmasi" title="RSVP & Ucapan" />
          <form
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const nama = data.get("nama") || "";
              const sesi = data.get("sesi") || "Resepsi";
              const jumlah = data.get("jumlah") || "1";
              const ucapan = data.get("ucapan") || "";
              const text = `Halo, saya *${nama}*.
Sesi: ${sesi}
Jumlah tamu: ${jumlah}
Ucapan: ${ucapan}`;
              const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
              window.open(url, "_blank");
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input name="nama" required placeholder="Nama lengkap" className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <input name="jumlah" type="number" min="1" defaultValue="1" className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <select name="sesi" className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30">
              <option>Akad</option>
              <option>Resepsi</option>
            </select>
            <textarea name="ucapan" rows={4} placeholder="Ucapan & doa" className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"></textarea>

            <div className="flex items-center justify-between gap-4 mt-2">
              <button className="rounded-xl border border-white/25 px-5 py-3 hover:bg-white hover:text-black transition">
                Kirim via WhatsApp
              </button>
              <a href="#cover" className="text-white/70 hover:text-white underline underline-offset-4">
                Kembali ke atas
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-white/60">
        Undangan by <a href="https://instagram.com/username" target="_blank" className="hover:text-white underline underline-offset-4">@username</a>
      </footer>
    </main>
  );
}
