#!/bin/bash

# Output directory
DIR="/Users/parth/Documents/Dexotel/dexotel-website/dexotel_website/public/images/industry/hero"
mkdir -p "$DIR"

# Healthcare - pulsing animated heart
cat > "$DIR/Healthcare.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg" cx="50%" cy="50%" r="50%">
   <stop offset="0%" stop-color="#e53935" stop-opacity="0.25" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<circle cx="200" cy="200" r="150" fill="url(#bg)" />
<g>
  <path id="heart" d="M200 275 L150 220 A35 35 0 0 1 200 150 A35 35 0 0 1 250 220 Z" fill="#e53935">
    <animateTransform attributeName="transform" type="scale" values="1;1.08;1" keyTimes="0;0.5;1" begin="0s" dur="2s" repeatCount="indefinite"/>
  </path>
</g>
</svg>
EOF

# Education - gently flipping book
cat > "$DIR/Education.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-edu" cx="50%" cy="60%" r="50%">
   <stop offset="0%" stop-color="#1976d2" stop-opacity="0.18" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="230" rx="140" ry="65" fill="url(#bg-edu)" />
<g>
  <rect x="130" y="170" width="60" height="60" fill="#fffde7" stroke="#1976d2" stroke-width="4"/>
  <rect x="210" y="170" width="60" height="60" fill="#e3f2fd" stroke="#1976d2" stroke-width="4"/>
  <rect x="130" y="170" width="140" height="60" fill="none" stroke="#1976d2" stroke-width="2"/>
  <rect x="135" y="175" width="60" height="50" fill="#fff" opacity="0.8">
    <animate attributeName="width" values="60;120;60" dur="2s" repeatCount="indefinite"/>
  </rect>
</g>
</svg>
EOF

# Fintech - spinning coin
cat > "$DIR/Fintech.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-fintech" cx="60%" cy="40%" r="50%">
     <stop offset="0%" stop-color="#4caf50" stop-opacity="0.18" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="200" rx="150" ry="120" fill="url(#bg-fintech)" />
<g>
 <circle cx="200" cy="200" r="60" fill="#ffc107" stroke="#ffb300" stroke-width="6">
   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="2s" repeatCount="indefinite"/>
 </circle>
 <text x="200" y="212" text-anchor="middle" font-size="64" fill="#4caf50" font-family="Arial">\$$</text>
</g>
</svg>
EOF

# E-commerce - bouncing shopping bag
cat > "$DIR/E-commerce.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-ec" cx="60%" cy="40%" r="50%">
   <stop offset="0%" stop-color="#8e24aa" stop-opacity="0.20" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="130" ry="65" fill="url(#bg-ec)" />
<g>
  <rect x="150" y="180" width="100" height="90" rx="16" fill="#fff" stroke="#8e24aa" stroke-width="4">
    <animateTransform attributeName="transform" type="translate" values="0,0;0,-18;0,0" dur="1.4s" repeatCount="indefinite"/>
  </rect>
  <rect x="170" y="170" width="60" height="15" rx="8" fill="#8e24aa" />
  <circle cx="170" cy="185" r="6" fill="#ffb300" />
  <circle cx="230" cy="185" r="6" fill="#ffb300" />
</g>
</svg>
EOF

# Logistics - moving delivery truck
cat > "$DIR/Logistics.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-log" cx="40%" cy="60%" r="50%">
   <stop offset="0%" stop-color="#ff9800" stop-opacity="0.17" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="220" rx="150" ry="90" fill="url(#bg-log)" />
<g>
  <rect id="truck" x="120" y="190" width="80" height="40" rx="10" fill="#ffd54f" stroke="#ff9800" stroke-width="3">
    <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="2s" repeatCount="indefinite"/>
  </rect>
  <rect x="200" y="200" width="40" height="30" rx="6" fill="#b0bec5" />
  <circle cx="140" cy="235" r="13" fill="#424242" />
  <circle cx="210" cy="235" r="13" fill="#424242" />
