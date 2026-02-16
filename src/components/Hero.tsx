"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ── Inline SVG Animals ── */
function LionSVG() {
    return (
        <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mane */}
            <ellipse cx="90" cy="90" rx="70" ry="68" fill="#F4A259" />
            <ellipse cx="90" cy="90" rx="55" ry="53" fill="#F7BC85" />
            {/* Face */}
            <circle cx="90" cy="95" r="42" fill="#FFE4B5" />
            {/* Eyes */}
            <circle cx="75" cy="85" r="6" fill="#6B4F3A" />
            <circle cx="105" cy="85" r="6" fill="#6B4F3A" />
            <circle cx="77" cy="83" r="2.5" fill="white" />
            <circle cx="107" cy="83" r="2.5" fill="white" />
            {/* Nose */}
            <ellipse cx="90" cy="100" rx="6" ry="4" fill="#D4845A" />
            {/* Mouth */}
            <path d="M83 106 Q90 114 97 106" stroke="#6B4F3A" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="68" cy="100" r="8" fill="#FFB6C1" opacity="0.4" />
            <circle cx="112" cy="100" r="8" fill="#FFB6C1" opacity="0.4" />
            {/* Ears */}
            <circle cx="45" cy="55" r="16" fill="#F4A259" />
            <circle cx="45" cy="55" r="10" fill="#FFB6C1" />
            <circle cx="135" cy="55" r="16" fill="#F4A259" />
            <circle cx="135" cy="55" r="10" fill="#FFB6C1" />
            {/* Crown */}
            <polygon points="70,38 75,20 82,35 90,15 98,35 105,20 110,38" fill="#FFE066" />
            {/* Body */}
            <ellipse cx="90" cy="165" rx="35" ry="28" fill="#FFE4B5" />
            {/* Paws */}
            <ellipse cx="70" cy="190" rx="12" ry="8" fill="#FFE4B5" />
            <ellipse cx="110" cy="190" rx="12" ry="8" fill="#FFE4B5" />
        </svg>
    );
}

function GiraffeSVG() {
    return (
        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neck */}
            <rect x="62" y="60" width="36" height="100" rx="18" fill="#F7BC85" />
            {/* Spots on neck */}
            <circle cx="72" cy="80" r="6" fill="#D4845A" opacity="0.5" />
            <circle cx="88" cy="95" r="5" fill="#D4845A" opacity="0.5" />
            <circle cx="75" cy="115" r="7" fill="#D4845A" opacity="0.5" />
            <circle cx="90" cy="130" r="5" fill="#D4845A" opacity="0.5" />
            {/* Head */}
            <ellipse cx="80" cy="50" rx="30" ry="26" fill="#F7BC85" />
            {/* Ossicones (horns) */}
            <line x1="68" y1="30" x2="68" y2="15" stroke="#8B705F" strokeWidth="4" strokeLinecap="round" />
            <circle cx="68" cy="12" r="5" fill="#F4A259" />
            <line x1="92" y1="30" x2="92" y2="15" stroke="#8B705F" strokeWidth="4" strokeLinecap="round" />
            <circle cx="92" cy="12" r="5" fill="#F4A259" />
            {/* Eyes */}
            <circle cx="68" cy="45" r="5" fill="#6B4F3A" />
            <circle cx="92" cy="45" r="5" fill="#6B4F3A" />
            <circle cx="70" cy="43" r="2" fill="white" />
            <circle cx="94" cy="43" r="2" fill="white" />
            {/* Nose */}
            <ellipse cx="80" cy="58" rx="8" ry="4" fill="#E8A876" />
            {/* Mouth */}
            <path d="M74 62 Q80 68 86 62" stroke="#6B4F3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="60" cy="55" r="6" fill="#FFB6C1" opacity="0.3" />
            <circle cx="100" cy="55" r="6" fill="#FFB6C1" opacity="0.3" />
            {/* Body */}
            <ellipse cx="80" cy="175" rx="38" ry="30" fill="#F7BC85" />
            {/* Spots on body */}
            <circle cx="70" cy="168" r="7" fill="#D4845A" opacity="0.4" />
            <circle cx="92" cy="178" r="6" fill="#D4845A" opacity="0.4" />
            {/* Legs */}
            <rect x="55" y="195" width="12" height="25" rx="6" fill="#F7BC85" />
            <rect x="93" y="195" width="12" height="25" rx="6" fill="#F7BC85" />
        </svg>
    );
}

