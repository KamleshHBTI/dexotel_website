import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Region {
  id: string;
  name: string;
  countries: string[];
  coordinates: { x: number; y: number };
}

interface WorldMapProps {
  regions: Region[];
}
type PaletteKey = "primary" | "secondary" | "tertiary";
const palette: Record<PaletteKey, string> = { primary: "#f00", secondary: "#0f0", tertiary: "#00f" };
const myKey: PaletteKey = "tertiary"; // ← should be PaletteKey ideally
const variantStyles = {
  primary: 'bg-gradient-to-br from-blue-900 to-indigo-800',
  secondary: 'bg-gradient-to-br from-purple-900 to-indigo-800',
  tertiary: 'bg-gradient-to-br from-gray-900 to-slate-800',
};

const WorldMap: React.FC<WorldMapProps> = ({ regions }) => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${variantStyles[myKey]}`}
    aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image
          src="/images/world-map.svg"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      {regions.map((region) => (
        <motion.div
          key={region.id}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setActiveRegion(region.id)}
          onHoverEnd={() => setActiveRegion(null)}
          className="absolute cursor-pointer"
          style={{
            left: `${region.coordinates.x}%`,
            top: `${region.coordinates.y}%`,
          }}
        >
          <div className="relative">
            <div className={`w-4 h-4 rounded-full ${
              activeRegion === region.id ? 'bg-blue-500' : 'bg-blue-400'
            } shadow-lg`} />
            
            {activeRegion === region.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg p-3 z-10"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{region.name}</h4>
                <p className="text-sm text-gray-600">
                  {region.countries.join(', ')}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorldMap; 