</g>
</svg>
EOF

# Real Estate - springing house shape
cat > "$DIR/Real_Estate.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-re" cx="50%" cy="40%" r="50%">
   <stop offset="0%" stop-color="#1976d2" stop-opacity="0.16" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="130" ry="68" fill="url(#bg-re)" />
<g>
 <polygon id="house" points="200,140 125,200 275,200" fill="#fff" stroke="#1976d2" stroke-width="5">
   <animateTransform attributeName="transform" type="scale" values="1;1.1;1" begin="0s" dur="2s" repeatCount="indefinite"/>
 </polygon>
 <rect x="145" y="200" width="110" height="70" fill="#90caf9" stroke="#1976d2" stroke-width="4"/>
</g>
</svg>
EOF

# Hospitality - shining bell
cat > "$DIR/Hospitality.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-hosp" cx="60%" cy="30%" r="61%">
   <stop offset="0%" stop-color="#ff7043" stop-opacity="0.17" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="120" ry="70" fill="url(#bg-hosp)" />
<g>
 <ellipse id="bell" cx="200" cy="210" rx="60" ry="28" fill="#ff7043" stroke="#d84315" stroke-width="4">
   <animateTransform attributeName="transform" type="scale" values="1;1.09;1" dur="1.8s" repeatCount="indefinite" />
 </ellipse>
 <rect x="180" y="190" width="40" height="18" rx="6" fill="#fff8e1" />
 <rect x="193" y="180" width="14" height="14" rx="4" fill="#ffe082">
   <animate attributeName="y" values="180;170;180" dur="1.8s" repeatCount="indefinite"/>
 </rect>
</g>
</svg>
EOF

# Insurance - floating umbrella
cat > "$DIR/Insurance.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="bg-ins" cx="50%" cy="60%" r="50%">
   <stop offset="0%" stop-color="#42a5f5" stop-opacity="0.13" />
   <stop offset="100%" stop-color="#fff" stop-opacity="0" />
 </radialGradient>
</defs>
<ellipse cx="200" cy="230" rx="135" ry="58" fill="url(#bg-ins)" />
<g>
 <path id="umbrella" d="M140 200 Q200 140 260 200 Q200 190 140 200 Z" fill="#42a5f5" stroke="#1976d2" stroke-width="4">
   <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="2.2s" repeatCount="indefinite"/>
 </path>
 <rect x="198" y="200" width="4" height="40" fill="#1976d2" />
</g>
</svg>
EOF

# Manufacturing - spinning gear
cat > "$DIR/Manufacturing.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-manu" cx="53%" cy="43%" r="69%">
     <stop offset="0%" stop-color="#bdbdbd" stop-opacity="0.15" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="150" ry="70" fill="url(#bg-manu)" />
<g>
  <g>
    <circle cx="200" cy="200" r="46" fill="#eee" stroke="#757575" stroke-width="8"/>
    <g>
      <rect x="195" y="140" width="10" height="32" rx="3" fill="#ffb300"/>
      <rect x="195" y="228" width="10" height="32" rx="3" fill="#ffb300"/>
      <rect x="140" y="195" width="32" height="10" rx="3" fill="#ffb300"/>
      <rect x="228" y="195" width="32" height="10" rx="3" fill="#ffb300"/>
    </g>
  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="3s" repeatCount="indefinite"/>
  </g>
</g>
</svg>
EOF

# Retail - bouncing tag
cat > "$DIR/Retail.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-retail" cx="50%" cy="60%" r="55%">
     <stop offset="0%" stop-color="#43a047" stop-opacity="0.19" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="130" ry="60" fill="url(#bg-retail)" />
<g>
  <rect id="tag" x="170" y="175" width="60" height="36" rx="10" fill="#fff59d" stroke="#43a047" stroke-width="4">
    <animateTransform attributeName="transform" type="translate" values="0,0;0,-18;0,0" dur="1.7s" repeatCount="indefinite"/>
  </rect>
  <circle cx="190" cy="193" r="5" fill="#43a047" />
