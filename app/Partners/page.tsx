'use client';

import React from 'react';
import PartnerHero from './components/PartnerHero/PartnerHero';
import PartnerTiers from './components/PartnerTiers/PartnerTiers';
import FeaturedPartners from './components/FeaturedPartners/FeaturedPartners';
import PartnershipJourney from './components/PartnershipJourney/PartnershipJourney';

const Partners = () => {
  return (
    <main>
      <PartnerHero />
      <PartnerTiers />
      <FeaturedPartners />
      <PartnershipJourney />
    </main>
  );
};

export default Partners;