function BearSVG() {
    return (
        <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ears */}
            <circle cx="50" cy="42" r="22" fill="#8B705F" />
            <circle cx="50" cy="42" r="14" fill="#D4845A" />
            <circle cx="130" cy="42" r="22" fill="#8B705F" />
            <circle cx="130" cy="42" r="14" fill="#D4845A" />
            {/* Head */}
            <circle cx="90" cy="80" r="48" fill="#8B705F" />
            {/* Face inner */}
            <circle cx="90" cy="85" r="35" fill="#A68B7A" />
            {/* Eyes */}
            <circle cx="72" cy="72" r="7" fill="#6B4F3A" />
            <circle cx="108" cy="72" r="7" fill="#6B4F3A" />
            <circle cx="74" cy="70" r="3" fill="white" />
            <circle cx="110" cy="70" r="3" fill="white" />
            {/* Nose */}
            <ellipse cx="90" cy="90" rx="10" ry="7" fill="#6B4F3A" />
            <ellipse cx="90" cy="88" rx="4" ry="2.5" fill="#8B705F" />
            {/* Mouth */}
            <path d="M82 97 Q90 106 98 97" stroke="#6B4F3A" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="62" cy="92" r="8" fill="#FFB6C1" opacity="0.35" />
            <circle cx="118" cy="92" r="8" fill="#FFB6C1" opacity="0.35" />
            {/* Bow tie */}
            <polygon points="80,120 90,130 100,120" fill="#F4A259" />
            <polygon points="80,130 90,120 100,130" fill="#F4A259" />
            <circle cx="90" cy="125" r="4" fill="#FFE066" />
            {/* Body */}
            <ellipse cx="90" cy="165" rx="42" ry="32" fill="#8B705F" />
            {/* Belly */}
            <ellipse cx="90" cy="168" rx="25" ry="20" fill="#A68B7A" />
            {/* Paws */}
            <ellipse cx="60" cy="192" rx="15" ry="10" fill="#8B705F" />
            <ellipse cx="120" cy="192" rx="15" ry="10" fill="#8B705F" />
        </svg>
    );
}

/* ── Decorative elements ── */
function CloudSVG({ className }: { className?: string }) {
    return (
        <svg className={className} width="200" height="80" viewBox="0 0 200 80" fill="none">
            <ellipse cx="60" cy="50" rx="50" ry="28" fill="white" opacity="0.6" />
            <ellipse cx="100" cy="40" rx="60" ry="35" fill="white" opacity="0.6" />
            <ellipse cx="150" cy="50" rx="45" ry="25" fill="white" opacity="0.6" />
        </svg>
    );
}

function TreeSVG({ className }: { className?: string }) {
    return (
        <svg className={className} width="80" height="120" viewBox="0 0 80 120" fill="none">
            <rect x="35" y="80" width="10" height="40" rx="3" fill="#8B705F" />
            <circle cx="40" cy="50" r="35" fill="#8CB369" opacity="0.8" />
            <circle cx="25" cy="60" r="25" fill="#A8CC8C" opacity="0.7" />
            <circle cx="55" cy="55" r="28" fill="#8CB369" opacity="0.7" />
        </svg>
    );
}

