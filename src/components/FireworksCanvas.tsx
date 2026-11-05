import React, { useEffect, useRef } from 'react';
import { soundEngine } from '../utils/soundEngine';

interface FireworksCanvasProps {
  interactive?: boolean;
  intensity?: 'ambient' | 'celebration' | 'finale';
  className?: string;
  palette?: 'festive' | 'gold' | 'google' | 'royal';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  radius: number;
  gravity: number;
  sparkle?: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  exploded: boolean;
  type: 'standard' | 'double' | 'willow' | 'ring';
}

export const FireworksCanvas: React.FC<FireworksCanvasProps> = ({
  interactive = true,
  intensity = 'ambient',
  className = '',
  palette = 'festive',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rockets: Rocket[] = [];
    let particles: Particle[] = [];
    let lastLaunch = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const getPaletteColors = () => {
      switch (palette) {
        case 'gold':
          return ['#FFE57F', '#FFD54F', '#FFC107', '#FFA000', '#FFF8E1'];
        case 'google':
          return ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#FFF1D6'];
        case 'royal':
          return ['#C73532', '#9C27B0', '#F5C76B', '#E91E63', '#FF9D36'];
        case 'festive':
        default:
          return [
            '#F5C76B', // Metallic gold
            '#FF9D36', // Saffron
            '#F47B20', // Warm orange
            '#C73532', // Festive red
            '#FFF1D6', // Warm cream
            '#4285F4', // GDG Blue
            '#34A853', // GDG Green
            '#FBBC04', // GDG Yellow
            '#FF5E5B', // Openmadurai Coral
          ];
      }
    };

    const colors = getPaletteColors();

    const launchRocket = (startX?: number, targetX?: number, targetY?: number) => {
      const x = startX !== undefined ? startX : Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
      const tY = targetY !== undefined ? targetY : Math.random() * (canvas.height * 0.45) + canvas.height * 0.1;
      const tX = targetX !== undefined ? targetX : x + (Math.random() - 0.5) * 80;

      const types: ('standard' | 'double' | 'willow' | 'ring')[] = ['standard', 'double', 'willow', 'ring'];
      const type = types[Math.floor(Math.random() * types.length)];

      const color = colors[Math.floor(Math.random() * colors.length)];
      const distance = canvas.height - tY;
      const speed = Math.sqrt(2 * 0.15 * distance) * 0.95;

      rockets.push({
        x,
        y: canvas.height,
        targetY: tY,
        vx: (tX - x) / (speed / 0.15),
        vy: -speed,
        color,
        exploded: false,
        type,
      });
    };

    const explode = (rocket: Rocket) => {
      soundEngine.playFireworkBurstSound();
      const count = intensity === 'finale' ? 120 : intensity === 'celebration' ? 85 : 55;

      if (rocket.type === 'ring') {
        const ringColor = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < count; i++) {
          const angle = (i * Math.PI * 2) / count;
          const speed = Math.random() * 1.5 + 4;
          particles.push({
            x: rocket.x,
            y: rocket.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: ringColor,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.012,
            radius: Math.random() * 2 + 1.8,
            gravity: 0.03,
            sparkle: true,
          });
        }
      } else if (rocket.type === 'willow') {
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 1.5;
          particles.push({
            x: rocket.x,
            y: rocket.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#F5C76B',
            alpha: 1,
            decay: Math.random() * 0.008 + 0.006, // Long trailing willow
            radius: 1.8,
            gravity: 0.05,
            sparkle: true,
          });
        }
      } else {
        // Standard or Double burst
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6.5 + 1.5;
          const particleColor = colors[Math.floor(Math.random() * colors.length)];
          particles.push({
            x: rocket.x,
            y: rocket.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: particleColor,
            alpha: 1,
            decay: Math.random() * 0.02 + 0.015,
            radius: Math.random() * 2.5 + 1.5,
            gravity: 0.06,
            sparkle: Math.random() > 0.4,
          });
        }
        if (rocket.type === 'double') {
          for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2.5 + 0.8;
            particles.push({
              x: rocket.x,
              y: rocket.y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              color: '#FFF1D6',
              alpha: 1,
              decay: 0.035,
              radius: 1.5,
              gravity: 0.04,
            });
          }
        }
      }
    };

    const handleCanvasClick = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Direct explosion or rocket launch towards tapped location
      launchRocket(x + (Math.random() - 0.5) * 60, x, y);
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('touchstart', handleCanvasClick, { passive: true });

    const animate = (timestamp: number) => {
      // Semi-transparent clear to leave trailing motion blur
      ctx.fillStyle = 'rgba(9, 10, 18, 0.22)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Launch interval based on intensity
      const launchDelay = intensity === 'finale' ? 650 : intensity === 'celebration' ? 1400 : 2800;
      if (timestamp - lastLaunch > launchDelay) {
        launchRocket();
        if (intensity === 'finale' && Math.random() > 0.4) {
          launchRocket(); // dual burst for grand finale
        }
        lastLaunch = timestamp;
      }

      // Update and draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.12; // gravity

        // Draw rocket glowing head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF1D6';
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        // Rocket spark trail
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - r.vx * 2.5, r.y - r.vy * 2.5);
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Check if reached apex or target
        if (r.vy >= -0.5 || r.y <= r.targetY) {
          explode(r);
          rockets.splice(i, 1);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98; // air resistance
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.sparkle && Math.random() > 0.5) {
          ctx.fillStyle = '#FFFFFF';
        } else {
          ctx.fillStyle = p.color;
        }

        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('touchstart', handleCanvasClick);
    };
  }, [interactive, intensity, palette]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      title="Tap anywhere to launch fireworks!"
    />
  );
};
