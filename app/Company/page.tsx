"use client";

import React from 'react'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Culture from './components/Culture'
import Team from './components/Team'
import Timeline from './components/Timeline'
import Values from './components/Values'

const Company = () => {

  return (
    <main className="min-h-screen">
      <Hero/>
      <Achievements />
      <Culture />
      <Team />
      <Timeline />
      <Values />
    </main>
  )
}

export default Company