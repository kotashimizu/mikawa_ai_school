'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  centerX: number;
  centerY: number;
  reset: () => void;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

const createParticle = (canvas: HTMLCanvasElement): Particle => {
  const particle: Partial<Particle> = {};

  const init = () => {
    const side = Math.floor(Math.random() * 4);
    switch (side) {
      case 0:
        particle.x = Math.random() * canvas.width;
        particle.y = -20;
        break;
      case 1:
        particle.x = canvas.width + 20;
        particle.y = Math.random() * canvas.height;
        break;
      case 2:
        particle.x = Math.random() * canvas.width;
        particle.y = canvas.height + 20;
        break;
      default:
        particle.x = -20;
        particle.y = Math.random() * canvas.height;
        break;
    }

    particle.centerX = canvas.width / 2;
    particle.centerY = canvas.height / 2;

    const dx = (particle.centerX ?? 0) - (particle.x ?? 0);
    const dy = (particle.centerY ?? 0) - (particle.y ?? 0);
    const distance = Math.hypot(dx, dy) || 1;

    const speed = Math.random() * 0.5 + 0.3;
    particle.vx = (dx / distance) * speed;
    particle.vy = (dy / distance) * speed;
    particle.size = Math.random() * 2 + 1;
    particle.opacity = 0;
    particle.maxOpacity = Math.random() * 0.35 + 0.15;
    particle.life = 0;
    particle.maxLife = 260 + Math.random() * 80;
  };

  particle.reset = init;
  particle.update = function update(this: Particle) {
    this.x += this.vx;
    this.y += this.vy;
    this.life += 1;

    if (this.life < 40) {
      this.opacity = (this.life / 40) * this.maxOpacity;
    } else if (this.life > this.maxLife - 40) {
      this.opacity = ((this.maxLife - this.life) / 40) * this.maxOpacity;
    } else {
      this.opacity = this.maxOpacity;
    }

    if (this.life >= this.maxLife) {
      this.reset();
      return;
    }

    const distToCenter = Math.hypot(this.x - this.centerX, this.y - this.centerY);
    if (distToCenter < 100) {
      this.vx *= 0.97;
      this.vy *= 0.97;
    }
  };

  particle.draw = function draw(this: Particle, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size ?? 1, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(44, 95, 141, ${this.opacity ?? 0})`;
    ctx.shadowColor = 'rgba(44, 95, 141, 0.35)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  init();

  return particle as Particle;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrame = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement as HTMLElement | null;
    if (!parent) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      const baseCount = window.innerWidth >= 1024 ? 120 : 70;
      particlesRef.current = Array.from({ length: baseCount }, () => createParticle(canvas));
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      animationFrame.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    const handleResize = () => {
      cancelAnimationFrame(animationFrame.current ?? 0);
      resizeCanvas();
      render();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame.current ?? 0);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden />;
}
