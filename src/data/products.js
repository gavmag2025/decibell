// Specs: Decibell's official spec sheets (decibell.co.za, 2024/2025).
// Prices: indicative South African retail prices incl. VAT (pcinternational.co.za, pricecheck.co.za, Oct 2026).
// Retail prices change, so confirm before selling. Phones had no public price: shown as price on request.
export const CATEGORIES = ['All', 'Performance', 'Everyday', 'Phones']
export const products = [
  { id: 'am02-pro', name: 'AM02 Pro', cat: 'Performance', badge: 'Flagship', price: 8394, hue: 190, cpuScore: 82,
    tag: 'Ryzen 7 power in a 12 cm box, with USB-C and DisplayPort.',
    chip: 'AMD Ryzen 7 5875U', ram: '16GB', storage: '1TB SSD', os: 'Windows 11 Pro',
    dims: '123.5 x 123.5 x 40 mm', bt: 'Bluetooth 4.2 / 5.2',
    ports: 'USB 3.0 x3, USB 2.0 x1, USB-C, HDMI, DisplayPort, RJ45, 3.5mm audio, DC',
    portCount: 9, options: '16GB / 512GB or 16GB / 1TB SSD',
    feats: ['8-core, 16-thread Ryzen 7 processor', 'Dual display out: HDMI plus DisplayPort', 'USB-C and four USB-A ports', 'Windows 11 Professional pre-installed'] },
  { id: 'ad15', name: 'AD15', cat: 'Performance', badge: 'Core i9', price: 8259, hue: 280, cpuScore: 90,
    tag: 'Intel Core i9 muscle for demanding desktop work.',
    chip: 'Intel Core i9-11900H', ram: '16GB', storage: '1TB SSD', os: 'Windows 11 Pro',
    dims: '128 x 128 x 41.3 mm', bt: 'Bluetooth 5.0',
    ports: 'USB 3.0 x4, HDMI x2, RJ45, 3.5mm audio, DC',
    portCount: 8, options: '16GB / 512GB or 16GB / 1TB SSD',
    feats: ['8-core, 16-thread i9 processor', 'Dual HDMI for two displays', 'Four USB 3.0 ports', 'Windows 11 Professional pre-installed'] },
  { id: 'gk3', name: 'GK3', cat: 'Everyday', badge: 'Best seller', price: 5749, hue: 210, cpuScore: 42,
    tag: 'Dual-LAN, dual-HDMI workhorse for offices and shops.',
    chip: 'Intel Alder Lake-N N97', ram: '8GB', storage: '256GB SSD', os: 'Windows 11 Pro',
    dims: '130 x 130 x 47.5 mm', bt: 'Bluetooth 4.2 / 5.2',
    ports: 'USB 3.0 x2, USB 2.0 x2, HDMI 2.0 x2, RJ45 x2, 3.5mm audio, DC',
    portCount: 9, options: '8GB / 256GB SSD',
    feats: ['Two gigabit LAN ports', 'Two HDMI 2.0 outputs', 'Low-power Alder Lake-N chip', 'Windows 11 Professional pre-installed'] },
  { id: 'n3a', name: 'N3A', cat: 'Everyday', badge: 'Intel i3', price: 5750, hue: 160, cpuScore: 55,
    tag: 'Core i3 speed with USB-C and DisplayPort.',
    chip: 'Intel Core i3-1215U', ram: '8GB', storage: '256GB SSD', os: 'Windows 11 Pro',
    dims: '128 x 128 x 41.3 mm', bt: 'Bluetooth 4.2 / 5.2',
    ports: 'USB 3.0 x4, USB 2.0 x2, USB-C, HDMI, DisplayPort, RJ45, 3.5mm audio, DC',
    portCount: 11, options: '8GB / 256GB or 16GB / 512GB SSD',
    feats: ['12th-gen Intel Core processor', 'Six USB-A ports plus USB-C', 'HDMI and DisplayPort outputs', 'Windows 11 Professional pre-installed'] },
  { id: 's1', name: 'S1 Intel', cat: 'Everyday', badge: 'Value', price: 4199, hue: 30, cpuScore: 45,
    tag: 'The affordable all-rounder with 16GB as standard.',
    chip: 'Intel Alder Lake N150', ram: '16GB', storage: '512GB SSD', os: 'Windows 11 Pro',
    dims: '124 x 126 x 41.7 mm', bt: 'Bluetooth 4.2 / 5.2',
    ports: 'USB 3.0 x2, USB 2.0 x2, HDMI x2, RJ45 x2, 3.5mm audio, DC',
    portCount: 9, options: '16GB / 512GB SSD',
    feats: ['16GB memory as standard', 'Two HDMI outputs, two LAN ports', 'Compact 12 cm footprint', 'Windows 11 Professional pre-installed'] },
  { id: 'db6025', name: 'DB6025', cat: 'Phones', badge: '3G', price: null, hue: 330,
    tag: 'Big 5.99" Android 11 smartphone with dual SIM and GPS.',
    chip: 'SC7731E', ram: '2GB', storage: '16GB', os: 'Android 11', display: '5.99" FWVGA+ 480 x 960',
    dims: '159.5 x 76.1 x 9.15 mm', bt: 'Bluetooth 4.2', ports: 'Dual SIM, FM radio, GPS, flashlight',
    camera: '8MP rear, 2MP front', battery: '3000mAh Li-ion', network: '3G',
    sheet: '2025/04/Decibell-DB6025.pdf',
    full: [['Model', 'Decibell DB6025'], ['Operating system', 'Android 11'], ['Display', '5.99-inch FWVGA+ 480 x 960'], ['Chipset', 'SC7731E'],
      ['Memory', '2GB RAM + 16GB ROM'], ['Camera', '8MP rear / 2MP front'], ['Network', '3G'], ['SIM', 'Two SIM cards'],
      ['Battery', '3000mAh Li-ion'], ['Bluetooth', '4.2'], ['GPS', 'Yes'], ['FM radio', 'Yes'], ['Flashlight', 'Yes, 130mA'],
      ['Dimensions', '159.5 x 76.1 x 9.15 mm'], ['Weight', '188g']],
    feats: ['5.99" display on a slim 9.15mm body', 'Dual SIM with GPS and FM radio', '8MP rear and 2MP front cameras', '3000mAh battery'] },
  { id: 'db6025-4g', name: 'DB6025 4G', cat: 'Phones', badge: '4G', price: null, hue: 320,
    tag: 'The DB6025 with dual 4G SIM support.',
    chip: 'SC7731E', ram: '2GB', storage: '16GB', os: 'Android 11', display: '5.99" FWVGA+ 480 x 960',
    dims: '159.5 x 76.1 x 9.15 mm', bt: 'Bluetooth 4.2', ports: 'Dual 4G SIM, FM radio, GPS, flashlight',
    camera: '8MP rear, 2MP front', battery: '3000mAh Li-ion', network: '3G / 4G',
    sheet: '2025/04/Decibell-DB6025-4G.pdf',
    full: [['Model', 'Decibell DB6025-4G'], ['Operating system', 'Android 11'], ['Display', '5.99-inch FWVGA+ 480 x 960'], ['Chipset', 'SC7731E'],
      ['Memory', '2GB RAM + 16GB ROM'], ['Camera', '8MP rear / 2MP front'], ['Network', '3G / 4G'], ['SIM', 'Dual 4G'],
      ['Battery', '3000mAh Li-ion'], ['Bluetooth', '4.2'], ['GPS', 'Yes'], ['FM radio', 'Yes'], ['Flashlight', 'Yes, 130mA'],
      ['Dimensions', '159.5 x 76.1 x 9.15 mm'], ['Weight', '188g']],
    feats: ['Dual 4G SIM support', 'Android 11 with GPS and FM radio', '8MP rear and 2MP front cameras', '3000mAh battery'] },
  { id: 'db1723', name: 'DB1723', cat: 'Phones', badge: 'Feature phone', price: null, hue: 50,
    tag: 'Tough, simple dual-SIM feature phone with a torch.',
    chip: 'SC6531E', ram: '32MB', storage: '32MB ROM', os: 'Feature phone OS', display: '1.77" QQVGA 128 x 160',
    dims: '113.5 x 4.8 x 14.3 mm (as printed on the sheet)', ports: 'Dual SIM, FM radio, flashlight',
    camera: '0.08MP', battery: '800mAh Li-ion', network: '2G 850/900/1800/1900',
    sheet: '2025/03/Decibell-DB1723-Spec-Sheet.pdf',
    full: [['Model', 'Decibell DB1723'], ['Display', '1.77-inch QQVGA 128 x 160'], ['Chipset', 'SC6531E'], ['Memory', '32MB RAM + 32MB ROM'],
      ['Camera', '0.08MP'], ['Network', '2G 850 / 900 / 1800 / 1900'], ['SIM', 'Two SIM cards'], ['Battery', '800mAh Li-ion'],
      ['GPS', 'No'], ['FM radio', 'Wireless FM'], ['Flashlight', 'Yes'], ['Dimensions', '113.5 x 4.8 x 14.3 mm (as printed on the sheet)'], ['Weight', '68g']],
    feats: ['Dual SIM', 'Wireless FM radio', 'Built-in flashlight', 'Light at 68g'] },
]
export const isPhone = (p) => p.cat === 'Phones'
export const money = (n) => (n == null ? 'Price on request' : 'R ' + n.toLocaleString('en-ZA'))
const num = (s) => parseFloat(s)
// Meters: CPU class is our estimate; memory/storage/ports come straight from the spec.
export const meters = (p) => {
  const gb = (s) => (/TB/.test(s) ? num(s) * 1024 : num(s))
  return [
    ['Processor class (est.)', p.cpuScore || 0],
    ['Memory', Math.min(100, Math.round((gb(p.ram) / 32) * 100))],
    ['Storage', Math.min(100, Math.round((gb(p.storage) / 1024) * 100))],
    ['Ports', Math.min(100, Math.round((p.portCount || 0) / 11 * 100))],
  ]
}
const NO_CUTOUT = ['db1723']
const base = import.meta.env.BASE_URL
for (const p of products) {
  p.shot = `${base}img/${p.id}-shot.webp`
  p.img = NO_CUTOUT.includes(p.id) ? null : `${base}img/${p.id}.webp`
}
export const SHEET_BASE = 'https://decibell.co.za/wp-content/uploads/'
export const specRows = (p) => {
  if (p.full) return [...p.full, ['Warranty', '1 year standard'], ['Shipping', 'Free across South Africa']]
  const pc = !isPhone(p)
  return [
    [pc ? 'Processor' : 'Chipset', p.chip], ['Memory', p.ram], ['Storage', p.storage], ['Operating system', p.os],
    p.display && ['Display', p.display], p.camera && ['Camera', p.camera], p.battery && ['Battery', p.battery], p.network && ['Network', p.network],
    ['Ports / features', p.ports], p.bt && ['Bluetooth', p.bt], ['Dimensions', p.dims],
    p.options && ['Configurations', p.options], ['Warranty', '1 year standard'], ['Shipping', 'Free across South Africa'],
  ].filter(Boolean)
}
