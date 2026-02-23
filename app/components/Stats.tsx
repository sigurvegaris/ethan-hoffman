export default function Stats() {
    const stats = [
      { number: '170M+', label: 'Total Views' },
      { number: '80K+', label: 'Followers' },
      { number: '200+', label: 'Performances' },
      { number: '2', label: 'Sold-Out Wiltern Shows' },
    ]
  
    return (
      <section style={{
        backgroundColor: '#1a1814',
        padding: '4rem 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center',
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                padding: '2rem 1rem',
                borderLeft: i !== 0 ? '1px solid rgba(196,168,130,0.2)' : 'none',
              }}>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '600',
                  color: '#c4622d',
                  marginBottom: '0.5rem',
                  lineHeight: '1',
                }}>
                  {stat.number}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(253,250,245,0.5)',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <style>{`
          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </section>
    )
  }