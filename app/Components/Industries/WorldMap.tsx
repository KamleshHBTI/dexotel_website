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

const WorldMap: React.FC<WorldMapProps> = ({ regions }) => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden">
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