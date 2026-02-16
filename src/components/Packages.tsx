"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Package {
    name: string;
    emoji: string;
    color: string;
    bgGradient: string;
    isPopular: boolean;
    features: string[];
    info: string[];
    programFlow: string[];
}

const packages: Package[] = [
    {
        name: "Neşe Şenliği Paketi",
        emoji: "🎈",
        color: "#A2D2FF",
        bgGradient: "linear-gradient(135deg, #EAF3FF 0%, #C0E2FF 100%)",
        isPopular: false,
        features: [
            "Animatör",
            "Ses ve Müzik Sistemi",
            "Kar Makinesi",
            "Uzaya Roket",
            "Balon Patlatma",
            "Köstebek Oyunu",
            "Delikten Geçir",
            "Kuklacı",
            "Mini Survivor",
            "Bubble Show",
            "Balon Nerede?",
            "İnteraktif Oyunlar",
        ],
        info: [
            "5-8 Yaş grubu için uygundur",
            "15 Çocuğa kadar sınırlıdır",
            "Ekstra için 2. Animatör gereklidir",
            "Animasyon süresi 2 saattir",
            "Oyunların hepsi çocuklar için güvenlidir",
            "İnteraktif Oyunları partinize ekleyebilirsiniz",
        ],
        programFlow: [
            "Tanışma ve Oyun Tanıtımı — 3dk",
            "Kar Fırtınası — 10dk",
            "Hayvan Kurtarma — 8dk",
            "Köstebek Oyunu — 15dk",
            "Su Molası — 3dk",
            "Delikten Geçir — 8dk",
            "Balon Patlatma — 8dk",
            "Pasta Kesimi, Fotoğraf Çekimi — 15dk",
            "Kuklacı — 6dk",
            "Roket Oyunu — 10dk",
            "Mini Survivor — 15dk",
            "Su Molası — 3dk",
            "Bubble Show — 15dk",
        ],
    },
    {
        name: "Mega Eğlence Paketi",
        emoji: "🎪",
        color: "#F4A259",
        bgGradient: "linear-gradient(135deg, #FFF3E4 0%, #F7BC85 100%)",
        isPopular: true,
        features: [
            "2 Animatör",
            "Neşe Şenliği Paketi",
            "Gerçek Survivor",
            "Şövalye Savaşı",
            "Çarkıfelek",
            "Ok/Yay Atış Talimi",
            "Sihirli Labirent",
            "Köstebek",
            "Balon Patlatma",
            "Kar Makinesi",
            "Bubble Show",
            "İnteraktif Oyunlar",
        ],
        info: [
            "5-12 Yaş grubu için uygundur",
            "30 Çocuğa kadar sınırlıdır",
            "Animasyon süresi 2 saattir",
            "Oyunların hepsi çocuklar için güvenlidir",
            "İnteraktif Oyunları partinize ekleyebilirsiniz",
        ],
        programFlow: [
            "Tanışma ve Oyun Tanıtımı — 3dk",
            "Kar Fırtınası — 10dk",
            "Köstebek Oyunu — 10dk",
            "Ok/Yay Atış Talimi — 10dk",
            "Su Molası — 3dk",
            "Çarkıfelek (Hediye Dağıtımı) — 10dk",
            "Balon Patlatma — 5dk",
            "Pasta Kesimi, Fotoğraf Çekimi — 15dk",
            "Şövalye Savaşı — 15dk",
            "Sihirli Labirent — 8dk",
            "Mega Survivor — 15dk",
            "Su Molası — 3dk",
            "Bubble Show — 15dk",
        ],
    },
    {
        name: "Çocuk Festivali Paketi",
        emoji: "🏆",
        color: "#8CB369",
        bgGradient: "linear-gradient(135deg, #EFF5E8 0%, #A8CC8C 100%)",
        isPopular: false,
        features: [
            "3 Animatör",
            "Neşe Şenliği Paketi",
            "Gerçek Survivor",
            "Şövalye Savaşı",
            "Çarkıfelek",
            "Ok/Yay Atış Talimi",
            "Pamuk Şeker Arabası",
            "Sihirli Labirent",
            "Köstebek",
            "Balon Patlatma",
            "Kar Makinesi",
            "Bubble Show",
            "İnteraktif Oyunlar",
            "Bubble House",
        ],
        info: [
            "5-13 Yaş grubu için uygundur",
            "30 Çocuğa kadar sınırlıdır",
            "Animasyon süresi 2 saattir",
            "Oyunların hepsi çocuklar için güvenlidir",
            "İnteraktif Oyunları partinize ekleyebilirsiniz",
        ],
        programFlow: [
            "Tanışma ve Oyun Tanıtımı — 3dk",
            "Kar Fırtınası — 10dk",
            "Köstebek Oyunu — 10dk",
            "Ok/Yay Atış Talimi — 10dk",
            "Su Molası — 3dk",
            "Çarkıfelek (Hediye Dağıtımı) — 10dk",
            "Balon Patlatma — 5dk",
            "Pasta Kesimi, Fotoğraf Çekimi — 15dk",
            "Şövalye Savaşı — 15dk",
            "Sihirli Labirent — 8dk",
            "Mega Survivor — 15dk",
            "Su Molası — 3dk",
            "Bubble Show — 15dk",
            "Sınırsız Pamuk Şeker Dağıtımı",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

function PackageCard({ pkg }: { pkg: Package }) {
    const [showProgram, setShowProgram] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            className={`relative rounded-3xl overflow-hidden ${pkg.isPopular ? "lg:-mt-4 lg:mb-4 shadow-2xl" : "shadow-xl"
                }`}
            style={{ background: pkg.bgGradient }}
            whileHover={{
                y: -8,
                boxShadow: `0 20px 60px ${pkg.color}44`,
            }}
            transition={{ type: "spring", stiffness: 200 }}
        >
            {/* Popular Badge */}
            {pkg.isPopular && (
                <motion.div
                    className="absolute top-0 right-0 bg-safari-orange text-white px-6 py-2 rounded-bl-2xl font-bold text-sm z-10"
                    style={{ fontFamily: "var(--font-heading)" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ⭐ En Popüler
                </motion.div>
            )}

            <div className="p-8 sm:p-10">
                {/* Emoji & Title */}
                <div className="text-center mb-6">
                    <motion.span
                        className="text-5xl block mb-3"
                        animate={{
                            y: [-5, 5, -5],
                            rotate: [-5, 5, -5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                    >
                        {pkg.emoji}
                    </motion.span>
                    <h3
                        className="text-xl sm:text-2xl font-bold text-safari-brown"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {pkg.name}
                    </h3>
                </div>

                {/* Divider */}
                <div
                    className="w-16 h-1 rounded-full mx-auto mb-6"
                    style={{ backgroundColor: pkg.color }}
                />

                {/* Features */}
                <div className="mb-6">
                    <h4
                        className="text-sm font-bold text-safari-brown mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        🎁 Paket İçeriği
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {pkg.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-start gap-1.5 text-safari-brown text-xs"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                <span className="mt-0.5 shrink-0" style={{ color: pkg.color }}>🎈</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="mb-6 bg-white/40 rounded-2xl p-4">
                    <h4
                        className="text-sm font-bold text-safari-brown mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        📋 Paket Bilgilendirmesi
                    </h4>
                    <ul className="space-y-1.5">
                        {pkg.info.map((item) => (
                            <li
                                key={item}
                                className="text-safari-brown/80 text-xs flex items-start gap-1.5"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                <span className="text-safari-green mt-0.5 shrink-0">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Program Flow Toggle */}
                <div className="mb-6">
                    <motion.button
                        onClick={() => setShowProgram(!showProgram)}
                        className="w-full text-left bg-white/50 hover:bg-white/70 rounded-2xl p-4 transition-colors"
                        whileTap={{ scale: 0.98 }}
                    >
                        <h4
                            className="text-sm font-bold text-safari-brown flex items-center justify-between"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            <span className="flex items-center gap-2">
                                🎯 Program Akışı
                            </span>
                            <motion.span
                                animate={{ rotate: showProgram ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-lg"
                            >
                                ▾
                            </motion.span>
                        </h4>
                    </motion.button>
                    <AnimatePresence>
                        {showProgram && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-white/50 rounded-b-2xl px-4 pb-4 -mt-2 pt-3">
                                    <ol className="space-y-1">
                                        {pkg.programFlow.map((step, i) => (
                                            <li
                                                key={step}
                                                className="text-safari-brown/80 text-xs flex items-start gap-2"
                                                style={{ fontFamily: "var(--font-body)" }}
                                            >
                                                <span
                                                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                                                    style={{ backgroundColor: pkg.color }}
                                                >
                                                    {i + 1}
                                                </span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                    href="https://wa.me/905441469158"
                    target="_blank"
                    className="whatsapp-btn w-full justify-center text-center block"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Detaylı Bilgi Al
                </motion.a>
            </div>
        </motion.div>
    );
}

export default function Packages() {
    return (
        <section id="paketler" className="relative py-24 px-4 bg-safari-cream">
            {/* Section Title */}
            <div className="text-center mb-16">
                <motion.span
                    className="inline-block text-5xl mb-4"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    🎁
                </motion.span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-safari-brown mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Parti <span className="text-safari-orange">Paketlerimiz</span>
                </h2>
                <p
                    className="text-safari-brown-light text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Her yaş grubuna ve her etkinliğe uygun paketlerimizle unutulmaz bir parti deneyimi yaşatıyoruz!
                </p>
            </div>

            {/* Package Cards */}
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {packages.map((pkg) => (
                    <PackageCard key={pkg.name} pkg={pkg} />
                ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div
                className="max-w-3xl mx-auto mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                {[
                    { icon: "✅", text: "500+ Mutlu Aile" },
                    { icon: "⭐", text: "5 Yıllık Deneyim" },
                    { icon: "🛡️", text: "Güvenli Organizasyon" },
                    { icon: "💚", text: "%100 Memnuniyet" },
                ].map((badge) => (
                    <div
                        key={badge.text}
                        className="flex items-center gap-2 text-safari-brown"
                    >
                        <span className="text-2xl">{badge.icon}</span>
                        <span
                            className="font-semibold text-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            {badge.text}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
                className="max-w-3xl mx-auto mt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-safari-brown to-safari-brown/90 text-white p-10 sm:p-14 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 text-4xl opacity-20">🎉</div>
                    <div className="absolute bottom-4 right-4 text-4xl opacity-20">🎊</div>
                    <div className="absolute top-6 right-8 text-3xl opacity-15">🎈</div>
                    <div className="absolute bottom-6 left-8 text-3xl opacity-15">🎁</div>

                    <motion.span
                        className="inline-block text-5xl mb-4"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        📞
                    </motion.span>

                    <h3
                        className="text-2xl sm:text-3xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Hemen İletişime Geçin!
                    </h3>
                    <p
                        className="text-white/80 mb-8 max-w-lg mx-auto"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Paketlerimiz hakkında detaylı bilgi almak, özel isteklerinizi paylaşmak veya
                        rezervasyon yapmak için bize ulaşın.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/905441469158"
                            target="_blank"
                            className="whatsapp-btn !text-base !px-8 !py-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp ile Ulaşın
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+905441469158"
                            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-base transition-colors"
                            style={{ fontFamily: "var(--font-heading)" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📱 0544 146 91 58
                        </motion.a>
                    </div>

                    {/* Instagram */}
                    <motion.a
                        href="https://www.instagram.com/joeyorganizasyon/"
                        target="_blank"
                        className="inline-flex items-center gap-2 mt-6 text-white/70 hover:text-white transition-colors text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @joeyorganizasyon
                    </motion.a>
                </div>
            </motion.div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-12 sm:h-20"
                >
                    <path
                        d="M0 30 Q240 70 480 30 Q720 -10 960 40 Q1200 80 1440 20 L1440 80 L0 80 Z"
                        fill="#8CB369"
                    />
                </svg>
            </div>
        </section>
    );
}