function StarSVG({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon
                points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
                fill="#FFE066"
                opacity="0.7"
            />
        </svg>
    );
}

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const cloudY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const treeY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const animalY = useTransform(scrollYProgress, [0, 1], [0, 30]);

    const floatAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    };

    const floatAnimationSlow = {
        y: [-8, 12, -8],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    };

    const floatAnimationFast = {
        y: [-12, 8, -12],
        transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    };

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen overflow-hidden flex items-center justify-center"
            style={{
                background:
                    "linear-gradient(180deg, #A2D2FF 0%, #C0E2FF 30%, #FFF8F0 70%, #F4E3C1 100%)",
            }}
        >
            {/* Parallax Clouds */}
            <motion.div style={{ y: cloudY }} className="absolute inset-0 pointer-events-none">
                <CloudSVG className="absolute top-10 left-[5%]" />
                <CloudSVG className="absolute top-20 right-[10%] scale-75" />
                <CloudSVG className="absolute top-32 left-[40%] scale-50" />
            </motion.div>

            {/* Stars */}
            <motion.div style={{ y: cloudY }} className="absolute inset-0 pointer-events-none">
                {[
                    { top: "15%", left: "15%", delay: 0 },
                    { top: "10%", left: "75%", delay: 0.5 },
                    { top: "25%", left: "55%", delay: 1 },
                    { top: "20%", left: "30%", delay: 1.5 },
                    { top: "8%", left: "88%", delay: 2 },
                ].map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ top: star.top, left: star.left }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 3,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut" as const,
                        }}
                    >
                        <StarSVG />
                    </motion.div>
                ))}
            </motion.div>

            {/* Parallax Trees */}
            <motion.div style={{ y: treeY }} className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <TreeSVG className="absolute bottom-0 left-[5%] scale-110" />
                <TreeSVG className="absolute bottom-0 left-[20%] scale-75" />
                <TreeSVG className="absolute bottom-0 right-[8%] scale-100" />
                <TreeSVG className="absolute bottom-0 right-[25%] scale-[0.6]" />
            </motion.div>

            {/* Grass */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
                <svg width="100%" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
                    <path
                        d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 100 L0 100 Z"
                        fill="#8CB369"
                        opacity="0.4"
                    />
                    <path
                        d="M0 60 Q360 30 720 60 Q1080 90 1440 50 L1440 100 L0 100 Z"
                        fill="#A8CC8C"
                        opacity="0.6"
                    />
                    <path
                        d="M0 75 Q360 55 720 75 Q1080 95 1440 70 L1440 100 L0 100 Z"
                        fill="#8CB369"
                        opacity="0.8"
                    />
                </svg>
            </div>

            {/* Animals */}
            <motion.div style={{ y: animalY }} className="absolute bottom-16 left-0 right-0 pointer-events-none flex justify-around items-end px-4">
                {/* Lion left */}
                <motion.div animate={floatAnimation} className="hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="transform scale-75 md:scale-100"
                    >
                        <LionSVG />
                    </motion.div>
                </motion.div>

                {/* Spacer for center text */}
                <div className="flex-1" />

                {/* Giraffe center-right */}
                <motion.div animate={floatAnimationSlow}>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="transform scale-75 md:scale-100"
                    >
                        <GiraffeSVG />
                    </motion.div>
                </motion.div>

                {/* Bear right */}
                <motion.div animate={floatAnimationFast} className="hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 1.0 }}
                        className="transform scale-75 md:scale-100"
                    >
                        <BearSVG />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Central Text */}
            <motion.div style={{ y: titleY }} className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Sparkle decoration */}
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="text-4xl">✨</span>
                    </motion.div>

                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-safari-brown leading-tight mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Her Doğum Günü
                        <br />
                        <span className="text-safari-orange">Bir Masal</span> Gibi Olmalı
                    </h1>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-safari-brown-light max-w-2xl mx-auto mb-10 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Çocuğunuzun gözlerindeki ışıltıyı, unutulmaz bir maceraya
                        dönüştürüyoruz.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <motion.a
                            href="#hizmetler"
                            className="px-8 py-4 bg-safari-orange text-white font-bold rounded-full text-lg shadow-lg"
                            style={{ fontFamily: "var(--font-body)" }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 8px 30px rgba(244, 162, 89, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hizmetlerimizi Keşfet 🎉
                        </motion.a>
                        <motion.a
                            href="https://wa.me/905441469158"
                            target="_blank"
                            className="whatsapp-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hemen İletişime Geç
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Wave Transition */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-16 sm:h-24"
                >
                    <path
                        d="M0 80 C360 20 720 100 1080 40 C1260 10 1380 50 1440 30 L1440 120 L0 120 Z"
                        fill="#FFF8F0"
                    />
                </svg>
            </div>
        </section>
    );
}
