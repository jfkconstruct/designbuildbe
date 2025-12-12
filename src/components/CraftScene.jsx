import styles from './CraftScene.module.css'

function CraftScene({ className }) {
  return (
    <svg 
      viewBox="0 0 600 550" 
      className={`${styles.scene} ${className || ''}`}
    >
      <defs>
        <pattern id="feltHill" patternUnits="userSpaceOnUse" width="10" height="10">
          <rect width="10" height="10" fill="#5A8C69"/>
          <circle cx="1" cy="2" r="0.7" fill="#4A7C59" opacity="0.6"/>
          <circle cx="6" cy="1" r="0.6" fill="#6A9C79" opacity="0.5"/>
          <circle cx="3" cy="6" r="0.7" fill="#4A7C59" opacity="0.5"/>
          <circle cx="8" cy="7" r="0.6" fill="#6A9C79" opacity="0.4"/>
          <circle cx="2" cy="9" r="0.5" fill="#4A7C59" opacity="0.4"/>
          <circle cx="7" cy="4" r="0.6" fill="#6A9C79" opacity="0.5"/>
        </pattern>
        <linearGradient id="warmSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5"/>
          <stop offset="60%" stopColor="#F0E6DB"/>
          <stop offset="100%" stopColor="#E8DFD4"/>
        </linearGradient>
        <pattern id="cardboardRoof" patternUnits="userSpaceOnUse" width="12" height="6">
          <rect width="12" height="6" fill="#C4703E"/>
          <rect x="0" y="0" width="12" height="2.5" fill="#A85D32"/>
          <rect x="0" y="3.5" width="12" height="2.5" fill="#D4804E"/>
        </pattern>
        <pattern id="cardboardWall" patternUnits="userSpaceOnUse" width="6" height="12">
          <rect width="6" height="12" fill="#D4C4A8"/>
          <line x1="0" y1="0" x2="0" y2="12" stroke="#C4B498" strokeWidth="0.6"/>
          <line x1="3" y1="0" x2="3" y2="12" stroke="#E4D4B8" strokeWidth="0.4"/>
        </pattern>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="5" dy="8" stdDeviation="6" floodColor="#2C2416" floodOpacity="0.15"/>
        </filter>
        <filter id="thinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#2C2416" floodOpacity="0.12"/>
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="600" height="300" fill="url(#warmSky)"/>
      
      {/* Mountains */}
      <path d="M-20 300 L80 180 L140 230 L220 140 L300 210 L400 120 L500 190 L580 140 L620 300 Z" fill="#8BAA8B" opacity="0.4"/>
      <path d="M-20 300 L60 220 L130 260 L210 180 L300 240 L420 170 L520 230 L620 300 Z" fill="#7A9A7A" opacity="0.5"/>

      {/* Sun */}
      <circle cx="520" cy="70" r="48" fill="#E8C9A0" filter="url(#thinShadow)"/>
      <circle cx="520" cy="70" r="42" fill="#F0D9B0"/>
      <path d="M495 55 Q520 62, 545 52" stroke="#D4B990" strokeWidth="2" fill="none" opacity="0.5"/>

      {/* Clouds */}
      <g filter="url(#thinShadow)">
        <ellipse cx="120" cy="85" rx="55" ry="32" fill="#FAF8F5"/>
        <ellipse cx="85" cy="76" rx="35" ry="25" fill="#FEFEFE"/>
        <ellipse cx="155" cy="68" rx="38" ry="28" fill="#FEFEFE"/>
        <ellipse cx="115" cy="60" rx="30" ry="20" fill="#FEFEFE"/>
      </g>
      <g filter="url(#thinShadow)">
        <ellipse cx="350" cy="65" rx="48" ry="28" fill="#FAF8F5"/>
        <ellipse cx="320" cy="55" rx="30" ry="22" fill="#FEFEFE"/>
        <ellipse cx="380" cy="50" rx="35" ry="24" fill="#FEFEFE"/>
      </g>

      {/* Main hill */}
      <ellipse cx="300" cy="545" rx="290" ry="35" fill="#2C2416" opacity="0.1"/>
      <path d="M-10 550 Q-10 330, 120 295 Q300 245, 480 295 Q610 330, 610 550 Z" fill="url(#feltHill)" filter="url(#softShadow)"/>
      <path d="M5 540 Q5 345, 125 302 Q300 255, 475 302 Q595 342, 595 540" fill="none" stroke="#6A9C79" strokeWidth="3" opacity="0.4"/>

      {/* Back left tree */}
      <g filter="url(#softShadow)">
        <rect x="75" y="265" width="22" height="80" fill="#8B6914" rx="2"/>
        <rect x="79" y="265" width="8" height="80" fill="#9B7924" opacity="0.5"/>
        <ellipse cx="86" cy="240" rx="52" ry="48" fill="#3D6B4A"/>
        <ellipse cx="80" cy="226" rx="42" ry="38" fill="#4A7C59"/>
        <ellipse cx="90" cy="210" rx="35" ry="30" fill="#5A8C69"/>
        <ellipse cx="84" cy="196" rx="26" ry="22" fill="#6A9C79"/>
      </g>

      {/* Small back tree */}
      <g filter="url(#thinShadow)">
        <rect x="480" y="250" width="14" height="50" fill="#7B5912" rx="2"/>
        <ellipse cx="487" cy="235" rx="30" ry="28" fill="#3D6B4A"/>
        <ellipse cx="484" cy="225" rx="24" ry="22" fill="#4A7C59"/>
        <ellipse cx="489" cy="215" rx="18" ry="16" fill="#5A8C69"/>
      </g>

      {/* House */}
      <g filter="url(#softShadow)">
        <rect x="210" y="305" width="150" height="125" fill="url(#cardboardWall)" rx="4"/>
        <line x1="210" y1="315" x2="210" y2="430" stroke="#B4A488" strokeWidth="2"/>
        <line x1="360" y1="315" x2="360" y2="430" stroke="#E8D8C0" strokeWidth="1"/>
        <path d="M190 312 L285 225 L380 312 Z" fill="url(#cardboardRoof)"/>
        <path d="M195 308 L285 228 L375 308" fill="none" stroke="#8B4D28" strokeWidth="2.5"/>
        <line x1="215" y1="300" x2="260" y2="250" stroke="#9B5D30" strokeWidth="1.2" opacity="0.5"/>
        <line x1="240" y1="305" x2="275" y2="260" stroke="#9B5D30" strokeWidth="1.2" opacity="0.5"/>
        <line x1="310" y1="305" x2="285" y2="262" stroke="#9B5D30" strokeWidth="1.2" opacity="0.5"/>
        <line x1="345" y1="300" x2="305" y2="255" stroke="#9B5D30" strokeWidth="1.2" opacity="0.5"/>
        <rect x="260" y="365" width="48" height="65" fill="#C4703E" rx="3"/>
        <rect x="265" y="370" width="38" height="57" fill="#D4804E" rx="2"/>
        <circle cx="294" cy="400" r="5" fill="#A45F32"/>
        <rect x="222" y="335" width="32" height="32" fill="#FAF8F5" rx="2"/>
        <line x1="238" y1="335" x2="238" y2="367" stroke="#C4B498" strokeWidth="4"/>
        <line x1="222" y1="351" x2="254" y2="351" stroke="#C4B498" strokeWidth="4"/>
        <rect x="315" y="335" width="32" height="32" fill="#FAF8F5" rx="2"/>
        <line x1="331" y1="335" x2="331" y2="367" stroke="#C4B498" strokeWidth="4"/>
        <line x1="315" y1="351" x2="347" y2="351" stroke="#C4B498" strokeWidth="4"/>
        <rect x="275" y="222" width="22" height="12" fill="#F5F0E6" opacity="0.8" transform="rotate(-2 286 228)"/>
        <rect x="320" y="248" width="28" height="45" fill="#B4A488"/>
        <rect x="317" y="244" width="34" height="8" fill="#C4B498"/>
      </g>

      {/* Front right tree */}
      <g filter="url(#softShadow)">
        <rect x="450" y="330" width="30" height="100" fill="#7B5912" rx="3"/>
        <rect x="456" y="330" width="10" height="100" fill="#8B6922" opacity="0.5"/>
        <circle cx="465" cy="295" r="65" fill="#3D6B4A"/>
        <circle cx="452" cy="275" r="52" fill="#4A7C59"/>
        <circle cx="480" cy="265" r="45" fill="#4A7C59"/>
        <circle cx="463" cy="248" r="38" fill="#5A8C69"/>
        <circle cx="470" cy="225" r="28" fill="#6A9C79"/>
        <path d="M415 305 Q450 295, 495 312" stroke="#2D5B3A" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M430 260 Q463 250, 505 268" stroke="#3A6B48" strokeWidth="2" fill="none" opacity="0.3"/>
      </g>

      {/* Left bush */}
      <g filter="url(#thinShadow)">
        <ellipse cx="50" cy="450" rx="45" ry="36" fill="#4A7C59"/>
        <ellipse cx="38" cy="440" rx="32" ry="26" fill="#5A8C69"/>
        <ellipse cx="65" cy="436" rx="28" ry="22" fill="#5A8C69"/>
      </g>

      {/* Right bush */}
      <g filter="url(#thinShadow)">
        <ellipse cx="395" cy="420" rx="28" ry="22" fill="#4A7C59"/>
        <ellipse cx="385" cy="412" rx="20" ry="16" fill="#5A8C69"/>
        <ellipse cx="405" cy="410" rx="18" ry="14" fill="#5A8C69"/>
      </g>

      {/* Fence */}
      <g filter="url(#thinShadow)">
        <rect x="130" y="385" width="12" height="65" fill="#E8D4A8" rx="2"/>
        <rect x="155" y="382" width="12" height="68" fill="#E8D4A8" rx="2"/>
        <rect x="180" y="388" width="12" height="62" fill="#E8D4A8" rx="2"/>
        <rect x="125" y="405" width="75" height="9" fill="#DCC498" rx="2"/>
        <rect x="125" y="430" width="75" height="9" fill="#DCC498" rx="2"/>
      </g>

      {/* Flowers */}
      <g>
        <circle cx="160" cy="470" r="11" fill="#C4703E"/>
        <circle cx="150" cy="464" r="9" fill="#D4804E"/>
        <circle cx="170" cy="464" r="9" fill="#D4804E"/>
        <circle cx="152" cy="478" r="9" fill="#D4804E"/>
        <circle cx="168" cy="478" r="9" fill="#D4804E"/>
        <circle cx="160" cy="470" r="6" fill="#F0D9B0"/>
      </g>
      <g>
        <circle cx="540" cy="420" r="10" fill="#E8DFD4"/>
        <circle cx="531" cy="413" r="8" fill="#FAF8F5"/>
        <circle cx="549" cy="413" r="8" fill="#FAF8F5"/>
        <circle cx="533" cy="428" r="8" fill="#FAF8F5"/>
        <circle cx="547" cy="428" r="8" fill="#FAF8F5"/>
        <circle cx="540" cy="420" r="5" fill="#C4703E"/>
      </g>
      <g>
        <circle cx="255" cy="480" r="9" fill="#6A9C79"/>
        <circle cx="247" cy="474" r="7" fill="#7AAC89"/>
        <circle cx="263" cy="474" r="7" fill="#7AAC89"/>
        <circle cx="249" cy="487" r="7" fill="#7AAC89"/>
        <circle cx="261" cy="487" r="7" fill="#7AAC89"/>
        <circle cx="255" cy="480" r="4.5" fill="#F0D9B0"/>
      </g>
      <g>
        <circle cx="420" cy="460" r="7" fill="#C4703E"/>
        <circle cx="414" cy="455" r="5.5" fill="#D4804E"/>
        <circle cx="426" cy="455" r="5.5" fill="#D4804E"/>
        <circle cx="415" cy="466" r="5.5" fill="#D4804E"/>
        <circle cx="425" cy="466" r="5.5" fill="#D4804E"/>
        <circle cx="420" cy="460" r="3.5" fill="#F0D9B0"/>
      </g>

      {/* Windmill */}
      <g filter="url(#thinShadow)">
        <rect x="558" y="360" width="14" height="85" fill="#C4B498"/>
        <path d="M565 360 L565 315 L582 345 Z" fill="#C4703E" opacity="0.9"/>
        <path d="M565 360 L605 378 L580 390 Z" fill="#D4804E" opacity="0.9"/>
        <path d="M565 360 L565 400 L548 375 Z" fill="#C4703E" opacity="0.9"/>
        <path d="M565 360 L525 345 L550 330 Z" fill="#D4804E" opacity="0.9"/>
        <circle cx="565" cy="360" r="8" fill="#E8D4A8"/>
      </g>

      {/* Buttons */}
      <g>
        <circle cx="340" cy="475" r="14" fill="#5C5242" filter="url(#thinShadow)"/>
        <circle cx="335" cy="470" r="2.5" fill="#2C2416"/>
        <circle cx="345" cy="470" r="2.5" fill="#2C2416"/>
        <circle cx="335" cy="480" r="2.5" fill="#2C2416"/>
        <circle cx="345" cy="480" r="2.5" fill="#2C2416"/>
      </g>
      <g>
        <circle cx="500" cy="465" r="11" fill="#C4703E" filter="url(#thinShadow)"/>
        <circle cx="496" cy="461" r="2" fill="#8B4D28"/>
        <circle cx="504" cy="461" r="2" fill="#8B4D28"/>
        <circle cx="496" cy="469" r="2" fill="#8B4D28"/>
        <circle cx="504" cy="469" r="2" fill="#8B4D28"/>
      </g>
      <g>
        <circle cx="95" cy="495" r="10" fill="#4A7C59" filter="url(#thinShadow)"/>
        <circle cx="91" cy="491" r="1.8" fill="#2D5B3A"/>
        <circle cx="99" cy="491" r="1.8" fill="#2D5B3A"/>
        <circle cx="91" cy="499" r="1.8" fill="#2D5B3A"/>
        <circle cx="99" cy="499" r="1.8" fill="#2D5B3A"/>
      </g>

      {/* Yarn */}
      <path d="M60 510 Q85 500, 100 515 Q115 530, 145 520" stroke="#C4703E" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M470 495 Q490 485, 505 498" stroke="#5C5242" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>

      {/* Paper scraps */}
      <rect x="555" y="455" width="25" height="15" fill="#4A7C59" opacity="0.5" rx="1" transform="rotate(-15 567 462)"/>
      <rect x="35" y="520" width="20" height="12" fill="#D4804E" opacity="0.45" rx="1" transform="rotate(8 45 526)"/>
      <rect x="295" y="500" width="18" height="11" fill="#C4B498" opacity="0.4" rx="1" transform="rotate(-5 304 505)"/>
      <polygon points="220,495 240,508 210,512" fill="#5C5242" opacity="0.35"/>
      <polygon points="580,500 584,512 596,514 587,522 590,534 580,528 570,534 573,522 564,514 576,512" fill="#F0D9B0" opacity="0.6"/>
    </svg>
  )
}

export default CraftScene
