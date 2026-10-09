// Stylised mini PC drawn in SVG so it scales crisply and animates with GSAP.
export default function MiniPC({ hue = 190, className = '', id = 'a' }) {
  const c = `hsl(${hue} 100% 60%)`
  return (
    <svg className={className} viewBox="0 0 420 300" role="img" aria-label="Decibell mini PC">
      <defs>
        <linearGradient id={`top${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2b3140" /><stop offset="1" stopColor="#10131b" /></linearGradient>
        <linearGradient id={`side${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a1f2b" /><stop offset="1" stopColor="#07080d" /></linearGradient>
        <radialGradient id={`glow${id}`}><stop offset="0" stopColor={c} stopOpacity=".55" /><stop offset="1" stopColor={c} stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse className="pc-glow" cx="210" cy="250" rx="190" ry="40" fill={`url(#glow${id})`} />
      <polygon points="60,120 210,60 360,120 210,180" fill={`url(#top${id})`} stroke="#3a4152" />
      <polygon points="60,120 210,180 210,235 60,175" fill={`url(#side${id})`} stroke="#2a3040" />
      <polygon points="210,180 360,120 360,175 210,235" fill="#0b0d14" stroke="#2a3040" />
      <g className="pc-fan" >
        <circle cx="210" cy="120" r="34" fill="none" stroke={c} strokeOpacity=".5" />
        {[0, 60, 120, 180, 240, 300].map((a) => <path key={a} d="M210 120 q14-26 4-34" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" transform={`rotate(${a} 210 120)`} />)}
      </g>
      <g stroke={c} strokeWidth="2.5" strokeLinecap="round" className="pc-led">
        <line x1="82" y1="150" x2="130" y2="168" /><line x1="140" y1="172" x2="150" y2="176" />
      </g>
      <rect x="226" y="196" width="14" height="6" rx="2" fill="#000" stroke={c} transform="skewY(-22)" />
      <rect x="248" y="187" width="14" height="6" rx="2" fill="#000" stroke={c} transform="skewY(-22)" />
      <rect x="270" y="178" width="14" height="6" rx="2" fill="#000" stroke={c} transform="skewY(-22)" />
    </svg>
  )
}
