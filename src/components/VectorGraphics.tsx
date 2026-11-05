import React from 'react';
import { motion } from 'framer-motion';

// 1. Traditional Indian Diya using Vector Graphic Image (.svg)
export interface DiyaVectorProps {
  isLit?: boolean;
  size?: number;
  className?: string;
  glowColor?: string;
  flameScale?: number;
  showRays?: boolean;
}

export const DiyaVector: React.FC<DiyaVectorProps> = ({
  isLit = true,
  size = 120,
  className = '',
  glowColor = '#FF9D36',
  flameScale = 1,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 0.9 }}
    >
      {/* Dynamic Warm Ambient Radial Glow for lit state */}
      {isLit && (
        <motion.div
          animate={{
            scale: [0.95, 1.12, 0.98],
            opacity: [0.55, 0.85, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/4 w-[160%] h-[160%] rounded-full pointer-events-none blur-2xl"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, #F5C76B44 35%, #C7353215 70%, transparent 90%)`,
          }}
        />
      )}

      {/* Vector Graphic Image */}
      <img
        src={isLit ? '/assets/vectors/diya.svg' : '/assets/vectors/diya-unlit.svg'}
        alt={isLit ? 'Auspicious Illuminated Diya' : 'Unlit Terracotta Diya'}
        className="w-full h-full relative z-10 drop-shadow-xl object-contain pointer-events-none"
        style={{ transform: isLit ? `scale(${flameScale})` : undefined }}
        loading="eager"
      />
    </div>
  );
};

// 2. Sacred Traditional Rangoli Mandala using Vector Graphic Image (.svg)
export const RangoliVector: React.FC<{
  size?: number;
  className?: string;
  spinDuration?: number;
}> = ({ size = 400, className = '', spinDuration = 60 }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: spinDuration, repeat: Infinity, ease: 'linear' }}
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/assets/vectors/rangoli.svg"
        alt="Sacred Mandala Rangoli Vector Graphic"
        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,199,107,0.2)]"
        loading="lazy"
      />
    </motion.div>
  );
};

// 3. Meenakshi Amman Temple Gopuram using Vector Graphic Image (.svg)
export const MeenakshiGopuramVector: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 140, className = '' }) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size * 1.15 }}
    >
      <img
        src="/assets/vectors/meenakshi-gopuram.svg"
        alt="Madurai Meenakshi Temple Gopuram Vector Graphic"
        className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(245,199,107,0.3)]"
        loading="lazy"
      />
    </div>
  );
};

// 4. GDG Brackets Logo using Vector Graphic Image (.svg)
export const GDGLogoVector: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 120, className = '' }) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size * 0.7 }}
    >
      <img
        src="/assets/vectors/gdg-logo.svg"
        alt="GDG Madurai Vector Emblem"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

// 5. Traditional Marigold Toran Garland using Vector Graphic Image (.svg)
export const MarigoldToran: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <img
        src="/assets/vectors/marigold-toran.svg"
        alt="Festive Marigold and Mango Leaf Toran Border"
        className="w-full h-12 object-cover object-top"
        loading="eager"
      />
    </div>
  );
};

// 6. Auspicious Purna Kalash using Vector Graphic Image (.svg)
export const KalashVector: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 100, className = '' }) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size * 1.1 }}
    >
      <img
        src="/assets/vectors/kalash.svg"
        alt="Auspicious Kalash Vector Graphic"
        className="w-full h-full object-contain drop-shadow-md"
        loading="lazy"
      />
    </div>
  );
};

// 7. OpenmadurAI Community Badge using Vector Graphic Image (.svg)
export const OpenmadurAIBadge: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 200, className = '' }) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size * 0.3 }}
    >
      <img
        src="/assets/vectors/openmadurai-badge.svg"
        alt="OpenmadurAI Community Vector Emblem"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};
