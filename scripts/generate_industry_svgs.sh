#!/bin/bash

# Output directory
OUT_DIR="industry_svgs"
mkdir -p "$OUT_DIR"

# Function to write SVG content
write_svg() {
  local name=$1
  local content=$2
  echo "$content" > "$OUT_DIR/${name}.svg"
  echo "Created: $OUT_DIR/${name}.svg"
}

# SVGs with basic animations relevant to each industry

# 1. Healthcare - pulsing heart
write_svg "Healthcare" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="red" d="M50 30 C50 15, 80 15, 80 35 C80 55, 50 70, 50 90 C50 70, 20 55, 20 35 C20 15, 50 15, 50 30 Z">
    <animate attributeName="d" values="
      M50 30 C50 15, 80 15, 80 35 C80 55, 50 70, 50 90 C50 70, 20 55, 20 35 C20 15, 50 15, 50 30 Z;
      M50 28 C50 13, 82 13, 82 35 C82 58, 50 72, 50 90 C50 72, 18 58, 18 35 C18 13, 50 13, 50 28 Z;
      M50 30 C50 15, 80 15, 80 35 C80 55, 50 70, 50 90 C50 70, 20 55, 20 35 C20 15, 50 15, 50 30 Z"
      dur="1s" repeatCount="indefinite"/>
  </path>
</svg>'

# 2. Education - bouncing book
write_svg "Education" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="40" width="40" height="20" fill="#2e86de">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="1s" repeatCount="indefinite"/>
  </rect>
</svg>'

# 3. Fintech - blinking dollar sign
write_svg "Fintech" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <text x="40" y="60" font-size="30" fill="green">$</text>
  <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
</svg>'

# 4. E-commerce - rotating shopping cart
write_svg "E-commerce" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect x="20" y="40" width="60" height="30" fill="#f39c12"/>
    <circle cx="30" cy="75" r="5" fill="#2c3e50"/>
    <circle cx="70" cy="75" r="5" fill="#2c3e50"/>
    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 60" to="360 50 60" dur="4s" repeatCount="indefinite"/>
  </g>
</svg>'

# 5. Logistics - moving box
write_svg "Logistics" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="40" width="20" height="20" fill="#8e44ad">
    <animateTransform attributeName="transform" type="translate" values="0,0;60,0;0,0" dur="3s" repeatCount="indefinite"/>
  </rect>
</svg>'

# 6. Real Estate - bouncing house
write_svg "Real_Estate" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,20 70,40 30,40" fill="#c0392b"/>
  <rect x="35" y="40" width="30" height="30" fill="#ecf0f1">
    <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2s" repeatCount="indefinite"/>
  </rect>
</svg>'

# 7. Hospitality - blinking bell
write_svg "Hospitality" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="#f1c40f">
    <animate attributeName="r" values="20;22;20" dur="1s" repeatCount="indefinite"/>
  </circle>
</svg>'

# 8. Insurance - shield pulse
write_svg "Insurance" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 15 L70 30 L70 60 L50 80 L30 60 L30 30 Z" fill="#2980b9">
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
  </path>
</svg>'

# 9. Manufacturing - rotating gear
write_svg "Manufacturing" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="#7f8c8d"/>
  <g>
    <circle cx="50" cy="50" r="5" fill="#2c3e50"/>
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"/>
  </g>
</svg>'

# 10. Retail - animated tag
write_svg "Retail" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,30 70,30 90,50 50,90 10,50" fill="#e67e22">
    <animateTransform attributeName="transform" type="rotate" from="-5 50 50" to="5 50 50" dur="1s" repeatCount="indefinite" additive="sum"/>
  </polygon>
</svg>'

# 11. Technology - blinking screen
write_svg "Technology" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="30" width="40" height="30" fill="#3498db"/>
  <rect x="35" y="35" width="30" height="20" fill="white">
    <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
  </rect>
</svg>'

# 12. Energy - glowing bulb
write_svg "Energy" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="20" fill="yellow">
    <animate attributeName="r" values="20;22;20" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <rect x="45" y="60" width="10" height="20" fill="#7f8c8d"/>
</svg>'

# 13. Travel - flying paper plane
write_svg "Travel" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="10,50 90,20 70,60 50,50" fill="#95a5a6">
    <animateTransform attributeName="transform" type="translate" values="0,0; 10,-10; 0,0" dur="2s" repeatCount="indefinite"/>
  </polygon>
</svg>'

# 14. Telecom - signal waves
write_svg "Telecom" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="2" fill="#34495e"/>
  <circle cx="50" cy="50" r="10" stroke="#2980b9" stroke-width="1" fill="none">
    <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>'

# 15. Automotive - spinning wheel
write_svg "Automotive" '<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" stroke="black" stroke-width="4" fill="#bdc3c7"/>
  <line x1="50" y1="50" x2="50" y2="30" stroke="black" stroke-width="2">
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
  </line>
</svg>'

echo "All industry SVGs generated in '$OUT_DIR'."
