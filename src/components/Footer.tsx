"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="iletisim" className="relative">
            {/* Wave Top */}
            <div className="bg-safari-cream">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-16 sm:h-24"
                >
                    <path
                        d="M0 60 Q360 0 720 80 Q1080 120 1440 40 L1440 120 L0 120 Z"
                        fill="#6B4F3A"
                    />
                </svg>
            </div>

            <div className="bg-safari-brown text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/logo.png"
                                    alt="Joey Organizasyon"
                                    className="h-14 w-auto object-contain brightness-0 invert"
                                />
                            </div>
                            <p
                                className="text-safari-beige/80 leading-relaxed text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                🥇🏆 Türkiye&apos;nin En Eğlenceli Çocuk Organizasyonu 🏆🥇
                                Doğum günü, düğün, sünnet, okul etkinliği ve kurumsal etkinlikler.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-4 mt-6">
                                {[
                                    {
                                        label: "Instagram",
                                        path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
                                    },
                                    {
                                        label: "Facebook",
                                        path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                                    },
                                    {
                                        label: "TikTok",
                                        path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89 2.85 2.85 0 01.89.14v-3.5a6.36 6.36 0 00-.89-.06A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.48 6.29 6.29 0 001.82-4.48V8.77a8.24 8.24 0 004.76 1.51V6.83a4.85 4.85 0 01-1-.14z",
                                    },
                                ].map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.label === "Instagram" ? "https://www.instagram.com/joeyorganizasyon/" : "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safari-orange transition-colors"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.label}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d={social.path} />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4
                                className="text-lg font-bold mb-6 text-safari-orange"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Hızlı Bağlantılar
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { href: "#hero", label: "Ana Sayfa" },
                                    { href: "#hizmetler", label: "Hizmetlerimiz" },
                                    { href: "#galeri", label: "Galeri" },
                                    { href: "#paketler", label: "Paketler" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <motion.a
                                            href={link.href}
                                            className="text-safari-beige/80 hover:text-safari-orange transition-colors text-sm flex items-center gap-2"
                                            style={{ fontFamily: "var(--font-body)" }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-safari-orange">→</span>
                                            {link.label}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4
                                className="text-lg font-bold mb-6 text-safari-orange"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                İletişim
                            </h4>
                            <div className="space-y-4">
                                <a
                                    href="tel:+905441469158"
                                    className="flex items-center gap-3 text-safari-beige/80 hover:text-safari-orange transition-colors text-sm"
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    <span className="text-xl">📞</span>
                                    +90 544 146 91 58
                                </a>
                                <a
                                    href="mailto:info@joeyorganizasyon.com"
                                    className="flex items-center gap-3 text-safari-beige/80 hover:text-safari-orange transition-colors text-sm"
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    <span className="text-xl">📧</span>
                                    info@joeyorganizasyon.com
                                </a>
                                <div
                                    className="flex items-center gap-3 text-safari-beige/80 text-sm"
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    <span className="text-xl">📍</span>
                                    İstanbul, Türkiye
                                </div>

                                {/* WhatsApp CTA */}
                                <motion.a
                                    href="https://wa.me/905441469158"
                                    target="_blank"
                                    className="whatsapp-btn mt-4 text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp ile Ulaş
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p
                            className="text-safari-beige/60 text-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            © 2026 Joey Organizasyon. Tüm hakları saklıdır.
                        </p>
                        <div className="flex flex-col sm:items-end gap-1 text-center sm:text-right">
                            <p
                                className="text-safari-beige/60 text-sm flex items-center justify-center sm:justify-end gap-1"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Sevgiyle yapıldı <span className="text-red-400">❤️</span>
                            </p>
                            <a
                                href="https://www.emirhanerturk.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-safari-beige/40 text-xs hover:text-safari-orange transition-colors"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Emirhan Ertürk tarafından yapıldı
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
