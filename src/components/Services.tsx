"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface Service {
    title: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
}

const services: Service[] = [
    {
        title: "Bubble House & Balon Show",
        description:
            "Devasa balon evi ve profesyonel balon şovlarıyla çocukları büyülüyoruz. Rengarenk balonların içinde unutulmaz anlar!",
        icon: "🫧",
        color: "#A2D2FF",
        bgColor: "#EAF3FF",
    },
    {
        title: "Çarkıfelek & Hediye Oyunları",
        description:
            "Heyecan dolu çarkıfelek, Popit oyunları ve sürpriz hediyelerle çocukların yüzü gülsün!",
        icon: "🎡",
        color: "#F4A259",
        bgColor: "#FFF3E4",
    },
    {
        title: "Pamuk Şeker & Popcorn",
        description:
            "Nostaljik pamuk şeker ve popcorn arabalarımızla partinize lezzet katıyoruz. Hem göze hem damağa şölen!",
        icon: "🍭",
        color: "#FFB6C1",
        bgColor: "#FFF0F3",
    },
    {
        title: "Survivor Parkuru & Mega Jenga",
        description:
            "Mini Survivor parkuru, Mega Jenga, Mini Bowling ve Angry Birds ile çocuklar doyasıya eğlensin!",
        icon: "🏆",
        color: "#8CB369",
        bgColor: "#EFF5E8",
    },
    {
        title: "Profesyonel Sihirbaz Gösterisi",
        description:
            "Usta sihirbazımızın büyüleyici gösterileri, çocukların ağızlarını açık bırakacak!",
        icon: "🪄",
        color: "#FFE066",
        bgColor: "#FFFCE6",
    },
    {
        title: "Köpük & Kar Makinesi Show",
        description:
            "Köpük partisi ve kar makinesiyle açık havada eğlencenin dozunu artırıyoruz. Konsept süslemeler dahil!",
        icon: "❄️",
        color: "#6B4F3A",
        bgColor: "#F4E3C1",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

function ServiceCard({ service }: { service: Service }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative flex flex-col items-center text-center p-8 rounded-3xl cursor-pointer"
            style={{ backgroundColor: service.bgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Blob Background */}
            <div
                className="absolute inset-0 opacity-30 rounded-3xl"
                style={{ animation: "blob 8s infinite ease-in-out" }}
            />

            {/* Icon Circle */}
            <motion.div
                className="relative w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg"
                style={{ backgroundColor: service.color }}
                whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: `0 10px 40px ${service.color}66`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="text-4xl">{service.icon}</span>
                {/* Pop sparkles on hover */}
                <motion.div
                    className="absolute -top-2 -right-2 text-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                >
                    ✨
                </motion.div>
            </motion.div>

            <h3
                className="text-xl font-bold text-safari-brown mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
            >
                {service.title}
            </h3>
            <p
                className="text-safari-brown-light text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
            >
                {service.description}
            </p>

            {/* Hover decoration */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
                style={{ backgroundColor: service.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Lazy GSAP import for scroll trigger (only for entrance animation)
        let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

        const initGSAP = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            if (sectionRef.current) {
                ctx = gsap.context(() => {
                    gsap.from(".services-title", {
                        scrollTrigger: {
                            trigger: ".services-title",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                    });
                }, sectionRef.current);
            }
        };

        initGSAP();

        return () => {
            ctx?.revert();
        };
    }, []);

    return (
        <section
            id="hizmetler"
            ref={sectionRef}
            className="relative py-24 px-4 bg-safari-cream"
        >
            {/* Section Title */}
            <div className="text-center mb-16 services-title">
                <motion.span
                    className="inline-block text-5xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    🌟
                </motion.span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-safari-brown mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Sihirli <span className="text-safari-orange">Hizmetlerimiz</span>
                </h2>
                <p
                    className="text-safari-brown-light text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Her çocuğun hayali farklı, biz de her hayali gerçeğe dönüştürüyoruz.
                    İşte size sunduğumuz büyülü deneyimler:
                </p>
            </div>

            {/* Services Grid */}
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
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
                        d="M0 40 Q360 80 720 30 Q1080 -10 1440 50 L1440 80 L0 80 Z"
                        fill="#F4E3C1"
                    />
                </svg>
            </div>
        </section>
    );
}
