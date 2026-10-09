// DEMO DATA: prices and some specs are placeholders, not Decibell's real pricing.
export const CATEGORIES = ['All', 'Gaming', 'Office', 'Creator', 'Phones']
export const products = [
  { id: 'am02-pro', name: 'AM02 Pro', cat: 'Gaming', badge: 'Flagship', price: 18999, was: 21999, hue: 190,
    tag: 'Desktop-class gaming in a palm-sized chassis.',
    chip: 'AMD Ryzen 7 8845HS', ram: '32GB DDR5', storage: '1TB NVMe', gpu: 'Radeon 780M', ports: 'USB4, HDMI 2.1, 2.5G LAN',
    perf: { cpu: 94, gpu: 82, cool: 88, quiet: 80 },
    feats: ['8-core Zen 4 with 16 threads', 'Dual-fan vapour chamber cooling', 'Drives 4 displays up to 8K', 'WiFi 6E + Bluetooth 5.3'] },
  { id: 'gk3', name: 'GK3', cat: 'Office', badge: 'Best seller', price: 5499, was: 6299, hue: 210,
    tag: 'The silent workhorse for every desk.',
    chip: 'Intel N100', ram: '16GB DDR4', storage: '512GB SSD', gpu: 'Intel UHD', ports: 'HDMI x2, USB 3.2, Gigabit LAN',
    perf: { cpu: 52, gpu: 40, cool: 70, quiet: 96 },
    feats: ['Fanless-quiet under office loads', 'VESA mount in the box', 'Sips under 15W', 'Windows 11 Pro ready'] },
  { id: 'n3a', name: 'N3A', cat: 'Office', badge: 'Value', price: 3999, price_note: '', was: null, hue: 160,
    tag: 'Everything you need, nothing you do not.',
    chip: 'Intel N95', ram: '8GB DDR4', storage: '256GB SSD', gpu: 'Intel UHD', ports: 'HDMI, USB 3.0 x3, Gigabit LAN',
    perf: { cpu: 44, gpu: 34, cool: 66, quiet: 92 },
    feats: ['Ultra compact 12cm footprint', 'Dual display output', 'Expandable storage slot', 'Ideal for schools and shops'] },
  { id: 'ad15', name: 'AD15', cat: 'Creator', badge: 'New', price: 12499, was: 13999, hue: 280,
    tag: 'Edit, render and stream without the tower.',
    chip: 'Intel Core i5-12450H', ram: '16GB DDR5', storage: '1TB NVMe', gpu: 'Intel UHD Xe', ports: 'Thunderbolt 4, HDMI, 2.5G LAN',
    perf: { cpu: 76, gpu: 58, cool: 82, quiet: 78 },
    feats: ['12 cores for fast timeline scrubbing', 'Thunderbolt 4 for fast external drives', 'Dual NVMe slots', 'Hardware AV1 decode'] },
  { id: 's1', name: 'S1 Intel', cat: 'Creator', badge: '', price: 8999, was: null, hue: 30,
    tag: 'Balanced power for multitasking pros.',
    chip: 'Intel Core i3-N305', ram: '16GB DDR5', storage: '512GB NVMe', gpu: 'Intel UHD', ports: 'HDMI 2.0, USB-C, 2.5G LAN',
    perf: { cpu: 60, gpu: 44, cool: 74, quiet: 88 },
    feats: ['8 efficient cores', 'Triple 4K output', 'WiFi 6 + BT 5.2', 'Aluminium unibody'] },
  { id: 'db6025', name: 'DB6025 4G', cat: 'Phones', badge: '4G', price: 2299, was: 2599, hue: 330,
    tag: 'Big screen smartphone, big battery.',
    chip: 'Octa-core 4G', ram: '4GB', storage: '128GB', gpu: '6.5" HD+', ports: 'USB-C, dual SIM, microSD',
    perf: { cpu: 36, gpu: 30, cool: 60, quiet: 90 },
    feats: ['5000mAh battery', 'Dual SIM + microSD', 'Face unlock', '13MP dual camera'] },
  { id: 'db1723', name: 'DB1723', cat: 'Phones', badge: 'Feature phone', price: 499, was: null, hue: 50,
    tag: 'Tough, simple, days of standby.',
    chip: 'Feature OS', ram: '32MB', storage: '32GB card', gpu: '2.4" display', ports: 'Micro-USB, dual SIM',
    perf: { cpu: 10, gpu: 5, cool: 60, quiet: 90 },
    feats: ['Weeks of standby', 'Torch + FM radio', 'Dual SIM', 'Loud speaker'] },
]
export const money = (n) => 'R ' + n.toLocaleString('en-ZA')

const NO_CUTOUT = ['db1723']
const base = import.meta.env.BASE_URL
for (const p of products) {
  p.shot = `${base}img/${p.id}-shot.webp`
  p.img = NO_CUTOUT.includes(p.id) ? null : `${base}img/${p.id}.webp`
}
