export default function Marquee() {
  const t = ['Ryzen 7', 'Intel Core', 'DDR5', 'NVMe', 'WiFi 6E', 'USB4', '2.5G LAN', '4K · 8K', 'Windows 11', 'Linux ready']
  return <div className="marquee" aria-hidden><div>{[...t, ...t, ...t].map((x, i) => <span key={i}>{x}<em>✦</em></span>)}</div></div>
}
