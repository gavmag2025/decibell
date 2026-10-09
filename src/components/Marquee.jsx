export default function Marquee() {
  const t = ['Ryzen 7', 'Core i9', 'Core i3', 'Intel N150', 'Windows 11 Pro', 'Dual HDMI', 'Dual LAN', 'USB-C', 'DisplayPort', 'SSD']
  return <div className="marquee" aria-hidden><div>{[...t, ...t, ...t].map((x, i) => <span key={i}>{x}<em>✦</em></span>)}</div></div>
}
