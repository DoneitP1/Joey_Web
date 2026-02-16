"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryPhoto {
    id: number;
    src: string;
    caption: string;
    rotation: number;
    color: string;
}

const photos: GalleryPhoto[] = [
    { id: 1, src: "/images/bubblehouse.jpg", caption: "Bubble House Eğlencesi 🫧", rotation: -3, color: "#F4A259" },
    { id: 2, src: "/images/carkifelek.jpg", caption: "Çarkıfelek Heyecanı 🎡", rotation: 2, color: "#8CB369" },
    { id: 3, src: "/images/gallery-6.jpg", caption: "Festival Coşkusu 🎪", rotation: -1.5, color: "#A2D2FF" },
    { id: 4, src: "/images/parasut-oyunu.jpg", caption: "Eğlence Dolu Anlar 🌈", rotation: 3, color: "#FFB6C1" },
    { id: 5, src: "/images/gallery-10.jpg", caption: "Neşeli Doğum Günü 🎂", rotation: -2, color: "#FFE066" },
    { id: 6, src: "/images/gallery-11.jpg", caption: "Sürpriz Parti 🎁", rotation: 1, color: "#F4A259" },
    { id: 7, src: "/images/gallery-7.jpg", caption: "Çocuk Şenliği 🌈", rotation: -2.5, color: "#8CB369" },
    { id: 8, src: "/images/gallery-12.jpg", caption: "Mutluluk Karesi 📸", rotation: 1.5, color: "#A2D2FF" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, rotate: 0 },
    visible: (rotation: number) => ({
        opacity: 1,
        y: 0,
        rotate: rotation,
        transition: { duration: 0.6, ease: "easeOut" as const },
    }),
};

function PolaroidCard({ photo }: { photo: GalleryPhoto }) {
    return (
        <motion.div
            className="polaroid inline-block"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            variants={itemVariants}
            custom={photo.rotation}
            whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 20,
                boxShadow: "0 12px 40px rgba(107, 79, 58, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
        >
            {/* Real Photo from Instagram */}
            <div className="w-full aspect-square rounded-sm overflow-hidden relative">
                <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Subtle overlay for Polaroid feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </div>

            {/* Caption */}
            <p
                className="text-center mt-3 text-safari-brown font-semibold text-sm"
                style={{ fontFamily: "var(--font-body)" }}
            >
                {photo.caption}
            </p>
        </motion.div>
    );
}

export default function Gallery() {
    return (
        <section id="galeri" className="relative py-24 px-4" style={{ backgroundColor: "#F4E3C1" }}>
            {/* Section Title */}
            <div className="text-center mb-16">
                <motion.span
                    className="inline-block text-5xl mb-4"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    📸
                </motion.span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-safari-brown mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Anı <span className="text-safari-orange">Duvarımız</span>
                </h2>
                <p
                    className="text-safari-brown-light text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Her parti, bir dolu güzel anı bırakır. İşte bizim en sevdiğimiz
                    kareler!
                </p>
            </div>

            {/* Polaroid Grid */}
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {photos.map((photo) => (
                    <PolaroidCard key={photo.id} photo={photo} />
                ))}
            </motion.div>

            {/* Instagram CTA */}
            <div className="text-center mt-12">
                <motion.a
                    href="https://www.instagram.com/joeyorganizasyon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg"
                    style={{
                        background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        fontFamily: "var(--font-heading)",
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(220, 39, 67, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                    Daha Fazlası İçin Takip Et
                </motion.a>
            </div>

            {/* Decorative tape strips */}
            <div className="absolute top-16 right-8 w-16 h-6 bg-safari-orange/30 rotate-45 rounded hidden lg:block" />
            <div className="absolute bottom-20 left-12 w-20 h-6 bg-safari-green/30 -rotate-12 rounded hidden lg:block" />

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-12 sm:h-20"
                >
                    <path
                        d="M0 50 Q480 10 720 50 Q960 90 1440 30 L1440 80 L0 80 Z"
                        fill="#FFF8F0"
                    />
                </svg>
            </div>
        </section>
    );
}
