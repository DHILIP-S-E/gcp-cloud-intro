import React, { useEffect, useRef } from 'react';

export const FallingPetals: React.FC<{ count?: number; className?: string }> = ({
  count = 24,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Petal {
      x: number;
      y: number;
      vx: number;
      vy: number;
      rot: number;
      vRot: number;
      size: number;
      color: string;
      alpha: number;
      sway: number;
      swaySpeed: number;
    }

    const colors = ['#FF9D36', '#F5C76B', '#F47B20', '#C73532', '#FFE082'];
    const petals: Petal[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.9 + 0.6,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.03,
      size: Math.random() * 7 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.4,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
    }));

    // Floating Stardust Particles
    interface Spark {
      x: number;
      y: number;
      vy: number;
      alpha: number;
      size: number;
    }
    const sparks: Spark[] = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(Math.random() * 0.4 + 0.2), // Rising gently like diya sparks
      alpha: Math.random() * 0.7 + 0.2,
      size: Math.random() * 1.8 + 0.8,
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      // Organic curved 2D vector petal shape
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.5, p.size * 0.7, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.5, -p.size * 0.7, -p.size * 0.5, 0, -p.size);
      ctx.fill();

      // Subtle center vein
      ctx.strokeStyle = '#FFE082';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.lineTo(0, p.size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render & update stardust sparks
      for (const s of sparks) {
        s.y += s.vy;
        if (s.y < 0) {
          s.y = canvas.height;
          s.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = '#F5C76B';
        ctx.globalAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.y * 0.05));
        ctx.fill();
      }

      // Render & update falling marigold petals
      for (const p of petals) {
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 0.8 + p.vx;
        p.y += p.vy;
        p.rot += p.vRot;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        drawPetal(p);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-20 ${className}`}
    />
  );
};
