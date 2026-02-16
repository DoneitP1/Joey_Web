"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    type: "leaf" | "sparkle" | "confetti";
    color: string;
}

const COLORS = ["#8CB369", "#A8CC8C", "#F4A259", "#FFE066", "#A2D2FF", "#FFB6C1"];

export default function CursorParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const animationFrame = useRef<number>(0);
    const lastEmit = useRef(0);

    const isTouchDevice = useCallback(() => {
        if (typeof window === "undefined") return false;
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }, []);

    const createParticle = useCallback((x: number, y: number): Particle => {
        const types: Array<"leaf" | "sparkle" | "confetti"> = ["leaf", "sparkle", "confetti"];
        const type = types[Math.floor(Math.random() * types.length)];
        return {
            x,
            y,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3 - 1,
            life: 1,
            maxLife: 60 + Math.random() * 40,
            size: 4 + Math.random() * 8,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
            type,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
    }, []);

    const drawLeaf = useCallback(
        (ctx: CanvasRenderingContext2D, p: Particle) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.quadraticCurveTo(p.size, -p.size / 2, 0, p.size);
            ctx.quadraticCurveTo(-p.size, -p.size / 2, 0, -p.size);
            ctx.fill();
            // Leaf vein
            ctx.strokeStyle = "rgba(255,255,255,0.3)";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 0.8);
            ctx.lineTo(0, p.size * 0.8);
            ctx.stroke();
            ctx.restore();
        },
        []
    );

    const drawSparkle = useCallback(
        (ctx: CanvasRenderingContext2D, p: Particle) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            const s = p.size * 0.5;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                const angle = (i * Math.PI) / 2;
                ctx.moveTo(0, 0);
                ctx.lineTo(
                    Math.cos(angle - 0.15) * s,
                    Math.sin(angle - 0.15) * s
                );
                ctx.lineTo(
                    Math.cos(angle) * s * 2,
                    Math.sin(angle) * s * 2
                );
                ctx.lineTo(
                    Math.cos(angle + 0.15) * s,
                    Math.sin(angle + 0.15) * s
                );
            }
            ctx.fill();
            ctx.restore();
        },
        []
    );

    const drawConfetti = useCallback(
        (ctx: CanvasRenderingContext2D, p: Particle) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.fillRect(
                -p.size / 2,
                -p.size / 3,
                p.size,
                p.size * 0.6
            );
            ctx.restore();
        },
        []
    );

    useEffect(() => {
        if (isTouchDevice()) return;

        // Check prefers-reduced-motion
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (motionQuery.matches) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const now = Date.now();
            if (now - lastEmit.current > 50) {
                particles.current.push(
                    createParticle(mousePos.current.x, mousePos.current.y)
                );
                lastEmit.current = now;
            }

            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.03; // gravity
                p.rotation += p.rotationSpeed;
                p.life -= 1 / p.maxLife;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                if (p.type === "leaf") drawLeaf(ctx, p);
                else if (p.type === "sparkle") drawSparkle(ctx, p);
                else drawConfetti(ctx, p);
            }

            // Limit active particle count
            if (particles.current.length > 60) {
                particles.current.splice(0, particles.current.length - 60);
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrame.current);
        };
    }, [isTouchDevice, createParticle, drawLeaf, drawSparkle, drawConfetti]);

    if (typeof window !== "undefined" && isTouchDevice()) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[999]"
            style={{ mixBlendMode: "multiply" }}
        />
    );
}
