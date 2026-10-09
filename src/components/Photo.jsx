// Real Decibell product photo. Cut-out PNG-style shots float on the dark theme;
// models without a cut-out fall back to the white-background studio shot.
export default function Photo({ p, className = '', shot = false, eager = false }) {
  const light = shot || !p.img
  return (
    <div className={`photo ${light ? 'light' : ''} ${className}`} style={{ '--h': p.hue }}>
      <img src={light ? p.shot : p.img} alt={`Decibell ${p.name}`} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  )
}