</g>
</svg>
EOF

# Technology - blinking computer
cat > "$DIR/Technology.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-tech" cx="36%" cy="49%" r="65%">
     <stop offset="0%" stop-color="#3949ab" stop-opacity="0.15" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="200" rx="142" ry="82" fill="url(#bg-tech)" />
<g>
 <rect x="130" y="175" width="140" height="70" rx="16" fill="#fff" stroke="#3949ab" stroke-width="4" />
 <rect x="160" y="205" width="80" height="30" fill="#e3f2fd" />
 <rect x="150" y="185" width="100" height="8" fill="#3949ab">
   <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
 </rect>
</g>
</svg>
EOF

# Energy - shimmering lightning bolt
cat > "$DIR/Energy.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-energy" cx="53%" cy="43%" r="62%">
     <stop offset="0%" stop-color="#ffc107" stop-opacity="0.13" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="210" rx="124" ry="68" fill="url(#bg-energy)" />
<polygon id="bolt" points="205,160 185,220 210,220 190,270 240,190 215,190 235,160" fill="#ffeb3b" stroke="#ffb300" stroke-width="3">
  <animate attributeName="opacity" values="1;0.7;1" dur="1.2s" repeatCount="indefinite" />
</polygon>
</svg>
EOF

# Travel - rising airplane
cat > "$DIR/Travel.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-travel" cx="53%" cy="80%" r="59%">
     <stop offset="0%" stop-color="#1e88e5" stop-opacity="0.13" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="250" rx="120" ry="43" fill="url(#bg-travel)" />
<g>
<polygon id="plane" points="200,170 210,200 200,190 190,200" fill="#90caf9">
  <animateTransform attributeName="transform" type="translate" values="0,0;0,-20;0,0" dur="1.4s" repeatCount="indefinite"/>
</polygon>
<rect x="197" y="190" width="6" height="40" rx="2" fill="#1976d2"/>
</g>
</svg>
EOF

# Telecom - signal waves
cat > "$DIR/Telecom.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-tel" cx="53%" cy="53%" r="52%">
     <stop offset="0%" stop-color="#1976d2" stop-opacity="0.13" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="225" rx="125" ry="47" fill="url(#bg-tel)" />
<g>
 <circle cx="200" cy="220" r="20" fill="#1976d2" />
 <path d="M200 220 M220 180 Q245 200 220 220" stroke="#42a5f5" stroke-width="5" fill="none"/>
 <path d="M200 220 M240 150 Q285 200 240 250" stroke="#90caf9" stroke-width="4" fill="none">
   <animate attributeName="opacity" values="1;0.3;1" dur="1.7s" repeatCount="indefinite"/>
 </path>
</g>
</svg>
EOF

# Automotive - spinning wheel
cat > "$DIR/Automotive.svg" <<EOF
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
   <radialGradient id="bg-auto" cx="50%" cy="60%" r="55%">
     <stop offset="0%" stop-color="#212121" stop-opacity="0.15" />
     <stop offset="100%" stop-color="#fff" stop-opacity="0" />
   </radialGradient>
</defs>
<ellipse cx="200" cy="200" rx="140" ry="80" fill="url(#bg-auto)" />
<g>
  <circle cx="200" cy="200" r="65" fill="#212121"/>
  <circle cx="200" cy="200" r="45" fill="#fafafa" stroke="#616161" stroke-width="8"/>
  <g>
    <rect x="198" y="130" width="4" height="45" fill="#b0bec5"/>
    <rect x="198" y="225" width="4" height="45" fill="#b0bec5"/>
    <rect x="130" y="198" width="45" height="4" fill="#b0bec5"/>
    <rect x="225" y="198" width="45" height="4" fill="#b0bec5"/>
  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="2s" repeatCount="indefinite"/>
  </g>
</g>
</svg>
EOF

echo "SVG hero images with animation have been created in $DIR"
